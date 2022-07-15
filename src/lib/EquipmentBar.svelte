<script>
import WEAPON_DATA from "/src/assets/weapons.json";
console.log(WEAPON_DATA);


const WEAPONS = Array(6).fill(null);
const ITEMS = Array(6).fill(null);
</script>

<div>
  <div id="weaponBar" class="flex flex-row gap-1 mt-5 ml-5">
    {#each WEAPONS as weapon}
      <div class="item bg-amber-200 w-24 h-24 border-4 border-solid border-amber-400"></div>
    {/each}
  </div>

  <div id="itemBar" class="flex flex-row gap-1 ml-5 mt-1">
    {#each ITEMS as item}
      <div class="item bg-amber-200 w-24 h-24 border-4 border-solid border-amber-400"></div>
    {/each}
  </div>
</div>
