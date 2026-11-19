
import characters from './narutoCharactersImages';
import { useState, useEffect, useRef } from 'react';
import './NarutoDle.css';

const fields = [
  ['gender', 'Género'],
  ['affiliations', 'Afiliaciones'],
  ['jutsuTypes', 'Tipos de Jutsu'],
  ['kekkeiGenkai', 'Kekkei Genkai'],
  ['natureTypes', 'Tipos de naturaleza'],
  ['attributes', 'Atributos'],
  ['arc', 'Arco de debut'],
];

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

const rowStyle = {
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'stretch',
  width: 'max-content',
  minWidth: 'max-content',
  gap: '8px',
};

function getArgentinaDate() {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Argentina/Buenos_Aires',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(new Date());

  const part = (type) =>
    parts.find((item) => item.type === type).value;

  return `${part('year')}-${part('month')}-${part('day')}`;
}

function getPuzzleNumber(day) {
  const startDate = '2026-11-17';

  const [startYear, startMonth, startDay] =
    startDate.split('-').map(Number);

  const [year, month, date] = day.split('-').map(Number);

  return (
    Math.floor(
      (
        Date.UTC(year, month - 1, date) -
        Date.UTC(startYear, startMonth - 1, startDay)
      ) / 86400000
    ) + 1
  );
}

function getDailyCharacter(day) {
  if (!characters.length) return null;

  const [year, month, date] = day.split('-').map(Number);

  const dayNumber = Math.floor(
    Date.UTC(year, month - 1, date) / 86400000
  );

  const index =
    ((dayNumber % characters.length) + characters.length) %
    characters.length;

  return characters[index];
}

function loadGuesses(day) {
  try {
    const saved = localStorage.getItem(`narutodle-${day}`);

    if (!saved) return [];

    const names = JSON.parse(saved);

    if (!Array.isArray(names)) return [];

    return names
      .map((name) =>
        characters.find((character) => character.name === name)
      )
      .filter(Boolean);
  } catch {
    return [];
  }
}

function getArcArrow(guessArc, secretArc) {
  const guessIndex = arcOrder.indexOf(guessArc);
  const secretIndex = arcOrder.indexOf(secretArc);

  if (guessIndex === -1 || secretIndex === -1) return '';
  if (guessIndex === secretIndex) return '';

  return secretIndex > guessIndex ? '⬆' : '⬇';
}

function compare(value, target) {
  if (value == null || target == null) {
    return value == null && target == null ? 'correct' : 'wrong';
  }

  const values = Array.isArray(value) ? value : [value];
  const targets = Array.isArray(target) ? target : [target];

  const allMatch =
    values.length === targets.length &&
    values.every((item) => targets.includes(item)) &&
    targets.every((item) => values.includes(item));

  if (allMatch) return 'correct';

  const someMatch = values.some((item) => targets.includes(item));

  if (someMatch) return 'partial';

  return 'wrong';
}

function formatValue(value) {
  if (value == null) return 'X';

  if (Array.isArray(value)) {
    return value.length ? value.join(', ') : 'X';
  }

  return value;
}

export default function NarutoDle({ onBack }) {
  const [day, setDay] = useState(() => getArgentinaDate());
  const victoryRef = useRef(null);

  const [guesses, setGuesses] = useState(() =>
    loadGuesses(getArgentinaDate())
  );

  const [query, setQuery] = useState('');
  const [countdown, setCountdown] = useState('');
  const [showVictoryModal, setShowVictoryModal] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();

      const parts = new Intl.DateTimeFormat('en-CA', {
        timeZone: 'America/Argentina/Buenos_Aires',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }).formatToParts(now);

      const getPart = (type) =>
        parts.find((part) => part.type === type).value;

      const year = Number(getPart('year'));
      const month = Number(getPart('month'));
      const date = Number(getPart('day'));

      const nextMidnight = new Date(
        Date.UTC(year, month - 1, date + 1, 3)
      );

      const remaining = Math.max(
        0,
        nextMidnight.getTime() - now.getTime()
      );

      const hours = String(
        Math.floor(remaining / 3600000)
      ).padStart(2, '0');

      const minutes = String(
        Math.floor((remaining % 3600000) / 60000)
      ).padStart(2, '0');

      const seconds = String(
        Math.floor((remaining % 60000) / 1000)
      ).padStart(2, '0');

      setCountdown(`${hours}:${minutes}:${seconds}`);
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const secret = getDailyCharacter(day);

  useEffect(() => {
    const checkDay = () => {
      const today = getArgentinaDate();

      setDay((previousDay) => {
        if (previousDay !== today) {
          setGuesses(loadGuesses(today));
          setQuery('');
          setShowVictoryModal(false);
          setShareCopied(false);
          return today;
        }

        return previousDay;
      });
    };

    const interval = setInterval(checkDay, 15000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      `narutodle-${day}`,
      JSON.stringify(guesses.map((character) => character.name))
    );
  }, [day, guesses]);

  const won = secret
    ? guesses.some((guess) => guess.name === secret.name)
    : false;

  const puzzleNumber = getPuzzleNumber(day);

  const shareRows = secret
    ? [...guesses]
        .slice(0, 6)
        .map((guess) =>
          fields
            .map(([key]) => {
              const arrow =
                key === 'arc'
                  ? getArcArrow(guess[key], secret[key])
                  : '';

              if (arrow === '⬆') return '⬆️';
              if (arrow === '⬇') return '⬇️';

              const result = compare(guess[key], secret[key]);

              if (result === 'correct') return '🟩';
              if (result === 'partial') return '🟨';

              return '🟥';
            })
            .join('')
        )
        .join('\n')
    : '';

  const shareText =
    `He encontrado #NarutoDle #${puzzleNumber} ` +
    `en modo clásico en ${guesses.length} ` +
    `${guesses.length === 1 ? 'intento' : 'intentos'} 🍥\n` +
    shareRows;

  useEffect(() => {
    if (won) {
      setShowVictoryModal(true);
    }
  }, [won, day]);

  useEffect(() => {
    if (won && showVictoryModal) {
      const timer = setTimeout(() => {
        victoryRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [won, showVictoryModal]);

  const suggestions = characters.filter(
    (character) =>
      character.name.toLowerCase().startsWith(query.toLowerCase()) &&
      !guesses.some((guess) => guess.name === character.name)
  );

  function guessCharacter(character) {
    if (
      !character ||
      won ||
      guesses.some((guess) => guess.name === character.name)
    ) {
      return;
    }

    setGuesses((previous) => [character, ...previous]);
    setQuery('');
  }

  async function copyShareResult() {
    try {
      await navigator.clipboard.writeText(shareText);
      setShareCopied(true);

      setTimeout(() => {
        setShareCopied(false);
      }, 2000);
    } catch {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = shareText;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';

        document.body.appendChild(textarea);
        textarea.select();

        const copied = document.execCommand('copy');
        document.body.removeChild(textarea);

        setShareCopied(copied);

        if (copied) {
          setTimeout(() => setShareCopied(false), 2000);
        }
      } catch {
        setShareCopied(false);
      }
    }
  }

  if (!secret) {
    return (
      <main className="page narutodle">
        <header className="header">
          <button
            className="cloverdle-back"
            onClick={onBack}
            type="button"
          >
            ← Volver a AnimeDle
          </button>
          <h1 className="narutodle-title">NarutoDle</h1>
        </header>

        <section className="game">
          <p>
            Todavía no hay personajes cargados. Estamos preparando
            la lista de Naruto.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="page narutodle">
      <header className="header">
        <button
          className="cloverdle-back"
          onClick={onBack}
          type="button"
        >
          ← Volver a AnimeDle
        </button>

        <h1 className="narutodle-title">NarutoDle</h1>

        <p className="daily-countdown">
          Próximo personaje en
          <strong>{countdown}</strong>
        </p>
      </header>

      <section className="game">
        <h2>Adiviná el personaje</h2>

        <p className="instructions">
          Hay un personaje secreto por día. Escribí un nombre y
          compará sus características para descubrirlo.
        </p>

        <div className="search">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ej.: Naruto, Sasuke, Kakashi..."
            disabled={won}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && suggestions.length === 1) {
                guessCharacter(suggestions[0]);
              }
            }}
          />

          {query && !won && (
            <div className="suggestions">
              {suggestions.map((character) => (
                <button
                  key={character.name}
                  onClick={() => guessCharacter(character)}
                  className="suggestion"
                  type="button"
                >
                  {character.image && (
                    <img
                      src={character.image}
                      alt=""
                      className="suggestion-portrait"
                      onError={(event) => {
                        event.currentTarget.style.display = 'none';
                      }}
                    />
                  )}
                  <span>{character.name}</span>
                </button>
              ))}

              {suggestions.length === 0 && (
                <div className="empty">
                  No hay personajes disponibles.
                </div>
              )}
            </div>
          )}
        </div>

        <div className="legend">
          <span>
            <i className="dot correct" /> Correcto
          </span>
          <span>
            <i className="dot partial" /> Coincidencia parcial
          </span>
          <span>
            <i className="dot wrong" /> Incorrecto
          </span>
        </div>

        <div className="results">
          <div className="result-row labels" style={rowStyle}>
            <div>Personaje</div>

            {fields.map(([key, label]) => (
              <div key={key}>{label}</div>
            ))}
          </div>

          {guesses.map((character) => (
            <div
              className="result-row"
              key={character.name}
              style={rowStyle}
            >
              <div className="name-cell">
                {character.image && (
                  <img
                    className="character-image"
                    src={character.image}
                    alt={character.name}
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                    }}
                  />
                )}
              </div>

              {fields.map(([key], index) => {
                const arrow =
                  key === 'arc'
                    ? getArcArrow(character[key], secret[key])
                    : '';

                const value = formatValue(character[key]);

                return (
                  <div
                    key={key}
                    className={`cell reveal ${compare(
                      character[key],
                      secret[key]
                    )} ${arrow ? 'arc-cell' : ''}`}
                    style={{
                      flex: '0 0 150px',
                      width: '150px',
                      minWidth: '150px',
                      maxWidth: '150px',
                      animationDelay: `${index * 0.3}s`,
                    }}
                    title={value}
                  >
                    {arrow && (
                      <svg
                        className="arc-arrow"
                        viewBox="0 0 20 24"
                        aria-hidden="true"
                      >
                        <path
                          d={
                            arrow === '⬆'
                              ? 'M10 2 L2 11 H6 V22 H14 V11 H18 Z'
                              : 'M6 2 H14 V13 H18 L10 22 L2 13 H6 Z'
                          }
                          fill="#333"
                          stroke="#333"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}

                    <span className="cell-text">{value}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <p className="attempts">Intentos: {guesses.length}</p>

        {won && (
          <p className="instructions">
            ¡Desafío completado! Volvé mañana para descubrir
            el próximo personaje.
          </p>
        )}
      </section>

      {won && showVictoryModal && (
        <section className="victory-overlay" ref={victoryRef}>
          <div className="victory-modal">
            <button
              className="victory-close"
              onClick={() => setShowVictoryModal(false)}
              aria-label="Cerrar"
            >
              ×
            </button>

            <p className="victory-label">
              {guesses.length === 1 ? '¡DE UNA!' : '¡CORRECTO!'}
            </p>

            <h2>¡Personaje descubierto!</h2>

            {secret.image && (
              <img
                className="victory-portrait"
                src={secret.image}
                alt={secret.name}
              />
            )}

            <h3 className="victory-name">{secret.name}</h3>

            <p className="victory-attempts">
              Intentos: <strong>{guesses.length}</strong>
            </p>

            <div className="victory-countdown">
              <span>Siguiente personaje en:</span>
              <strong>{countdown}</strong>
            </div>

            <button
              className="victory-button"
              onClick={() => setShowVictoryModal(false)}
            >
              Continuar
            </button>
          </div>

          <div className="share-card">
            <h3>Compartí tu resultado</h3>

            <p className="share-description">
              Mostrá cómo resolviste el desafío de hoy.
            </p>

            <pre className="share-result">{shareText}</pre>

            <button
              className="share-button"
              onClick={copyShareResult}
            >
              {shareCopied ? '¡Copiado!' : 'Copiar resultado'}
            </button>
          </div>
        </section>
      )}

      <footer>Un juego hecho por fans de Naruto.</footer>
    </main>
  );
}
