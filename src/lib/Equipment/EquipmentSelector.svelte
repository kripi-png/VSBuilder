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

  const items = Object.values(itemData);
  const baseItems = [];
  const evolutionItems = [];
  const unionItems = [];
  items.forEach((item) => {
    switch (item.category) {
      case 'base':
        baseItems.push(item);
        break;
      case 'evolution':
        evolutionItems.push(item);
        break;
      case 'union':
        unionItems.push(item);
        break;
    }
  });
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
          dataList={baseItems}
          selectionCallback={selectEquipment}
          {index}
          {selectedEquipment}
        />,
      </TabPanel>
      <TabPanel>
        <EquipmentSelectorList
          subTitle="Evolution"
          dataList={evolutionItems}
          selectionCallback={selectEquipment}
          {index}
          {selectedEquipment}
        />,
      </TabPanel>
      <TabPanel>
        <EquipmentSelectorList
          subTitle="Union"
          dataList={unionItems}
          selectionCallback={selectEquipment}
          {index}
          {selectedEquipment}
        />
      </TabPanel>
    </Tabs>
  {/if}
</div>
