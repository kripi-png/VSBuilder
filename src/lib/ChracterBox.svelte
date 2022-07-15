<script>
  import { selectedCharacter, selectedWeapons } from '/src/store/store.js';

  import CHARACTER_DATA from '/src/assets/characters.json';
  import WEAPON_DATA from '/src/assets/weapons.json';

  if (typeof $selectedCharacter === 'string') {
    selectedCharacter.set(CHARACTER_DATA[$selectedCharacter]);
  }

  if (selectedWeapons[0] !== $selectedCharacter.startingWeapon.id) {
    const newSelectedWeapons = [...$selectedWeapons];
    newSelectedWeapons[0] = $selectedCharacter.startingWeapon.id;
    selectedWeapons.set(newSelectedWeapons);
  }

  const characterName = $selectedCharacter.name;
  const characterImage = $selectedCharacter.image;
  const characterStartingName = $selectedCharacter.startingWeapon.name;
  const characterStartingImage = $selectedCharacter.startingWeapon.image;
</script>

<div
  class="flex flex-col grow-0 mt-5 ml-5 bg-amber-200 border-4 border-amber-400 w-fit p-5"
>
  <h1 class="text-3xl">
    {characterName}
  </h1>
  <div class="relative flex flex-row">
    <img
      class="flex-1"
      src={characterImage}
      alt={characterName}
      width="200"
      height="200"
    />
    <img
      class="absolute -right-3 -bottom-3 p-2 bg-amber-100/75 rounded"
      src={characterStartingImage}
      alt={characterStartingName}
      width="100"
      height="100"
    />
  </div>
</div>
