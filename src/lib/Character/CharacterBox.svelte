<script>
  import { writable } from 'svelte/store';
  import Modal, { bind } from 'svelte-simple-modal';

  import CharacterSelector from './CharacterSelector.svelte';

  import {
    WEAPON_DATA,
    CHARACTER_DATA,
    selectedWeapons,
    selectedCharacter,
  } from '/src/store/store.js';

  const modal = writable(null);
  const showModal = () => modal.set(bind(CharacterSelector));

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
