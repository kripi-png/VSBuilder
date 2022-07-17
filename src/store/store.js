/*
TODO:
* allow evolving the starting weapon
* display character's starting weapon in the character list

* special handling for Pugnala Provola's two starting weapons

* search characters by name or staring weapon
* when hovering a character, play the walking animation?
* fix visual errors
*  - images stage selection list are quite small
*  - Peppino's too tall
*  - Items of some stages have weird spacing, or won't fit the box
* drag & drop to move and swap weapons and items
*/

import { writable, readable } from 'svelte/store';
import itemData from '/src/assets/items.json';
import stageData from '/src/assets/stages.json';
import weaponData from '/src/assets/weapons.json';
import characterData from '/src/assets/characters.json';

const storedItems = JSON.parse(localStorage.selectedItems || null);
const storedStage = JSON.parse(localStorage.selectedStage || null);
const storedWeapons = JSON.parse(localStorage.selectedWeapons || null);
const storedCharacter = JSON.parse(localStorage.selectedCharacter || null);
const storedUserSettings = JSON.parse(localStorage.userSettings || null);

const DEFAULT = {
  char: characterData['antonio_belpaese'],
  stage: stageData['mad_forest'],
  equipment: Array(6).fill(null),
};
export const selectedItems = writable(storedItems || DEFAULT.equipment);
export const selectedWeapons = writable(storedWeapons || DEFAULT.equipment);
export const selectedStage = writable(storedStage || DEFAULT.stage);
export const selectedCharacter = writable(storedCharacter || DEFAULT.char);
export const userSettings = writable(
  storedUserSettings || {
    showSecretCharacters: false,
  }
);

const setSubscriber = (key, storeEntry) =>
  storeEntry.subscribe((value) =>
    localStorage.setItem(key, JSON.stringify(value))
  );

setSubscriber('selectedWeapons', selectedWeapons);
setSubscriber('selectedItems', selectedItems);
setSubscriber('selectedCharacter', selectedCharacter);
setSubscriber('selectedStage', selectedStage);
setSubscriber('userSettings', userSettings);

export const ITEM_DATA = readable(itemData);
export const STAGE_DATA = readable(stageData);
export const WEAPON_DATA = readable(weaponData);
export const CHARACTER_DATA = readable(characterData);
