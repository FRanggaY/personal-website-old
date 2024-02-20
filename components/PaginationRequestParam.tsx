import React from 'react';

const PaginationRequestParam = ({ currentPage, totalPages, pageChange }:any) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <a href={pageChange(i)} key={i} className={"border-2 p-2 rounded-sm mx-2 " + (currentPage == i ? 'border-blue-500' : 'border-red-300')}>
         {i}
      </a>
    );
  }

  return (
    <div className="pt-8">
      {pages}
    </div>
  );
};

export default PaginationRequestParam;
