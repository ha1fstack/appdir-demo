import delay from "@/lib/utils/delay";
import { faker } from "@faker-js/faker";
import Link from "next/link";
import React, { cache } from "react";

const getRecommended = cache(async () => {
  return delay(500, () =>
    faker.helpers.multiple(
      () => ({
        key: faker.string.uuid(),
        title: faker.lorem.sentence(),
      }),
      {
        count: { min: 5, max: 10 },
      }
    )
  );
});

export default async function Page() {
  const data = await getRecommended();

  return (
    <ul className="flex flex-col">
      {data.map((item) => (
        <React.Fragment key={item.key}>
          <li className="truncate">
            <Link href={`/products/${item.key}`}> - {item.title}</Link>
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
}
