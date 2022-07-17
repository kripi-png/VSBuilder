<script>
  import { writable } from 'svelte/store';
  import Modal, { bind } from 'svelte-simple-modal';

  import CharacterSelector from './CharacterSelector.svelte';
  import WEAPON_DATA from '/src/assets/weapons.json';
  import CHARACTER_DATA from '/src/assets/characters.json';

  import { selectedCharacter, selectedWeapons } from '/src/store/store.js';

  const modal = writable(null);
  const showModal = () =>
    modal.set(
      bind(CharacterSelector, {
        selectedCharacter,
      })
    );

  // if "saved character" is just a string
  // (set as default if localStorage value did not exist)
  // replace with valid character object
  if (typeof $selectedCharacter === 'string') {
    const characterId = $selectedCharacter;
    selectedCharacter.set({
      ...CHARACTER_DATA[characterId],
      id: characterId,
    });
  }

  // set starter weapon
  if (selectedWeapons[0] !== $selectedCharacter.startingWeapon.id) {
    const newSelectedWeapons = [...$selectedWeapons];
    newSelectedWeapons[0] = $selectedCharacter.startingWeapon.id;
    selectedWeapons.set(newSelectedWeapons);
  }
</script>

<div>
  <div
    class="
    bg-amber-200 border-4 border-amber-400 flex flex-col grow-0 p-5 ml-5 mt-5 w-1/6 h-1/6"
  >
    <h1 class="text-2xl">
      {$selectedCharacter.name}
    </h1>
    <div class="relative flex flex-row" on:click={showModal}>
      <img
        class="flex-1"
        src={$selectedCharacter.image}
        alt={$selectedCharacter.name}
        width="200"
      />

      <img
        class="absolute -right-3 -bottom-3 p-2 drop-shadow-md bg-amber-100/75 rounded"
        src={$selectedCharacter.startingWeapon.image}
        alt={$selectedCharacter.startingWeapon.name}
        width="100"
        height="100"
      />
    </div>
  </div>

  <Modal show={$modal} />
</div>
