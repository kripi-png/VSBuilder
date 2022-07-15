import { writable } from 'svelte/store';

const storedWeapons = localStorage.selectedWeapons;
const storedItems = localStorage.selectedItems;

const defaultValue = Array(6).fill(null);
export const selectedWeapons = writable(
  storedWeapons ? JSON.parse(storedWeapons) : defaultValue
);
export const selectedItems = writable(
  storedItems ? JSON.parse(storedItems) : defaultValue
);

selectedWeapons.subscribe(
  (value) => (localStorage.selectedWeapons = JSON.stringify(value))
);
selectedItems.subscribe(
  (value) => (localStorage.selectedItems = JSON.stringify(value))
);
