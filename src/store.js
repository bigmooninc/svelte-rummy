import { writable } from 'svelte/store';

const createWritableStore = (key, startValue) => {
  const { subscribe, set } = writable(startValue);

  return {
    subscribe,
    set,
    useLocalStorage: () => {
      const json = localStorage.getItem(key);
      if (json) {
        set(JSON.parse(json));
      }

      subscribe((current) => {
        localStorage.setItem(key, JSON.stringify(current));
      });
    },
  };
};

export const p1Total = createWritableStore('p1Total', 0);
export const p2Total = createWritableStore('p2Total', 0);
export const p1Hand = createWritableStore('p1Hand', 1);
export const p2Hand = createWritableStore('p2Hand', 1);
