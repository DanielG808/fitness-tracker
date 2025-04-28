import { cn } from "@/lib/utils/cn"
import Button from "./ui/button"
import H2 from "./ui/h2"

type PageHeaderProps = {
    title: string
    action?: React.ReactNode
    className?: string
}

export default function PageHeader({ title, action, className }: PageHeaderProps) {
  return (
    <div className={cn("flex justify-between", className)}>
        <H2>{title}</H2>
        {action}    
    </div>
  )
}
