
import fs from 'fs';

const raw = JSON.parse(
  fs.readFileSync('./narutodle-classic-105.json', 'utf8')
);

const translations = {
  gender: {
    Male: 'Masculino',
    Female: 'Femenino',
    Other: 'Otro',
  },

  affiliations: {
    Konoha: 'Aldea de la Hoja',
    Akatsuki: 'Akatsuki',
    Kiri: 'Aldea de la Niebla',
    Oto: 'Aldea del Sonido',
    Iwa: 'Aldea de la Roca',
    Suna: 'Aldea de la Arena',
    Yu: 'Aldea de las Aguas Termales',
    Uzushio: 'Aldea del Remolino',
    Ame: 'Aldea de la Lluvia',
    None: 'Ninguna',
    Kumo: 'Aldea de las Nubes',
    Taki: 'Aldea de la Cascada',
    Kusa: 'Aldea de la Hierba',
    'Land of Iron': 'País del Hierro',
  },

  jutsusTypes: {
    Ninjutsu: 'Ninjutsu',
    Genjutsu: 'Genjutsu',
    Taijutsu: 'Taijutsu',
    None: 'Ninguno',
  },

  kekkeiGenkaiTypes: {
    None: 'Ninguno',
    'Dôjutsu': 'Dōjutsu',
    'Nature Transformation': 'Transformación de la naturaleza',
    'Body Enhancement': 'Mejora corporal',
  },

  natureTypes: {
    Fire: 'Fuego',
    Wind: 'Viento',
    Lightning: 'Rayo',
    Water: 'Agua',
    Earth: 'Tierra',
    None: 'Ninguna',
  },

  classifications: {
    Jinchūriki: 'Jinchūriki',
    Sage: 'Sabio',
    'Missing-nin': 'Ninja renegado',
    None: 'Ninguno',
    'Medical-nin': 'Ninja médico',
    'Mercenary Ninja': 'Ninja mercenario',
    'Tailed Beast': 'Bestia con cola',
    Summon: 'Invocación',
  },
};

const arcOrder = [
  'Prólogo',
  'Exámenes Chūnin',
  'Invasión de Konoha',
  'Búsqueda de Tsunade',
  'Misión de recuperación de Sasuke',
  'Kakashi Gaiden',
  'Rescate del Kazekage',
  'Puente Tenchi',
  'Supresión de Akatsuki',
  'Persecución de Itachi',
  'La historia de Jiraiya el Galante',
  'Batalla predestinada entre hermanos',
  'Asalto de Pain',
  'Cumbre de los Cinco Kage',
  'Cuarta Guerra Mundial Shinobi: Cuenta regresiva',
  'Guerra: Confrontación',
  'Guerra: Clímax',
  'Nacimiento del Jinchūriki del Diez Colas',
  'Kaguya Ōtsutsuki ataca',
  'El Séptimo Hokage y la Primavera Escarlata',
];

const chapterRanges = [
  [1, 33],
  [34, 115],
  [116, 138],
  [139, 171],
  [172, 238],
  [239, 244],
  [245, 281],
  [282, 310],
  [311, 342],
  [343, 367],
  [368, 383],
  [384, 412],
  [413, 453],
  [454, 483],
  [484, 515],
  [516, 559],
  [560, 639],
  [640, 677],
  [678, 699],
  [700.1, 709.1],
];

function translateList(values, dictionary) {
  if (!Array.isArray(values)) return [];

  return values.map(
    (value) => dictionary[value] ?? value
  );
}

function getArc(chapter) {
  const index = chapterRanges.findIndex(
    ([min, max]) => chapter >= min && chapter <= max
  );

  return index === -1 ? 'Prólogo' : arcOrder[index];
}

function getImageName(name) {
  return name
    .replaceAll(' ', '_')
    .replaceAll("'", '')
    .replaceAll('ō', 'o');
}

const characters = raw.map((character) => ({
  name: character.championName,

  gender:
    translations.gender[character.gender] ??
    character.gender,

  affiliations: translateList(
    character.affiliations,
    translations.affiliations
  ),

  jutsuTypes: translateList(
    character.jutsusTypes,
    translations.jutsusTypes
  ),

  kekkeiGenkai: translateList(
    character.kekkeiGenkaiTypes,
    translations.kekkeiGenkaiTypes
  ),

  natureTypes: translateList(
    character.natureTypes,
    translations.natureTypes
  ),

  attributes: translateList(
    character.classifications,
    translations.classifications
  ),

  arc: getArc(Number(character.debut)),

  image: `/naruto/${getImageName(character.championName)}.png`,
}));

const output =
  'const characters = ' +
  JSON.stringify(characters, null, 2) +
  ';\n\nexport default characters;\n';

fs.writeFileSync('./src/narutoCharacters.js', output, 'utf8');

console.log('------------------------------');
console.log('¡CONVERSIÓN EXITOSA!');
console.log('Personajes:', characters.length);
console.log('Primer personaje:', characters[0].name);
console.log('Último personaje:', characters[characters.length - 1].name);
console.log('------------------------------');
