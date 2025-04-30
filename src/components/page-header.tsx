import { cn } from "@/lib/utils/cn"
import Button from "./ui/button"
import H2 from "./ui/h2"

type PageHeaderProps = {
    title: string;
    displayButton?: boolean;
    className?: string;
}

export default function PageHeader({ title, displayButton = false, className }: PageHeaderProps) {
  return (
    <div className={cn("flex justify-between w-full", className)}>
        <H2>{title}</H2>
        {
          displayButton ? <Button>+ New Workout</Button> : null
        }    
    </div>
  )
}
