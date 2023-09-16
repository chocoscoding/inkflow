"use client";
import React, { ComponentType, FC, ReactNode, useEffect, useState } from "react";
import Spinner from "../Spinner";
import { PagePaginativeReturnType } from "../../types/client";

interface PagePaginationClientType {
  initialElements: PagePaginativeReturnType<any[]>;
  loadingComponent: ReactNode;
  fetchData: (page: number) => Promise<PagePaginativeReturnType<any[]>>;
  ListComponent: ComponentType<any>;
  keyname: string;
}
const PagePagination: FC<PagePaginationClientType> = ({ initialElements, loadingComponent, fetchData, ListComponent, keyname }) => {
  const [mainList, setMainLists] = useState<any[]>(initialElements.data);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(initialElements.page);

  const loadMore = async () => {
    setIsLoading(true);
    const newData = await fetchData(page + 1);
    setMainLists((prev) => [...prev, ...newData.data]);
    setHasMore(!!(newData.data.length > 0));
    if (newData.data.length > 0) {
      setPage((prev) => prev + 1);
    }
    setIsLoading(false);
  };

  const removeOneNode = (id: string) => {
    const newList = mainList.map((listElement) => listElement.id !== id);
    setMainLists(newList);
  };
  return (
    <div>
      {mainList.map((listElement, i) => (
        <ListComponent
          key={keyname + i}
          {...listElement}
          removeMe={removeOneNode}
        />
      ))}
      <div className="flex flex-col items-center">
        {hasMore && !isLoading ? (
          <button
            className="w-[130px] p-2 bg-blue-70 self-center rounded-md"
            onClick={loadMore}>
            Show more
          </button>
        ) : null}
        {isLoading ? loadingComponent || <Spinner /> : null}
      </div>
    </div>
  );
};

export default PagePagination;
