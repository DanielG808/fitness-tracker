"use client"

import { useEffect, useState } from "react";
import XButton from "../x-button";
import { createPortal } from "react-dom";

type ModalProps = {
    open: boolean;
    closeModal: () => void;
}

export default function Modal({ open, closeModal }: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const [containerRect, setContainerRect] = useState<DOMRect | null>(null)

  useEffect(() => {
    setMounted(true);
    const container = document.getElementById("page-content-container");
    if (container) {
      setContainerRect(container.getBoundingClientRect());
    }
  }, [])

  if (!mounted || !open || !containerRect) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/50">
        <div className="flex items-center justify-center absolute inset-0" style={{
          top: containerRect.top,
          left: containerRect.left,
          width: containerRect.width,
          height: containerRect.height,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }} >
            <section className="bg-white w-full max-w-2xl p-6 rounded-2xl relative">
                <XButton onClick={closeModal} />
                Modal
            </section>
        </div>
    </div>,
    document.body
  )
}
