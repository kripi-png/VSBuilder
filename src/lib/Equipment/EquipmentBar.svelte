<script>
  import { writable } from 'svelte/store';
  import Modal, { bind } from 'svelte-simple-modal';

  import EquipmentSelector from './EquipmentSelector.svelte';

  import {
    ITEM_DATA,
    WEAPON_DATA,
    selectedItems,
    selectedWeapons,
  } from '/src/store/store.js';

  const modal = writable(null);
  const showModal = (index, itemData, isWeapon = true, selectedEquipment) =>
    modal.set(
      bind(EquipmentSelector, {
        index,
        itemData,
        isWeapon,
        selectedEquipment,
      })
    );
</script>

<div>
  <div id="weaponBar" class="flex flex-row gap-1 mt-5 ml-5">
    {#each $selectedWeapons as weapon, index}
      <div
        class="item bg-amber-200 w-24 h-24 border-4 border-solid border-amber-400"
        class:bg-gray-200={index === 0}
        class:border-gray-400={index === 0}
        on:click={() =>
          index !== 0 && showModal(index, $WEAPON_DATA, true, selectedWeapons)}
      >
        <img
          src={$WEAPON_DATA[weapon]?.image}
          alt={$WEAPON_DATA[weapon]?.name}
        />
      </div>
    {/each}
  </div>

  <div id="itemBar" class="flex flex-row gap-1 ml-5 mt-1">
    {#each $selectedItems as item, index}
      <div
        class="item bg-amber-200 w-24 h-24 border-4 border-solid border-amber-400"
        on:click={() => showModal(index, $ITEM_DATA, false, selectedItems)}
      >
        <img src={$ITEM_DATA[item]?.image} alt={$ITEM_DATA[item]?.name} />
      </div>
    {/each}
  </div>

  <Modal show={$modal} />
</div>
