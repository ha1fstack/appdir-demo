export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="p-4 rounded-md bg-slate-100">
        <p className="font-bold mb-2">Recommended</p>
        <div>{children}</div>
      </div>
    </>
  );
}
