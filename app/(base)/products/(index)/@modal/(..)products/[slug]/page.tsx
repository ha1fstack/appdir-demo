import delay from "@/lib/utils/delay";
import { faker } from "@faker-js/faker";
import { cache } from "react";

const getItem = cache(async () => {
  return delay(500, () => ({
    key: faker.string.uuid(),
    title: faker.lorem.sentence(),
    content: faker.helpers.multiple(
      () =>
        faker.lorem.paragraph({
          min: 10,
          max: 20,
        }),
      {
        count: { min: 5, max: 10 },
      }
    ),
    author: faker.person.fullName(),
    imageSrc: faker.image.urlPicsumPhotos(),
  }));
});

export default async function Page() {
  const item = await getItem();

  return (
    <div className="shadow-lg rounded-md w-full max-w-6xl overflow-hidden relative bg-white overflow-y-auto max-h-[90vh]">
      <div className="-m-4 aspect-[8/3] overflow-hidden absolute inset-x-0">
        <img
          className="w-full blur-md brightness-50 object-cover"
          src={item.imageSrc}
        />
      </div>
      <div className="relative flex justify-center my-32">
        <article className="w-full max-w-4xl prose">
          <img
            className="w-full aspect-[4/3] object-cover rounded-md"
            src={item.imageSrc}
          />
          <h1 className="mb-4">{item.title}</h1>
          <p className="text-lg my-0 font-medium">by {item.author}</p>
          <hr className="my-[2em]" />
          {item.content.map((content) => (
            <p key={content}>{content}</p>
          ))}
        </article>
      </div>
    </div>
  );
}
