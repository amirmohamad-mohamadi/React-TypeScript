import { useEffect, useState } from "react";

type UseLocaStorage<T> = {
  key: string;
  initialValue: T | (() => T);
};

export function useLocaStorage<T>({ key, initialValue }: UseLocaStorage<T>) {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue === null) {
      if (typeof initialValue === "function") {
        return (initialValue as () => T)();
      } else {
        return initialValue;
      }
    } else {
      return JSON.parse(jsonValue);
    }
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as [T, typeof setValue];
}
