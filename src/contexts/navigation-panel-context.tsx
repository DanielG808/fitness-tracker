"use client";

import { createContext, useState } from "react";

type NavigationPanelContextType = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export const NavigationPanelContext = createContext<
  NavigationPanelContextType | undefined
>(undefined);

export default function NavigationPanelContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <NavigationPanelContext.Provider value={{ open, setOpen }}>
      {children}
    </NavigationPanelContext.Provider>
  );
}
