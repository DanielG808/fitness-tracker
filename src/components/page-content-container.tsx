type PageContentContainerProps = {
  children: React.ReactNode;
};

export default function PageContentContainer({
  children,
}: PageContentContainerProps) {
  return (
    <main className="flex-1 flex flex-col h-full overflow-hidden bg-background">
      {children}
    </main>
  );
}
