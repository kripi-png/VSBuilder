<script>
  export let stageItems = [];
</script>

<div class="flex flex-col flex-wrap justify-between content-between p-5 flex-1">
  {#each stageItems as stageItem}
    <img
      class="drop-shadow-md bg-amber-100/75 rounded w-24 h-24"
      src={stageItem.image}
      alt={stageItem.name}
      width="96"
      height="96"
    />
  {/each}
</div>
