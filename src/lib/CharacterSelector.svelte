<script>
  import {
    CHARACTER_DATA,
    selectedWeapons,
    selectedCharacter,
  } from '/src/store/store.js';

  const selectCharacter = (characterId) => {
    // cancel if character is already selected
    if ($selectedCharacter.id === characterId) return;
    // save character selection
    selectedCharacter.set($CHARACTER_DATA[characterId]);

    const weaponList = [...$selectedWeapons];
    const startingWeaponId = $selectedCharacter.startingWeapon.id;
    // set starter weapon
    weaponList[0] = startingWeaponId;
    // remove previous instances of the starting weapon
    const lastIndex = weaponList.lastIndexOf(startingWeaponId);
    if (lastIndex !== 0) weaponList[lastIndex] = null;
    // save edited weapon list
    selectedWeapons.set(weaponList);
  };
</script>

<div class="modalWrapper">
  <h1 class="text-3xl font-bold mb-5">Character Selection</h1>
  <div class="flex flex-row flex-wrap gap-2">
    {#each Object.entries($CHARACTER_DATA) as [id, { name, image }]}
      <div
        class="border-4 border-solid
        {$selectedCharacter.id === id
          ? 'bg-green-400 border-green-600'
          : 'bg-amber-200 border-amber-400'}"
      >
        <img
          on:click={() => selectCharacter(id)}
          src={image}
          alt={name}
          width="100"
          height="100"
        />
      </div>
    {/each}
  </div>
</div>
