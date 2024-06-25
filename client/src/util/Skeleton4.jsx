import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Skeleton4 = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="w-full flex justify-center items-center gap-2">
        <div className="w-[15%] h-[17rem]">
          <Skeleton className="h-[17rem] rounded-lg" />
        </div>
        <div className="w-[15%] h-[17rem]">
          <Skeleton className="h-[17rem] rounded-lg" />
        </div>
        <div className="w-[15%] h-[17rem]">
          <Skeleton className="h-[17rem] rounded-lg" />
        </div>
        <div className="w-[15%] h-[17rem]">
          <Skeleton className="h-[17rem] rounded-lg" />
        </div>
        <div className="w-[12%] h-[17rem]">
          <Skeleton className="h-[17rem] rounded-lg" />
        </div>
        <div className="w-[12%] h-[17rem]">
          <Skeleton className="h-[17rem] rounded-lg" />
        </div>
        <div className="w-[12%] h-[17rem]">
          <Skeleton className="h-[17rem] rounded-lg" />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default Skeleton4;
