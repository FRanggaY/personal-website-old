"use client"

import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const PaginationMenu = ({
  total_pages,
  current_page,
  previous,
  next
}: {
  total_pages: number,
  current_page: number,
  previous: boolean,
  next: boolean,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: any) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(page));
    const updatedSearch = `?${params.toString()}`;
    const newPath = `${window.location.pathname}${updatedSearch}`;
    router.replace(newPath);
  };

  const pages = [];
  for (let i = 1; i <= total_pages; i++) {
    pages.push(
      <PaginationItem key={i}>
        <PaginationLink
          className='cursor-pointer'
          isActive={i === current_page}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </PaginationLink>
      </PaginationItem>
    );
  }

  return (
    <Pagination>
      <PaginationContent>
        {
          previous && <PaginationItem>
            <PaginationPrevious
              className='cursor-pointer'
              onClick={() => handlePageChange(current_page - 1)}
            />
          </PaginationItem>
        }
        {pages}
        {
          next && <PaginationItem>
            <PaginationNext
              className='cursor-pointer'
              onClick={() => handlePageChange(current_page + 1)}
            />
          </PaginationItem>
        }

      </PaginationContent>
    </Pagination>
  );
};

export default PaginationMenu;
