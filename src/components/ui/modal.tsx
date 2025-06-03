"use client";

import XButton from "../x-button";
import { createPortal } from "react-dom";
import { usePageContentRect } from "@/lib/hooks/usePageContentRect";
import H2 from "./h2";
import { useEffect } from "react";

type ModalProps = {
  open: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  heading: string;
};

export default function Modal({
  open,
  closeModal,
  heading,
  children,
}: ModalProps) {
  const { mounted, containerRect } = usePageContentRect();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!mounted || !open || !containerRect) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/50 text-black">
      <div
        className="flex items-center justify-center absolute inset-0"
        style={{
          top: containerRect.top,
          left: containerRect.left,
          width: containerRect.width,
          height: containerRect.height,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <section className="bg-white w-full max-w-2xl max-h-[90vh] h-screen sm:h-auto  p-6 rounded-2xl relative space-y-2 overflow-y-auto">
          <div className="flex w-full justify-between items-start">
            <H2 className="text-black text-xl mb-4">{heading}</H2>
            <XButton onClick={closeModal} />
          </div>
          {children}
        </section>
      </div>
    </div>,
    document.body
  );
}
