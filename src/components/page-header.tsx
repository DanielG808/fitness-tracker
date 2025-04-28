import H2 from "./ui/h2"

type PageHeaderProps = {
    title: string
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <div>
        <H2>{title}</H2>

    </div>
  )
}
