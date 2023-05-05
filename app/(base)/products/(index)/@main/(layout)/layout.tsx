export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-8">
        {children}
      </div>
    </>
  );
}
