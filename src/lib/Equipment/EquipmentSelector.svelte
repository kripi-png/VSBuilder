<script>
  import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
  import EquipmentSelectorList from './EquipmentSelectorList.svelte';

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

  const items = Object.values(itemData),
    grouped = [];
  isWeapon &&
    items.forEach(function (weapon) {
      this[weapon.category] || grouped.push((this[weapon.category] = []));
      this[weapon.category].push(weapon);
    }, Object.create(null));
</script>

<div class="modalWrapper">
  <h1 class="text-3xl font-bold mb-5">
    {isWeapon ? 'Weapon' : 'Item'} Slot #{index + 1}
  </h1>
  {#if !isWeapon}
    <EquipmentSelectorList
      dataList={items}
      selectionCallback={selectEquipment}
      {index}
      {selectedEquipment}
    />
  {:else}
    <Tabs>
      <TabList>
        <Tab>Base</Tab>
        <Tab>Evolution</Tab>
        <Tab>Union</Tab>
      </TabList>

      <TabPanel>
        <EquipmentSelectorList
          subTitle="Base"
          dataList={grouped[0]}
          selectionCallback={selectEquipment}
          {index}
          {selectedEquipment}
        />,
      </TabPanel>
      <TabPanel>
        <EquipmentSelectorList
          subTitle="Evolution"
          dataList={grouped[1]}
          selectionCallback={selectEquipment}
          {index}
          {selectedEquipment}
        />,
      </TabPanel>
      <TabPanel>
        <EquipmentSelectorList
          subTitle="Union"
          dataList={grouped[2]}
          selectionCallback={selectEquipment}
          {index}
          {selectedEquipment}
        />
      </TabPanel>
    </Tabs>
  {/if}
</div>
