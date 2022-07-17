<script>
  export let index = 0;
  export let subTitle = '';
  export let dataList = [];
  export let selectionCallback = console.log;
  export let selectedEquipment = [];

  $: getSlotClass = (id) => {
    if ($selectedEquipment[index] === id) {
      return 'bg-green-400 border-green-600';
    }
    if ($selectedEquipment.includes(id)) {
      return 'bg-red-400 border-red-600';
    }
    return 'bg-amber-200 border-amber-400';
  };
</script>

{#if subTitle}
  <h1 class="text-2xl font-bold mt-5">{subTitle}</h1>
{/if}
<div class="flex flex-row flex-wrap gap-2 ">
  {#each dataList as { id, name, image }}
    <div class="border-4 border-solid {getSlotClass(id)}">
      <img
        on:click={() => selectionCallback(index, id)}
        src={image}
        alt={name}
        width="100"
        height="100"
      />
    </div>
  {/each}
</div>
