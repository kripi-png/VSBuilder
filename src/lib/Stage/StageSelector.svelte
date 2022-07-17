<script>
  import { STAGE_DATA, selectedStage } from '/src/store/store.js';

  const selectStage = (stageId) => {
    // cancel if character is already selected
    if ($selectedStage.id === stageId) return;
    // save selection
    selectedStage.set($STAGE_DATA[stageId]);
  };
</script>

<div class="modalWrapper">
  <h1 class="text-3xl font-bold mb-5">Stage Selection</h1>
  <div class="flex flex-row flex-wrap gap-2">
    {#each Object.entries($STAGE_DATA) as [id, { name, image }]}
      <div
        class="border-4 border-solid
        {$selectedStage.id === id
          ? 'bg-green-400 border-green-600'
          : 'bg-amber-200 border-amber-400'}"
      >
        <img
          on:click={() => selectStage(id)}
          src={image}
          alt={name}
          width="100"
          height="100"
        />
      </div>
    {/each}
  </div>
</div>
