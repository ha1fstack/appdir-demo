export const revalidate = 60;

export default function Layout({
  main,
  recommended,
  modal,
}: {
  main: React.ReactNode;
  recommended: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <div className="grid grid-cols-[16rem_1fr] w-full gap-x-12 container px-4 mt-4 mb-16 mx-auto">
        <div className="flex flex-col gap-y-4">{recommended}</div>
        <div>{main}</div>
      </div>
      {modal}
    </>
  );
}
