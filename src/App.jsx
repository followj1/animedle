
import { useState } from 'react';
import Cloverdle from './Cloverdle';
import NarutoDle from './NarutoDle';
import './Home.css';

export default function App() {
  const [selectedAnime, setSelectedAnime] = useState(null);

  if (selectedAnime === 'black-clover') {
    return (
      <Cloverdle onBack={() => setSelectedAnime(null)} />
    );
  }

  if (selectedAnime === 'naruto') {
    return (
      <NarutoDle onBack={() => setSelectedAnime(null)} />
    );
  }

  return (
    <main className="animedle-home">
      <header className="home-header">
        <div className="home-logo">
          <span className="logo-icon">✦</span>
          <h1>AnimeDle</h1>
        </div>

        <p className="home-subtitle">
          ¿Puedes adivinar el personaje diario de tu anime favorito?
        </p>
      </header>

      <section className="anime-section">
        <div className="section-heading">
          <h2>Elegí tu anime</h2>
          <p>
            Poné a prueba tus conocimientos y descubrí
            el personaje secreto.
          </p>
        </div>

        <div className="anime-grid">

          <article className="anime-card">
            <div className="anime-image">
              <img
                src="/images/black_clover_tarjeta.jpg"
                alt="Black Clover"
              />
            </div>

            <div className="anime-info">
              <h3>Black Clover</h3>
              <p>El mundo de los Caballeros Mágicos</p>

              <button
                className="anime-button play-button"
                onClick={() => setSelectedAnime('black-clover')}
              >
                Jugar <span>→</span>
              </button>
            </div>
          </article>

          <article className="anime-card">
            <div className="anime-image">
              <img
                src="/images/naruto_tarjeta.jpg"
                alt="Naruto"
              />
            </div>

            <div className="anime-info">
              <h3>Naruto</h3>
              <p>El camino del ninja</p>

              <button
                className="anime-button play-button"
                onClick={() => setSelectedAnime('naruto')}
              >
                Jugar <span>→</span>
              </button>
            </div>
          </article>

          <article className="anime-card">
            <div className="anime-image">
              <img
                src="/images/kimetsu_tarjeta.jpg"
                alt="Kimetsu no Yaiba"
              />
            </div>

            <div className="anime-info">
              <h3>Kimetsu no Yaiba</h3>
              <p>El camino del cazador de demonios</p>

              <button
                className="anime-button upcoming-button"
                disabled
              >
                Próximamente
              </button>
            </div>
          </article>

        </div>
      </section>

      <footer className="home-footer">
        AnimeDle · Un juego hecho por fans, para fans.
      </footer>
    </main>
  );
}
