import delay from "@/lib/utils/delay";
import { faker } from "@faker-js/faker";
import Link from "next/link";
import React, { cache } from "react";

const getList = cache(async () => {
  return delay(500, () =>
    faker.helpers.multiple(
      () => ({
        key: faker.string.uuid(),
        title: faker.lorem.sentence(),
        author: faker.person.fullName(),
        imageSrc: faker.image.urlPicsumPhotos(),
      }),
      {
        count: 20,
      }
    )
  );
});

export default async function Page() {
  const data = await getList();

  return (
    <>
      {data.map((item) => (
        <React.Fragment key={item.key}>
          <Link href={`/products/${item.key}`}>
            <img
              className="w-full aspect-[4/3] mb-2 bg-slate-100 rounded-md"
              src={item.imageSrc}
            />
            <p className="truncate font-semibold">{item.title}</p>
            <p className="truncate">{item.author}</p>
          </Link>
        </React.Fragment>
      ))}
    </>
  );
}
