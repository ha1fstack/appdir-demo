function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function delay<T>(ms: number, fn: () => T) {
  await sleep(ms);
  return fn();
}
