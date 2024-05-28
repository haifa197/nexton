
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  HStack,
  IconButton,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

interface IPagination {
  totalCount: number;
  totalCountDescription: string;
  pageSize: number;
  onGoToPage: (pageNumber: number) => void;
  currentPage: number;
}

const getPageNumbers = (
  currentPage: number,
  totalCount: number,
  pageSize: number,
  currentPages: number[]
) => {
  if (currentPages.indexOf(currentPage) !== -1) {
    return currentPages;
  }

  const maxNumber = Math.ceil(totalCount / pageSize);
  const firstPagePosition = Math.min(currentPage, maxNumber - 4);

  const result: number[] = [];
  for (
    let i = firstPagePosition - 1;
    i < firstPagePosition + 4 && i < maxNumber;
    i++
  ) {
    if (i < 0) {
      continue;
    }

    result.push(i + 1);
  }

  return result;
};

export const Pagination = (props: IPagination) => {
  const [pages, setPages] = useState(
    getPageNumbers(props.currentPage, props.totalCount, props.pageSize, [])
  );

  useEffect(() => {
    setPages(
      getPageNumbers(props.currentPage, props.totalCount, props.pageSize, [])
    );
  }, [props.pageSize, props.totalCount]);

  useEffect(() => {
    setPages(
      getPageNumbers(props.currentPage, props.totalCount, props.pageSize, pages)
    );
  }, [props.currentPage]);

  if (props.currentPage < 1) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>The current page index is invalid</AlertTitle>
        <AlertDescription>
          The current page index cannot be lower than 1. It currently is
          {props.currentPage}
        </AlertDescription>
      </Alert>
    );
  }

  if (
    props.currentPage > props.totalCount / props.pageSize &&
    props.totalCount > props.pageSize
  ) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>The current page index is invalid</AlertTitle>
        <AlertDescription>
          The current page index cannot be greated than maximum number of pages
          {Math.floor(props.totalCount / props.pageSize)}. It currently is 
          {props.currentPage}
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Stack >
      {pages.length > 1 && (
        <HStack>
          <IconButton
            disabled={props.currentPage - 1 <= 0}
            aria-label="previous"
            onClick={() => props.onGoToPage(props.currentPage - 1)}
            variant='outline'
            fontSize={'12px'}
          > <Image src="./Images/prev-btn.svg" alt="prev" />
          </IconButton>
          {pages.map((pageNumber) => (
            <Button
              key={pageNumber}
              onClick={() => props.onGoToPage(pageNumber)}
              colorScheme={
                pageNumber === props.currentPage ? "none" : undefined
              }
              variant='outline'
              fontSize={'12px'}
            >
              {pageNumber}
            </Button>
          ))}
          <IconButton
            aria-label="next"
            disabled={
              Math.max(...pages) + 1 > props.totalCount / props.pageSize
            }
            onClick={() => props.onGoToPage(props.currentPage + 1)}
            variant='outline'
            fontSize={'12px'}
          ><Image src="./Images/next-btn.svg" alt="next"/></IconButton>
        </HStack>
      )}
      <Text>
        {props.totalCount} {props.totalCountDescription}
      </Text>
    </Stack>
  );
};