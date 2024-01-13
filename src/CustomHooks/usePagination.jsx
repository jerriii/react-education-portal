import { useEffect } from "react";

const usePagination = ({
  totalPosts,
  postsPerPage,
  currentPage,
  setCurrentPage,
  paginationClassName,
  previousBtnClassName,
  pageNumberClassName,
  nextBtnClassName,
  previousChildren,
  nextChildren,
}) => {
  let pages = [];

  useEffect(() => {
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pages.push(i);
    }
  });
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const pagination = (
    <div className={`${paginationClassName ? paginationClassName : ""}`}>
      <button
        className={`${
          currentPage === 1
            ? "hover:cursor-not-allowed"
            : "hover:cursor-pointer"
        } ${previousBtnClassName ? nextBtnClassName : ""}`}
        onClick={() => currentPage === 1 || setCurrentPage(currentPage - 1)}
      >
        {previousChildren}
      </button>
      {pages.map((page, index) => (
        <>
          <button
            key={index + 1}
            onClick={() => setCurrentPage(page)}
            className={`${pageNumberClassName ? pageNumberClassName : ""}`}
          >
            {page}
          </button>
        </>
      ))}
      <button
        className={`${
          currentPage === Math.ceil(totalPosts / postsPerPage)
            ? "hover:cursor-not-allowed"
            : "hover:cursor-pointer"
        } ${nextBtnClassName ? nextBtnClassName : ""}`}
        onClick={() =>
          currentPage === Math.ceil(totalPosts / postsPerPage) ||
          setCurrentPage(currentPage + 1)
        }
      >
        {nextChildren}
      </button>
    </div>
  );

  return [firstPostIndex, lastPostIndex, pagination];
};

export default usePagination;
