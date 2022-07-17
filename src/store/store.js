/*
TODO:
* Stage Box
* Stage Selection
* import and export all data in store
*   - default character and stage to an object instead of a string
* prevent changing the starting weapon (1st slot)
*  - only allow evolving the weapon
* divide weapons list to base, evolutions, and unions
* toggle button for showing/hiding secret characters

* special handling for Pugnala Provola's two starting weapons

* when hovering a character, play the walking animation?
*/

import { writable } from 'svelte/store';

const storedWeapons = localStorage.selectedWeapons;
const storedItems = localStorage.selectedItems;
const storedCharacter = localStorage.selectedCharacter;

const defaultValue = Array(6).fill(null);
export const selectedWeapons = writable(
  storedWeapons ? JSON.parse(storedWeapons) : defaultValue
);
export const selectedItems = writable(
  storedItems ? JSON.parse(storedItems) : defaultValue
);
export const selectedCharacter = writable(
  storedCharacter ? JSON.parse(storedCharacter) : 'antonio_belpaese'
);

selectedWeapons.subscribe(
  (value) => (localStorage.selectedWeapons = JSON.stringify(value))
);
selectedItems.subscribe(
  (value) => (localStorage.selectedItems = JSON.stringify(value))
);
selectedCharacter.subscribe(
  (value) => (localStorage.selectedCharacter = JSON.stringify(value))
);
