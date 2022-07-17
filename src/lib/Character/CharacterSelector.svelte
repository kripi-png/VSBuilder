<script>
  import {
    CHARACTER_DATA,
    selectedWeapons,
    selectedCharacter,
    userSettings,
    // updateUserSettings,
  } from '/src/store/store.js';

  $: showSecretCharacters = $userSettings.showSecretCharacters;
  $: characterList = Object.values($CHARACTER_DATA).filter((character) =>
    showSecretCharacters ? true : character.category !== 'secret'
  );

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

  const toggleSecretCharacter = () =>
    userSettings.set({
      ...$userSettings,
      showSecretCharacters: !showSecretCharacters,
    });
</script>

<div class="modalWrapper">
  <h1 class="text-3xl font-bold mb-5">Character Selection</h1>
  <button
    class="rounded-full bg-amber-400 ml-auto mr-10 mb-5 p-3"
    on:click={toggleSecretCharacter}
  >
    {showSecretCharacters ? 'Hide' : 'Show'} Secret Characters
  </button>
  <div class="flex flex-row flex-wrap gap-2">
    {#each characterList as { id, name, image }}
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
