<script>
  export let index = 0;
  export let itemData = {};
  export let isWeapon = true;
  // either selected weapons or items
  export let selectedEquipment = [];

  const selectEquipment = (slotIndex, itemId) => {
    // cancel if equipment is already selected in another slot
    if ($selectedEquipment.includes(itemId)) return;
    // save selection
    const newSelectedEquipment = [...$selectedEquipment];
    newSelectedEquipment[slotIndex] = itemId;
    selectedEquipment.set(newSelectedEquipment);
  };

  $: getEquipmentBoxClass = (id) => {
    if ($selectedEquipment[index] === id) {
      return 'bg-green-400 border-green-600';
    }
    if ($selectedEquipment.includes(id)) {
      return 'bg-red-400 border-red-600';
    }
    return 'bg-amber-200 border-amber-400';
  };
</script>

<div class="modalWrapper">
  <h1 class="text-3xl font-bold mb-5">
    {isWeapon ? 'Weapon' : 'Item'} Slot #{index + 1}
  </h1>
  <div class="flex flex-row flex-wrap gap-2 ">
    {#each Object.entries(itemData) as [id, { name, image }]}
      <div class="border-4 border-solid {getEquipmentBoxClass(id)}">
        <img
          on:click={() => selectEquipment(index, id)}
          src={image}
          alt={name}
          width="100"
          height="100"
        />
      </div>
    {/each}
  </div>
</div>
