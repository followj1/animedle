
import characters from './characters';
import { useState, useEffect, useRef } from 'react';
import './App.css';

const fields = [
  ['kingdom', 'Reino'],
  ['squad', 'Escuadrón'],
  ['magic', 'Atributo mágico'],
  ['gender', 'Género'],
  ['arc', 'Arco de primera aparición'],
  ['attributes', 'Atributos'],
];

const arcOrder = [
  'Inicio',
  'Ciudad de Saussy',
  'Entrada a los Caballeros Mágicos',
  'Mazmorra',
  'Invasión de Kiten',
  'Templo Submarino',
  'Bosque de las Brujas',
  'Caballeros Reales',
  'Pasado de Zora',
  'Reencarnación de los Elfos',
  'Reino Corazón',
  'Reino Espada',
];

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
  const startDate = '2026-10-16';

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
    const saved = localStorage.getItem(`black-cloverdle-${day}`);

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

export default function Cloverdle({ onBack }) {
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
      `black-cloverdle-${day}`,
      JSON.stringify(guesses.map((character) => character.name))
    );
  }, [day, guesses]);

  const won = guesses.some(
    (guess) => guess.name === secret.name
  );

  const puzzleNumber = getPuzzleNumber(day);

  const shareRows = [...guesses]
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
    .join('\n');

  const shareText =
    `He encontrado #Cloverdle #${puzzleNumber} ` +
    `en modo clásico en ${guesses.length} ` +
    `${guesses.length === 1 ? 'intento' : 'intentos'} 🍀\n` +
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

  return (
    <main className="page">
      <header className="header">
        <button
          className="cloverdle-back"
          onClick={onBack}
          type="button"
        >
          ← Volver a AnimeDle
        </button>

        <h1 className="cloverdle-title">Cloverdle</h1>

        <p className="daily-countdown">
          Próximo personaje en
          <strong>{countdown}</strong>
        </p>
      </header>

      <section className="game">
        <h2>Adiviná el personaje</h2>

        <p className="instructions">
          Hay un personaje secreto por día. Escribí un nombre y
          compará sus atributos para descubrirlo.
        </p>

        <div className="search">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ej.: Asta, Yuno, Noelle..."
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
                  <img
                    src={character.image}
                    alt=""
                    className="suggestion-portrait"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                    }}
                  />
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
          <div className="result-row labels">
            <div>Personaje</div>
            {fields.map(([key, label]) => (
              <div key={key}>{label}</div>
            ))}
          </div>

          {guesses.map((character) => (
            <div className="result-row" key={character.name}>
              <div className="name-cell character-cell">
                {character.image && (
                  <img
                    className="character-image"
                    src={character.image}
                    alt="Personaje"
                  />
                )}
              </div>

              {fields.map(([key], index) => {
                const arrow =
                  key === 'arc'
                    ? getArcArrow(character[key], secret[key])
                    : '';

                const value =
                  character[key] == null
                    ? 'X'
                    : Array.isArray(character[key])
                    ? character[key].join(', ')
                    : character[key];

                return (
                  <div
                    key={key}
                    className={`cell reveal ${compare(
                      character[key],
                      secret[key]
                    )} ${arrow ? 'arc-cell' : ''}`}
                    style={{
                      animationDelay: `${index * 0.3}s`,
                      ...(arrow
                        ? {
                            position: 'relative',
                            overflow: 'hidden',
                            isolation: 'isolate',
                          }
                        : {}),
                    }}
                    title={value}
                  >
                    {arrow && (
                      <svg
                        className="arc-arrow"
                        viewBox="0 0 20 24"
                        aria-hidden="true"
                        style={{
                          display: 'block',
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          width: '60px',
                          height: '80px',
                          transform: 'translate(-50%, -50%)',
                          opacity: 0.28,
                          zIndex: 0,
                          pointerEvents: 'none',
                          overflow: 'visible',
                        }}
                      >
                        <path
                          d={
                            arrow === '⬆'
                              ? 'M10 2 L2 11 H6 V22 H14 V11 H18 Z'
                              : 'M6 2 H14 V13 H18 L10 22 L2 13 H6 Z'
                          }
                          fill="#000000"
                          stroke="#000000"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}

                    <span
                      className="cell-text"
                      style={{
                        position: 'relative',
                        zIndex: 2,
                        color: '#ffffff',
                        visibility: 'visible',
                        opacity: 1,
                      }}
                    >
                      {value}
                    </span>
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
              {guesses.length === 1 ? 'ONE SHOT!' : '¡CORRECTO!'}
            </p>

            <h2>¡Personaje descubierto!</h2>

            <img
              className="victory-portrait"
              src={secret.image}
              alt={secret.name}
            />

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

      <footer>Un juego hecho por fans de Black Clover.</footer>
    </main>
  );
}
