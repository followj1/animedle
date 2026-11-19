import characters from './narutoCharacters';

const charactersWithImages = characters.map((character) => {
  const imageName = character.name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]/g, '');

  return {
    ...character,
    image: `/naruto/${imageName}.png`,
  };
});

export default charactersWithImages;