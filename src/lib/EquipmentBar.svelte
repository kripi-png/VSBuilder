<script>
  import { writable } from 'svelte/store';
  import Modal, { bind } from 'svelte-simple-modal';

  import EquipmentSelector from './EquipmentSelector.svelte';
  import WEAPON_DATA from '/src/assets/weapons.json';

  import { selectedWeapons, selectedItems } from '/src/store/store.js';

  const modal = writable(null);
  const showModal = (index, selectedEquipment) =>
    modal.set(
      bind(EquipmentSelector, {
        itemData: WEAPON_DATA,
        index,
        selectedEquipment,
      })
    );
</script>

<div>
  <div id="weaponBar" class="flex flex-row gap-1 mt-5 ml-5">
    {#each $selectedWeapons as weapon, index}
      <div
        class="item bg-amber-200 w-24 h-24 border-4 border-solid border-amber-400"
        on:click={() => showModal(index, selectedWeapons)}
      >
        <img src={WEAPON_DATA[weapon]?.image} alt={WEAPON_DATA[weapon]?.name} />
      </div>
    {/each}
  </div>

  <div id="itemBar" class="flex flex-row gap-1 ml-5 mt-1">
    {#each $selectedItems as item}
      <div
        class="item bg-amber-200 w-24 h-24 border-4 border-solid border-amber-400"
      />
    {/each}
  </div>

  <Modal show={$modal} />
</div>
