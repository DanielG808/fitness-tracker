"use client"

import { useNavigationPanelContext } from "@/lib/hooks/useNavigationPanelContext"

type PageContentContainerProps ={
    children: React.ReactNode
}

export default function PageContentContainer({ children }: PageContentContainerProps) {
    const { open } = useNavigationPanelContext()

  return (
    <main className={`h-full transition-transform duration-300 transform ${
        open ? "translate-x-0" : "-translate-x-80"
    } ml-[20%] w-[80%]`}>
        {children}
    </main>
  )
}
