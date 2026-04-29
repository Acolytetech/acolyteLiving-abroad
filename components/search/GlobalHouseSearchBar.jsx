"use client";

import React, { forwardRef, useImperativeHandle, useRef } from "react";

const GlobalHouseSearchBar = forwardRef(function GlobalHouseSearchBar(props, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focusAndOpen: () => inputRef.current?.focus(),
  }));

  return (
    <div className="w-full">
      <input
        ref={inputRef}
        className="w-full rounded-md border px-3 py-2"
        placeholder={props.placeholder || "Search..."}
        autoFocus={props.autoFocus}
        onKeyDown={(e) => {
          if (e.key === "Enter") props.onSelectResult?.();
        }}
      />
    </div>
  );
});

export default GlobalHouseSearchBar;
