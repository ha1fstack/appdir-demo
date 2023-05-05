import React from "react";

export default function Loading() {
  return (
    <>
      {Array.from({ length: 20 }).map((_, index) => (
        <React.Fragment key={index}>
          <div>
            <div className="w-full aspect-[4/3] mb-1 bg-slate-100 rounded-md" />
            <p className="truncate">&nbsp;</p>
            <p className="truncate">&nbsp;</p>
          </div>
        </React.Fragment>
      ))}
    </>
  );
}
