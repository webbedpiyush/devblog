---
author: Piyush Tiwari
pubDatetime: 2026-01-09T12:00:00Z
title: PlanetScale vs. Neon for Dummies Who Vibecode
slug: planetscale-vs-neon
featured: true
draft: false
tags:
  - databases
  - serverless
  - architecture
  - planetscale
  - neon
description: "Both are serverless databases, but they have adopted radically different strategies. One scales by managing traffic at the top, while the other scales by virtualizing the storage at the bottom."
---

Both are serverless databases, but they have adopted radically different strategies. One scales by managing traffic at the top, while the other scales by virtualizing the storage at the bottom. (Hold your horses, let me explain.)

![PlanetScale vs Neon Architecture Overview](/assets/planetscale-vs-neon-overview.png)

## Table of contents

## 1. PlanetScale (Top-Down Scaling)

PlanetScale is built on Vitess, which was originally created to scale YouTube. Its architecture manages complexity at the **proxy/application level**, before the query ever hits the disk.

**How it works:** When a query arrives, it hits a smart frontend proxy. This proxy analyzes the request and determines, "Where does this data live?" It then routes the query to the specific shard (instance of MySQL) that holds that data.

### Let me explain it with an analogy using Harry Potter

Imagine PlanetScale is Hogwarts. You (the user) are a first-year student handing over a request.

You don't just walk into any room. You have to go through the **Sorting Hat** (The Proxy).

The Hat reads your request and screams "SLYTHERIN!" (Shard A) or "GRYFFINDOR!" (Shard B).

It actively routes your traffic to a distinct physical location. It feels like one school, but the Hat is splitting the students across separate Houses to manage the load.

![PlanetScale Architecture](/assets/planetscale-architecture.png)

## 2. Neon (Bottom-Up Scaling)

Neon takes the opposite approach by separating compute from storage. It keeps the Postgres engine (the compute node) mostly standard but completely virtualizes the storage layer beneath it.

**How it works:** Neon kind of "fakes out" Postgres. The compute node (Postgres instance) thinks it is reading from and writing to a local hard drive. In reality, it streams transaction logs (WAL) to a distributed fleet of Page Servers written in (Rust Btw).

**Why do they do this?** By managing storage calls at the lowest level, they can offer features like **Time Travel query** (where you can query any version of your database).

**How?** Because the storage layer retains the full history of every page using WAL (Write Ahead Log—for those who don't know, it is used in Postgres for recovery).

### Let me explain with an analogy using one of my fav movies (The Matrix :: spoilers ahead)

Imagine the Neon compute node is Neo.

Neo thinks he is sitting at a desk, opening a normal drawer to file a document.

In reality, he is plugged into **The Matrix**. There is no drawer. It is a simulation connected to an infinite virtual storage.

When Neo reaches for a file, the system streams it into existence the millisecond he needs it.

And because it's a simulation, you can hit rewind (Time Travel) and replay the past instantly.

![Neon Architecture](/assets/neon-architecture.png)

---

> **TL;DR:** PlanetScale manages scale from the top (routing traffic smartly), while Neon manages scale from the bottom (virtualizing storage). Both are brilliant—just different approaches to the same problem.
