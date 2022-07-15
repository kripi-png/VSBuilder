import { writable } from 'svelte/store';

export const selectedWeapons = writable(Array(6).fill(null));
export const selectedItems = writable(Array(6).fill(null));
