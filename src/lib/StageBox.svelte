<script>
  import { writable } from 'svelte/store';
  import Modal, { bind } from 'svelte-simple-modal';

  import STAGE_DATA from '/src/assets/stages.json';

  import { selectedStage } from '/src/store/store.js';

  if (typeof $selectedStage === 'string') {
    selectedStage.set(STAGE_DATA[$selectedStage]);
  }
</script>

<div>
  <div
    class="
    bg-amber-200 border-4 border-amber-400 flex flex-col grow-0 p-5 ml-5 mt-5 w-1/6 h-1/6"
  >
    <h1 class="text-2xl">
      {$selectedStage.name}
    </h1>
    <div class="flex flex-row">
      <img
        class="flex-1"
        src={$selectedStage.image}
        alt={$selectedStage.name}
        width="200"
      />

      <div class="flex flex-col">
        <!-- {#each $selectedStage?.stageItems as stageItem}
          <img src={stageItem.image} alt={stageItem.name} />
        {/each} -->
      </div>
    </div>
  </div>
</div>
