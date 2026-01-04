import { SITE } from "@config";

const getPageNumbers = (numberofPosts: number) => {
  const numberOfPages = numberofPosts / Number(SITE.postPerPage);

  let pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
    pageNumbers = [...pageNumbers, i];
  }
  return pageNumbers;
};

export default getPageNumbers;
