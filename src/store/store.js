/*
TODO:
* prevent changing the starting weapon (1st slot)
*  - only allow evolving the weapon
* divide weapons list to base, evolutions, and unions
* toggle button for showing/hiding secret characters
* display character's starting weapon in the character list

* special handling for Pugnala Provola's two starting weapons

* search characters by name or staring weapon
* when hovering a character, play the walking animation?
* fix visual errors
*  - Peppino's too tall
*  - Items of some stages have weird spacing, or won't fit the box
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

const defaultValue = Array(6).fill(null);
export const selectedItems = writable(storedItems || defaultValue);
export const selectedStage = writable(storedStage || stageData['mad_forest']);
export const selectedWeapons = writable(storedWeapons || defaultValue);
export const selectedCharacter = writable(
  storedCharacter || characterData['antonio_belpaese']
);

const setSubscriber = (key, storeEntry) =>
  storeEntry.subscribe((value) =>
    localStorage.setItem(key, JSON.stringify(value))
  );

setSubscriber('selectedWeapons', selectedWeapons);
setSubscriber('selectedItems', selectedItems);
setSubscriber('selectedCharacter', selectedCharacter);
setSubscriber('selectedStage', selectedStage);

export const ITEM_DATA = readable(itemData);
export const STAGE_DATA = readable(stageData);
export const WEAPON_DATA = readable(weaponData);
export const CHARACTER_DATA = readable(characterData);
