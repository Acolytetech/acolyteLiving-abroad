"use client";

import React from "react";

export default function ContactModal({ isOpen, onClose, onSubmit, searchData }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-[#2a2a2a]">
        <h3 className="mb-4 text-lg font-semibold">Contact us</h3>
        <p className="mb-4 text-sm">We'll reach out with the best options.</p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => {
              onSubmit?.();
            }}
            className="rounded bg-[#161D83] px-4 py-2 text-white"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => onClose?.()}
            className="rounded border px-4 py-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
