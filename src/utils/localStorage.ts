export function localStorageSet(item: string, data: string | number | object) {
  if (typeof window === "undefined") return;
  return window.localStorage.setItem(item, JSON.stringify(data));
}

export function localStorageGet(item: string) {
  if (typeof window === "undefined") return;
  const stringified = window.localStorage.getItem(item);
  return stringified && JSON.parse(stringified);
}
