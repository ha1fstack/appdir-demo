import Link from "next/link";

export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex justify-center min-h-screen">
        <div className="flex flex-col w-full">
          <nav className="sticky top-0 z-30 w-full py-4 bg-white">
            <div className="container px-4 flex gap-x-8 mx-auto">
              <Link href="/" className="font-bold">
                Appdir Demo
              </Link>
              <div className="space-x-4 flex-1">
                <Link href="/products">Products</Link>
                <Link href="/">Etc</Link>
              </div>
              <div className="space-x-4">
                <Link href="/login">Login</Link>
              </div>
            </div>
          </nav>
          <main className="w-full">{children}</main>
        </div>
        {modal}
      </div>
      <footer className="bg-slate-100 px-8 py-4 grid place-items-center">
        <div className="container px-4">Footer</div>
      </footer>
    </div>
  );
}
