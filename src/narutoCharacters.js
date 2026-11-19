const characters = [
  {
    "name": "Minato Namikaze",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Fuego",
      "Viento",
      "Rayo"
    ],
    "attributes": [
      "Jinchūriki",
      "Sabio"
    ],
    "arc": "Kakashi Gaiden",
    "image": "/naruto/Minato_Namikaze.png"
  },
  {
    "name": "Itachi Uchiha",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja",
      "Akatsuki"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Genjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Dōjutsu"
    ],
    "natureTypes": [
      "Fuego",
      "Viento",
      "Agua"
    ],
    "attributes": [
      "Ninja renegado"
    ],
    "arc": "Búsqueda de Tsunade",
    "image": "/naruto/Itachi_Uchiha.png"
  },
  {
    "name": "Naruto Uzumaki",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Transformación de la naturaleza"
    ],
    "natureTypes": [
      "Viento",
      "Rayo",
      "Tierra",
      "Agua",
      "Fuego"
    ],
    "attributes": [
      "Jinchūriki",
      "Sabio"
    ],
    "arc": "Prólogo",
    "image": "/naruto/Naruto_Uzumaki.png"
  },
  {
    "name": "Kakashi Hatake",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Genjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Dōjutsu"
    ],
    "natureTypes": [
      "Rayo",
      "Tierra",
      "Agua",
      "Fuego",
      "Viento"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Prólogo",
    "image": "/naruto/Kakashi_Hatake.png"
  },
  {
    "name": "Sakura Haruno",
    "gender": "Femenino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Tierra",
      "Agua",
      "Fuego"
    ],
    "attributes": [
      "Ninja médico"
    ],
    "arc": "Prólogo",
    "image": "/naruto/Sakura_Haruno.png"
  },
  {
    "name": "Shisui Uchiha",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Genjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Dōjutsu"
    ],
    "natureTypes": [
      "Fuego",
      "Viento",
      "Rayo"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Cumbre de los Cinco Kage",
    "image": "/naruto/Shisui_Uchiha.png"
  },
  {
    "name": "Sakumo Hatake",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Ninguna"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Asalto de Pain",
    "image": "/naruto/Sakumo_Hatake.png"
  },
  {
    "name": "Madara Uchiha",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja",
      "Akatsuki"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Genjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Dōjutsu",
      "Transformación de la naturaleza"
    ],
    "natureTypes": [
      "Fuego",
      "Viento",
      "Rayo",
      "Tierra",
      "Agua"
    ],
    "attributes": [
      "Jinchūriki",
      "Ninja renegado",
      "Sabio"
    ],
    "arc": "La historia de Jiraiya el Galante",
    "image": "/naruto/Madara_Uchiha.png"
  },
  {
    "name": "Obito Uchiha",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja",
      "Akatsuki",
      "Aldea de la Niebla"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Genjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Dōjutsu",
      "Transformación de la naturaleza"
    ],
    "natureTypes": [
      "Fuego",
      "Viento",
      "Rayo",
      "Tierra",
      "Agua"
    ],
    "attributes": [
      "Jinchūriki",
      "Ninja renegado"
    ],
    "arc": "Kakashi Gaiden",
    "image": "/naruto/Obito_Uchiha.png"
  },
  {
    "name": "Hinata Hyuga",
    "gender": "Femenino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Taijutsu",
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Dōjutsu"
    ],
    "natureTypes": [
      "Fuego",
      "Rayo"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Exámenes Chūnin",
    "image": "/naruto/Hinata_Hyuga.png"
  },
  {
    "name": "Jiraiya",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Fuego",
      "Viento",
      "Tierra",
      "Agua"
    ],
    "attributes": [
      "Sabio"
    ],
    "arc": "Exámenes Chūnin",
    "image": "/naruto/Jiraiya.png"
  },
  {
    "name": "Sasuke Uchiha",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja",
      "Aldea del Sonido",
      "Akatsuki"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Genjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Dōjutsu"
    ],
    "natureTypes": [
      "Rayo",
      "Fuego",
      "Viento",
      "Tierra",
      "Agua"
    ],
    "attributes": [
      "Ninja renegado"
    ],
    "arc": "Prólogo",
    "image": "/naruto/Sasuke_Uchiha.png"
  },
  {
    "name": "Shikamaru Nara",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Fuego",
      "Tierra"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Exámenes Chūnin",
    "image": "/naruto/Shikamaru_Nara.png"
  },
  {
    "name": "Neji Hyuga",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Dōjutsu"
    ],
    "natureTypes": [
      "Fuego",
      "Tierra",
      "Agua"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Exámenes Chūnin",
    "image": "/naruto/Neji_Hyuga.png"
  },
  {
    "name": "Tobirama Senju",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Genjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Agua",
      "Fuego",
      "Viento",
      "Rayo",
      "Tierra"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Invasión de Konoha",
    "image": "/naruto/Tobirama_Senju.png"
  },
  {
    "name": "Hashirama Senju",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Genjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Transformación de la naturaleza"
    ],
    "natureTypes": [
      "Tierra",
      "Agua",
      "Fuego",
      "Viento",
      "Rayo"
    ],
    "attributes": [
      "Sabio"
    ],
    "arc": "Invasión de Konoha",
    "image": "/naruto/Hashirama_Senju.png"
  },
  {
    "name": "Deidara",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Roca",
      "Akatsuki"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Transformación de la naturaleza"
    ],
    "natureTypes": [
      "Tierra",
      "Rayo"
    ],
    "attributes": [
      "Ninja renegado",
      "Ninja mercenario"
    ],
    "arc": "Rescate del Kazekage",
    "image": "/naruto/Deidara.png"
  },
  {
    "name": "Gaara",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Arena"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Transformación de la naturaleza"
    ],
    "natureTypes": [
      "Viento",
      "Tierra",
      "Rayo"
    ],
    "attributes": [
      "Jinchūriki"
    ],
    "arc": "Exámenes Chūnin",
    "image": "/naruto/Gaara.png"
  },
  {
    "name": "Sasori",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Arena",
      "Akatsuki"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Ninguna"
    ],
    "attributes": [
      "Ninja renegado"
    ],
    "arc": "Rescate del Kazekage",
    "image": "/naruto/Sasori.png"
  },
  {
    "name": "Might Guy",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Fuego",
      "Rayo"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Exámenes Chūnin",
    "image": "/naruto/Might_Guy.png"
  },
  {
    "name": "Hidan",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de las Aguas Termales",
      "Akatsuki"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Ninguna"
    ],
    "attributes": [
      "Ninja renegado"
    ],
    "arc": "Supresión de Akatsuki",
    "image": "/naruto/Hidan.png"
  },
  {
    "name": "Rock Lee",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Ninguna"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Exámenes Chūnin",
    "image": "/naruto/Rock_Lee.png"
  },
  {
    "name": "Kushina Uzumaki",
    "gender": "Femenino",
    "affiliations": [
      "Aldea del Remolino",
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Viento",
      "Agua"
    ],
    "attributes": [
      "Jinchūriki"
    ],
    "arc": "La historia de Jiraiya el Galante",
    "image": "/naruto/Kushina_Uzumaki.png"
  },
  {
    "name": "Orochimaru",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja",
      "Akatsuki",
      "Aldea del Sonido"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Mejora corporal",
      "Transformación de la naturaleza"
    ],
    "natureTypes": [
      "Viento",
      "Rayo",
      "Tierra",
      "Agua",
      "Fuego"
    ],
    "attributes": [
      "Ninja renegado"
    ],
    "arc": "Exámenes Chūnin",
    "image": "/naruto/Orochimaru.png"
  },
  {
    "name": "Kurama",
    "gender": "Otro",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Fuego",
      "Viento"
    ],
    "attributes": [
      "Bestia con cola",
      "Sabio"
    ],
    "arc": "Prólogo",
    "image": "/naruto/Kurama.png"
  },
  {
    "name": "Zabuza Momochi",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Niebla"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Agua"
    ],
    "attributes": [
      "Ninja renegado",
      "Ninja mercenario"
    ],
    "arc": "Prólogo",
    "image": "/naruto/Zabuza_Momochi.png"
  },
  {
    "name": "Nagato",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Lluvia",
      "Akatsuki"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Dōjutsu"
    ],
    "natureTypes": [
      "Fuego",
      "Viento",
      "Rayo",
      "Tierra",
      "Agua"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "La historia de Jiraiya el Galante",
    "image": "/naruto/Nagato.png"
  },
  {
    "name": "Kaguya Otsutsuki",
    "gender": "Femenino",
    "affiliations": [
      "Ninguna"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Dōjutsu"
    ],
    "natureTypes": [
      "Fuego",
      "Viento",
      "Rayo",
      "Tierra",
      "Agua"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Kaguya Ōtsutsuki ataca",
    "image": "/naruto/Kaguya_Otsutsuki.png"
  },
  {
    "name": "Iruka Umino",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Genjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Fuego",
      "Agua"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Prólogo",
    "image": "/naruto/Iruka_Umino.png"
  },
  {
    "name": "Fugaku Uchiha",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Genjutsu"
    ],
    "kekkeiGenkai": [
      "Dōjutsu"
    ],
    "natureTypes": [
      "Fuego"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Búsqueda de Tsunade",
    "image": "/naruto/Fugaku_Uchiha.png"
  },
  {
    "name": "Tsunade",
    "gender": "Femenino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Genjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Rayo",
      "Tierra",
      "Agua",
      "Fuego"
    ],
    "attributes": [
      "Ninja médico"
    ],
    "arc": "Búsqueda de Tsunade",
    "image": "/naruto/Tsunade.png"
  },
  {
    "name": "Haku",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Niebla"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Transformación de la naturaleza"
    ],
    "natureTypes": [
      "Viento",
      "Agua"
    ],
    "attributes": [
      "Ninja mercenario"
    ],
    "arc": "Prólogo",
    "image": "/naruto/Haku.png"
  },
  {
    "name": "Tenten",
    "gender": "Femenino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Ninguna"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Exámenes Chūnin",
    "image": "/naruto/Tenten.png"
  },
  {
    "name": "Mito Uzumaki",
    "gender": "Femenino",
    "affiliations": [
      "Aldea del Remolino",
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Ninguna"
    ],
    "attributes": [
      "Jinchūriki"
    ],
    "arc": "Cuarta Guerra Mundial Shinobi: Cuenta regresiva",
    "image": "/naruto/Mito_Uzumaki.png"
  },
  {
    "name": "Yamato",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Transformación de la naturaleza"
    ],
    "natureTypes": [
      "Tierra",
      "Agua"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Puente Tenchi",
    "image": "/naruto/Yamato.png"
  },
  {
    "name": "Kisame Hoshigaki",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Niebla",
      "Akatsuki"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Agua",
      "Fuego",
      "Viento",
      "Tierra"
    ],
    "attributes": [
      "Ninja renegado"
    ],
    "arc": "Búsqueda de Tsunade",
    "image": "/naruto/Kisame_Hoshigaki.png"
  },
  {
    "name": "Teuchi",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninguno"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Ninguna"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Prólogo",
    "image": "/naruto/Teuchi.png"
  },
  {
    "name": "Konan",
    "gender": "Femenino",
    "affiliations": [
      "Aldea de la Lluvia",
      "Akatsuki"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Viento",
      "Tierra",
      "Agua"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Persecución de Itachi",
    "image": "/naruto/Konan.png"
  },
  {
    "name": "Temari",
    "gender": "Femenino",
    "affiliations": [
      "Aldea de la Arena"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Viento"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Exámenes Chūnin",
    "image": "/naruto/Temari.png"
  },
  {
    "name": "Sai",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Tierra",
      "Agua",
      "Fuego"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Rescate del Kazekage",
    "image": "/naruto/Sai.png"
  },
  {
    "name": "Killer B",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de las Nubes"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Rayo",
      "Agua",
      "Fuego"
    ],
    "attributes": [
      "Jinchūriki"
    ],
    "arc": "Batalla predestinada entre hermanos",
    "image": "/naruto/Killer_B.png"
  },
  {
    "name": "Indra Otsutsuki",
    "gender": "Masculino",
    "affiliations": [
      "Ninguna"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Genjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Dōjutsu"
    ],
    "natureTypes": [
      "Fuego",
      "Rayo"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Cumbre de los Cinco Kage",
    "image": "/naruto/Indra_Otsutsuki.png"
  },
  {
    "name": "Hiruzen Sarutobi",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Fuego",
      "Viento",
      "Rayo",
      "Tierra",
      "Agua"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Prólogo",
    "image": "/naruto/Hiruzen_Sarutobi.png"
  },
  {
    "name": "Izuna Uchiha",
    "gender": "Masculino",
    "affiliations": [
      "Ninguna"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Genjutsu"
    ],
    "kekkeiGenkai": [
      "Dōjutsu"
    ],
    "natureTypes": [
      "Fuego"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Batalla predestinada entre hermanos",
    "image": "/naruto/Izuna_Uchiha.png"
  },
  {
    "name": "Rin Nohara",
    "gender": "Femenino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Fuego",
      "Agua"
    ],
    "attributes": [
      "Ninja médico",
      "Jinchūriki"
    ],
    "arc": "Kakashi Gaiden",
    "image": "/naruto/Rin_Nohara.png"
  },
  {
    "name": "Kiba Inuzuka",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Tierra"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Exámenes Chūnin",
    "image": "/naruto/Kiba_Inuzuka.png"
  },
  {
    "name": "Kimimaro",
    "gender": "Masculino",
    "affiliations": [
      "Aldea del Sonido"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Mejora corporal"
    ],
    "natureTypes": [
      "Ninguna"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Misión de recuperación de Sasuke",
    "image": "/naruto/Kimimaro.png"
  },
  {
    "name": "Kakuzu",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Cascada",
      "Akatsuki"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Tierra",
      "Agua",
      "Fuego",
      "Viento",
      "Rayo"
    ],
    "attributes": [
      "Ninja renegado"
    ],
    "arc": "Supresión de Akatsuki",
    "image": "/naruto/Kakuzu.png"
  },
  {
    "name": "Might Duy",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Ninguna"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Nacimiento del Jinchūriki del Diez Colas",
    "image": "/naruto/Might_Duy.png"
  },
  {
    "name": "Ino Yamanaka",
    "gender": "Femenino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Tierra",
      "Agua",
      "Fuego"
    ],
    "attributes": [
      "Ninja médico"
    ],
    "arc": "Exámenes Chūnin",
    "image": "/naruto/Ino_Yamanaka.png"
  },
  {
    "name": "Kankuro",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Arena"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Viento",
      "Rayo",
      "Tierra",
      "Agua"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Exámenes Chūnin",
    "image": "/naruto/Kankuro.png"
  },
  {
    "name": "Kabuto Yakushi",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja",
      "Aldea del Sonido",
      "Akatsuki"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Genjutsu"
    ],
    "kekkeiGenkai": [
      "Mejora corporal"
    ],
    "natureTypes": [
      "Tierra",
      "Agua",
      "Viento"
    ],
    "attributes": [
      "Ninja médico",
      "Ninja renegado",
      "Sabio"
    ],
    "arc": "Exámenes Chūnin",
    "image": "/naruto/Kabuto_Yakushi.png"
  },
  {
    "name": "Mei Terumi",
    "gender": "Femenino",
    "affiliations": [
      "Aldea de la Niebla"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Transformación de la naturaleza"
    ],
    "natureTypes": [
      "Agua",
      "Fuego",
      "Rayo",
      "Tierra"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Cumbre de los Cinco Kage",
    "image": "/naruto/Mei_Terumi.png"
  },
  {
    "name": "Shino Aburame",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Tierra",
      "Fuego"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Exámenes Chūnin",
    "image": "/naruto/Shino_Aburame.png"
  },
  {
    "name": "Suigetsu Hozuki",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Niebla",
      "Aldea del Sonido",
      "Akatsuki"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Agua",
      "Viento"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Persecución de Itachi",
    "image": "/naruto/Suigetsu_Hozuki.png"
  },
  {
    "name": "Genma Shiranui",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Ninguna"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Exámenes Chūnin",
    "image": "/naruto/Genma_Shiranui.png"
  },
  {
    "name": "Hagoromo Otsutsuki",
    "gender": "Masculino",
    "affiliations": [
      "Ninguna"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Dōjutsu"
    ],
    "natureTypes": [
      "Fuego",
      "Viento",
      "Rayo",
      "Tierra",
      "Agua"
    ],
    "attributes": [
      "Jinchūriki",
      "Sabio"
    ],
    "arc": "Guerra: Clímax",
    "image": "/naruto/Hagoromo_Otsutsuki.png"
  },
  {
    "name": "Asuma Sarutobi",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Viento",
      "Fuego"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Exámenes Chūnin",
    "image": "/naruto/Asuma_Sarutobi.png"
  },
  {
    "name": "Tayuya",
    "gender": "Femenino",
    "affiliations": [
      "Aldea del Sonido"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Genjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Ninguna"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Exámenes Chūnin",
    "image": "/naruto/Tayuya.png"
  },
  {
    "name": "Konohamaru Sarutobi",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Fuego",
      "Viento",
      "Rayo"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Prólogo",
    "image": "/naruto/Konohamaru_Sarutobi.png"
  },
  {
    "name": "Akamaru",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninguno"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Ninguna"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Exámenes Chūnin",
    "image": "/naruto/Akamaru.png"
  },
  {
    "name": "Karin",
    "gender": "Femenino",
    "affiliations": [
      "Aldea de la Hierba",
      "Aldea del Sonido",
      "Akatsuki"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Tierra",
      "Agua"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Persecución de Itachi",
    "image": "/naruto/Karin.png"
  },
  {
    "name": "Danzo Shimura",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Genjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Dōjutsu",
      "Transformación de la naturaleza"
    ],
    "natureTypes": [
      "Viento",
      "Tierra",
      "Agua",
      "Fuego"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Rescate del Kazekage",
    "image": "/naruto/Danzo_Shimura.png"
  },
  {
    "name": "Hayate Gekko",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Genjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Ninguna"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Exámenes Chūnin",
    "image": "/naruto/Hayate_Gekko.png"
  },
  {
    "name": "Asura Otsutsuki",
    "gender": "Masculino",
    "affiliations": [
      "Ninguna"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Transformación de la naturaleza"
    ],
    "natureTypes": [
      "Viento",
      "Rayo",
      "Tierra",
      "Agua",
      "Fuego"
    ],
    "attributes": [
      "Sabio"
    ],
    "arc": "Cumbre de los Cinco Kage",
    "image": "/naruto/Asura_Otsutsuki.png"
  },
  {
    "name": "Utakata",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Niebla"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Agua"
    ],
    "attributes": [
      "Jinchūriki",
      "Ninja renegado"
    ],
    "arc": "Cuarta Guerra Mundial Shinobi: Cuenta regresiva",
    "image": "/naruto/Utakata.png"
  },
  {
    "name": "Yagura Karatachi",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Niebla"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Agua",
      "Viento"
    ],
    "attributes": [
      "Jinchūriki"
    ],
    "arc": "Cumbre de los Cinco Kage",
    "image": "/naruto/Yagura_Karatachi.png"
  },
  {
    "name": "Samui",
    "gender": "Femenino",
    "affiliations": [
      "Aldea de las Nubes"
    ],
    "jutsuTypes": [
      "Ninguno"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Ninguna"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Asalto de Pain",
    "image": "/naruto/Samui.png"
  },
  {
    "name": "Black Zetsu",
    "gender": "Otro",
    "affiliations": [
      "Akatsuki"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Transformación de la naturaleza",
      "Dōjutsu"
    ],
    "natureTypes": [
      "Tierra",
      "Agua",
      "Fuego",
      "Viento",
      "Rayo"
    ],
    "attributes": [
      "Jinchūriki"
    ],
    "arc": "Misión de recuperación de Sasuke",
    "image": "/naruto/Black_Zetsu.png"
  },
  {
    "name": "Darui",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de las Nubes"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Transformación de la naturaleza"
    ],
    "natureTypes": [
      "Rayo",
      "Agua",
      "Viento"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Cumbre de los Cinco Kage",
    "image": "/naruto/Darui.png"
  },
  {
    "name": "Yahiko",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Lluvia",
      "Akatsuki"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Agua",
      "Fuego",
      "Viento"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "La historia de Jiraiya el Galante",
    "image": "/naruto/Yahiko.png"
  },
  {
    "name": "Shikaku Nara",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Ninguna"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Invasión de Konoha",
    "image": "/naruto/Shikaku_Nara.png"
  },
  {
    "name": "Gamabunta",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Agua"
    ],
    "attributes": [
      "Invocación"
    ],
    "arc": "Exámenes Chūnin",
    "image": "/naruto/Gamabunta.png"
  },
  {
    "name": "Ten-Tails",
    "gender": "Otro",
    "affiliations": [
      "Ninguna"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Transformación de la naturaleza"
    ],
    "natureTypes": [
      "Fuego",
      "Viento",
      "Rayo",
      "Tierra",
      "Agua"
    ],
    "attributes": [
      "Bestia con cola"
    ],
    "arc": "Cumbre de los Cinco Kage",
    "image": "/naruto/Ten-Tails.png"
  },
  {
    "name": "Chiyo",
    "gender": "Femenino",
    "affiliations": [
      "Aldea de la Arena"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Ninguna"
    ],
    "attributes": [
      "Ninja médico"
    ],
    "arc": "Rescate del Kazekage",
    "image": "/naruto/Chiyo.png"
  },
  {
    "name": "Mikoto Uchiha",
    "gender": "Femenino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Ninguna"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Búsqueda de Tsunade",
    "image": "/naruto/Mikoto_Uchiha.png"
  },
  {
    "name": "Shizune",
    "gender": "Femenino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Ninguna"
    ],
    "attributes": [
      "Ninja médico"
    ],
    "arc": "Búsqueda de Tsunade",
    "image": "/naruto/Shizune.png"
  },
  {
    "name": "Choji Akimichi",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Tierra",
      "Fuego"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Exámenes Chūnin",
    "image": "/naruto/Choji_Akimichi.png"
  },
  {
    "name": "Hanzo",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Lluvia"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Fuego"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "La historia de Jiraiya el Galante",
    "image": "/naruto/Hanzo.png"
  },
  {
    "name": "Pakkun",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninguno"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Ninguna"
    ],
    "attributes": [
      "Invocación"
    ],
    "arc": "Prólogo",
    "image": "/naruto/Pakkun.png"
  },
  {
    "name": "Omoi",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de las Nubes"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Rayo"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Asalto de Pain",
    "image": "/naruto/Omoi.png"
  },
  {
    "name": "Gamatatsu",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninguno"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Agua"
    ],
    "attributes": [
      "Invocación"
    ],
    "arc": "Búsqueda de Tsunade",
    "image": "/naruto/Gamatatsu.png"
  },
  {
    "name": "Chojuro",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Niebla"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Agua"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Cumbre de los Cinco Kage",
    "image": "/naruto/Chojuro.png"
  },
  {
    "name": "Gengetsu Hozuki",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Niebla"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Genjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Agua",
      "Fuego",
      "Rayo",
      "Tierra"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Guerra: Confrontación",
    "image": "/naruto/Gengetsu_Hozuki.png"
  },
  {
    "name": "Yugito Nii",
    "gender": "Femenino",
    "affiliations": [
      "Aldea de las Nubes"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Fuego"
    ],
    "attributes": [
      "Jinchūriki"
    ],
    "arc": "Supresión de Akatsuki",
    "image": "/naruto/Yugito_Nii.png"
  },
  {
    "name": "Mu",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Roca"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Transformación de la naturaleza"
    ],
    "natureTypes": [
      "Tierra",
      "Agua",
      "Fuego",
      "Viento",
      "Rayo"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Cuarta Guerra Mundial Shinobi: Cuenta regresiva",
    "image": "/naruto/Mu.png"
  },
  {
    "name": "Karui",
    "gender": "Femenino",
    "affiliations": [
      "Aldea de las Nubes"
    ],
    "jutsuTypes": [
      "Ninguno"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Rayo"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Asalto de Pain",
    "image": "/naruto/Karui.png"
  },
  {
    "name": "Baki",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Arena"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Viento"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Exámenes Chūnin",
    "image": "/naruto/Baki.png"
  },
  {
    "name": "Homura Mitokado",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninguno"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Ninguna"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Exámenes Chūnin",
    "image": "/naruto/Homura_Mitokado.png"
  },
  {
    "name": "Ebisu",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Fuego"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Prólogo",
    "image": "/naruto/Ebisu.png"
  },
  {
    "name": "Shima",
    "gender": "Femenino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Genjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Fuego",
      "Viento"
    ],
    "attributes": [
      "Sabio",
      "Invocación"
    ],
    "arc": "La historia de Jiraiya el Galante",
    "image": "/naruto/Shima.png"
  },
  {
    "name": "Hiashi Hyuga",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Dōjutsu"
    ],
    "natureTypes": [
      "Ninguna"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Exámenes Chūnin",
    "image": "/naruto/Hiashi_Hyuga.png"
  },
  {
    "name": "Katsuyu",
    "gender": "Otro",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninguno"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Ninguna"
    ],
    "attributes": [
      "Invocación"
    ],
    "arc": "Búsqueda de Tsunade",
    "image": "/naruto/Katsuyu.png"
  },
  {
    "name": "Gamakichi",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Agua",
      "Fuego"
    ],
    "attributes": [
      "Sabio",
      "Invocación"
    ],
    "arc": "Invasión de Konoha",
    "image": "/naruto/Gamakichi.png"
  },
  {
    "name": "Gyuki",
    "gender": "Otro",
    "affiliations": [
      "Aldea de las Nubes"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Ninguna"
    ],
    "attributes": [
      "Bestia con cola"
    ],
    "arc": "Asalto de Pain",
    "image": "/naruto/Gyuki.png"
  },
  {
    "name": "Choza Akimichi",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Ninguna"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Invasión de Konoha",
    "image": "/naruto/Choza_Akimichi.png"
  },
  {
    "name": "Fukasaku",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Genjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Viento",
      "Agua"
    ],
    "attributes": [
      "Sabio",
      "Invocación"
    ],
    "arc": "La historia de Jiraiya el Galante",
    "image": "/naruto/Fukasaku.png"
  },
  {
    "name": "Ao",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Niebla"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Genjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Dōjutsu"
    ],
    "natureTypes": [
      "Agua"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Cumbre de los Cinco Kage",
    "image": "/naruto/Ao.png"
  },
  {
    "name": "Koharu Utatane",
    "gender": "Femenino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninguno"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Ninguna"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Exámenes Chūnin",
    "image": "/naruto/Koharu_Utatane.png"
  },
  {
    "name": "Mifune",
    "gender": "Masculino",
    "affiliations": [
      "País del Hierro"
    ],
    "jutsuTypes": [
      "Ninguno"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Ninguna"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Cumbre de los Cinco Kage",
    "image": "/naruto/Mifune.png"
  },
  {
    "name": "Kurenai Yuhi",
    "gender": "Femenino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Genjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Ninguna"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Exámenes Chūnin",
    "image": "/naruto/Kurenai_Yuhi.png"
  },
  {
    "name": "Inoichi Yamanaka",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Hoja"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Agua"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Invasión de Konoha",
    "image": "/naruto/Inoichi_Yamanaka.png"
  },
  {
    "name": "Jugo",
    "gender": "Masculino",
    "affiliations": [
      "Aldea del Sonido",
      "Akatsuki"
    ],
    "jutsuTypes": [
      "Ninguno"
    ],
    "kekkeiGenkai": [
      "Mejora corporal"
    ],
    "natureTypes": [
      "Viento",
      "Tierra",
      "Agua"
    ],
    "attributes": [
      "Sabio"
    ],
    "arc": "Persecución de Itachi",
    "image": "/naruto/Jugo.png"
  },
  {
    "name": "A (Fourth Raikage)",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de las Nubes"
    ],
    "jutsuTypes": [
      "Ninjutsu",
      "Taijutsu"
    ],
    "kekkeiGenkai": [
      "Ninguno"
    ],
    "natureTypes": [
      "Rayo",
      "Tierra",
      "Agua"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Asalto de Pain",
    "image": "/naruto/A_(Fourth_Raikage).png"
  },
  {
    "name": "Onoki",
    "gender": "Masculino",
    "affiliations": [
      "Aldea de la Roca"
    ],
    "jutsuTypes": [
      "Ninjutsu"
    ],
    "kekkeiGenkai": [
      "Transformación de la naturaleza"
    ],
    "natureTypes": [
      "Tierra",
      "Fuego",
      "Viento",
      "Rayo"
    ],
    "attributes": [
      "Ninguno"
    ],
    "arc": "Cumbre de los Cinco Kage",
    "image": "/naruto/Onoki.png"
  }
];

export default characters;
