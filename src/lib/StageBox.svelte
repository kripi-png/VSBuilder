<script>
  import { writable } from 'svelte/store';
  import Modal, { bind } from 'svelte-simple-modal';

  import StageItemGrid from './StageItemGrid.svelte';

  import STAGE_DATA from '/src/assets/stages.json';

  import { selectedStage } from '/src/store/store.js';

  if (typeof $selectedStage === 'string') {
    selectedStage.set(STAGE_DATA[$selectedStage]);
  }
</script>

<div class="bg-amber-200 border-0 border-amber-400 mx-5 mt-5 w-2/5 h-[246px]">
  <h1 class="text-2xl">
    {$selectedStage.name}
  </h1>
  <div class="flex flex-row h-full">
    <img
      class="h-fit"
      src={$selectedStage.image}
      alt={$selectedStage.name}
      width="400"
      height="246"
    />

    <StageItemGrid stageItems={Object.values($selectedStage?.stageItems)} />
  </div>
</div>
