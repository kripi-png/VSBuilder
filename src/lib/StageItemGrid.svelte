<script>
  export let stageItems = [];
  console.log(stageItems);
</script>

<div
  class="flex flex-col flex-wrap justify-between align-between gap-5 p-3 flex-1"
>
  {#each stageItems as stageItem}
    <img
      class="bg-amber-100/75 rounded w-24 h-24"
      src={stageItem.image}
      alt={stageItem.name}
      width="96"
      height="96"
    />
  {/each}
</div>
