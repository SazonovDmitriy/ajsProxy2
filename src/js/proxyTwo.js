export default function specialAttack(character) {
  let characterSpecial = [];
  for (let item of character.special) {
    const {id, name, icon, description = 'Описание недоступно'} = item;
    characterSpecial.push({
      id, name, icon, description
    });
  }
  return characterSpecial;
};