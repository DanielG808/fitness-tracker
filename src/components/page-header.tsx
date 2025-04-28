type PageHeaderProps = {
    title: string
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <div><h1>{title}</h1></div>
  )
}
