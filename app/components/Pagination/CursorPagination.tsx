"use client";
import React, { ComponentType, FC, ReactNode, useEffect, useState } from "react";
import Spinner from "../Spinner";
import { CursorPaginativeReturnType } from "../../types/client";

interface CursorPaginationClientType {
  initialElements: CursorPaginativeReturnType<any[]>;
  loadingComponent?: ReactNode;
  fetchData: (cursor: string | null) => Promise<CursorPaginativeReturnType<any[]>>;
  ListComponent: ComponentType<any>;
  keyname: string;
}
const CursorPagination: FC<CursorPaginationClientType> = ({ initialElements, loadingComponent, fetchData, ListComponent, keyname }) => {
  const [mainList, setMainLists] = useState<any[]>(initialElements.data);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(!!initialElements.metaData?.hasMore);
  const [newCursor, setNewCursor] = useState<string | null>(initialElements.metaData?.newCursor || null);

  const loadMore = async () => {
    setIsLoading(true);
    const newData = await fetchData(newCursor);
    setMainLists((prev) => [...prev, ...newData.data]);
    setHasMore(!!newData.metaData?.hasMore);
    setNewCursor(newData.metaData?.newCursor || null);
    setIsLoading(false);
  };

  const removeOneNode = (id: string) => {
    const newList = mainList.filter((listElement) => listElement.id !== id);
    setMainLists(newList);
  };

  if (mainList.length === 0)
    return (
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-lg font-semibold">No content found</p>
        <p className="text-sm text-gray-500">Try exploring more on Inkflow</p>
      </div>
    );
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

export default CursorPagination;
