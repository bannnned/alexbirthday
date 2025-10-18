// src/data/scenes.ts
import type { Scene } from "../types";

// Импортируем изображения как модули (чтобы TS и Webpack/Vite их обработали)
// === ФОНЫ ===
import scene1Bg from "../assets/bg/apartments.png";
import schoolStadion from "../assets/bg/school-stadion.png";
import spbFatherHome from "../assets/bg/spb-father-home.jpg";
import gymnasium9 from "../assets/bg/gymnasium9.png"; // этап 4
import itmoCoworking from "../assets/bg/itmo-сoworking.jpg"; // этап 6 (заглушка)
import spbCity from "../assets/bg/spb-сity.png"; // этап 7 (заглушка)
import gpnOffice from "../assets/bg/gpn-office.png"; // этап 8 (заглушка)
import strijiResidential from "../assets/bg/striji-residential.png"; // этап 10 (заглушка)
import moscowCity from "../assets/bg/moscow-city.jpeg"; // этап 11 (заглушка)
import lemanTechOffice from "../assets/bg/leman-tech-office.jpeg"; // этап 12 (заглушка)
import final from "../assets/bg/final.png"; // этап 12 (заглушка)

export const scenes: Scene[] = [
  {
    id: 1,
    age: 7,
    location: "Мурманск, Инженерная ул.",
    background: scene1Bg,
    speakers: ["Саша", "Мама", "Дима"],
    dialogue: [
      {
        speaker: "Мама",
        text: "Саша, мне нужно сходить в парикмахерскую. Будь добр, присмотри за Димой. Он маленький, может упасть",
        position: "left",
      },
      {
        speaker: "Саша",
        text: "Маам, ну я же хочу с ребятами в футбол поиграть…",
        position: "right",
      },
      {
        speaker: "Дима",
        text: "Саш, пошли гулять! На улице так тепло!",
        position: "left",
      },
      {
        speaker: "Мама",
        mood: "Грустная",
        text: "Ты старший брат. На тебе ответственность.",
        position: "left",
      },
      {
        speaker: "Саша",
        mood: "Думает",
        text: "Эх, как же быть?..",
        position: "right",
      },
    ],
    choices: [
      {
        text: "Присмотреть за Димой и пойти с ним гулять",
        isCorrect: true,
        feedback: [
          { speaker: "Дима", text: "Ура! Ты самый лучший брат!" },
          {
            speaker: "Мама",
            text: "Спасибо, Саша. Вот так и должен поступать настоящий мужчина.",
          },
        ],
      },
      {
        text: "Убежать к друзьям и оставить Диму",
        isCorrect: false,
        feedback: [
          { speaker: "Дима", mood: "Плачет", text: "Ты обещал…" },
          {
            speaker: "Мама",
            mood: "Грустная",
            text: "Саша, я на тебя рассчитывала. Очень жаль.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    age: 9,
    location: "Мурманск, футбольный зал",
    background: schoolStadion,
    speakers: ["Саша", "Максим", "Тренер"],
    dialogue: [
      {
        speaker: "Максим",
        text: "Саня! Давай в одной команде. Только ты пасуй!",
        position: "left",
      },
      {
        speaker: "Саша",
        text: "Ха! Я же лучший нападающий!",
        position: "right",
      },
      {
        speaker: "Тренер",
        text: "Парни, играем честно. Победит тот, кто умеет работать в команде.",
        position: "left",
      },
      {
        speaker: "Максим",
        text: "Ну что, ты со мной или сам?",
        position: "left",
      },
    ],
    choices: [
      {
        text: "Сыграть в паре с Максимом",
        isCorrect: true,
        feedback: [
          { speaker: "", text: "Саша пасует, Максим забивает гол" },
          {
            speaker: "Тренер",
            mood: "Счастлив",
            text: "Молодцы! Отличная командная работа",
          },
          {
            speaker: "Максим",
            mood: "Счастлив",
            text: "Вот это да! Мы как Арсенал!",
          },
        ],
      },
      {
        text: "Играть самому и не пасовать",
        isCorrect: false,
        feedback: [
          { speaker: "", text: "Саша теряет мяч, команда проигрывает" },
          {
            speaker: "Максим",
            mood: "Грустный",
            text: "Блин, Саня, зачем так? Мы же могли выиграть!",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    age: 12,
    location: "Санкт-Петербург, Ленинский проспект",
    background: spbFatherHome,
    speakers: ["Саша", "Папа"],
    dialogue: [
      {
        speaker: "Папа",
        text: "Ну что, Саня, рассказывай. Как школа?",
        position: "left",
      },
      {
        speaker: "Саша",
        text: "Нормально…",
        position: "right",
      },
      {
        speaker: "Папа",
        text: "Ты так всегда отвечаешь. Но ведь я хочу знать, чем ты живёшь",
        position: "left",
      },
    ],
    choices: [
      {
        text: "Честно рассказать про свои увлечения иностранными языками и футболом ",
        isCorrect: true,
        feedback: [
          {
            speaker: "Папа",
            text: "Молодец, сын. Важно, чтобы были увлечения и цели",
          },
        ],
      },
      {
        text: "Отмахнуться: «Да всё норм»",
        isCorrect: false,
        feedback: [
          {
            speaker: "Папа",
            mood: "Грустный",
            text: "*тяжело вздыхает* Ты стал далеким от меня, Саша…",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    age: 15,
    location: "Мурманск, гимназия №9",
    background: gymnasium9,
    speakers: ["Саша", "Кирилл", "Никита", "Учитель", "Мама"],
    dialogue: [
      {
        speaker: "Кирилл",
        text: "Саня, пошли гулять, на улице солнце! Подумаешь, прогуляем один урок",
        position: "left",
      },
      {
        speaker: "Никита",
        text: "Ага, математика подождёт. Чего париться?",
        position: "left",
      },
      { speaker: "Саша", text: "Но завтра контрольная…", position: "right" },
      {
        speaker: "Кирилл",
        text: "Ну и что? Зачем напрягаться? Живем один раз, брат.",
        position: "left",
      },
      {
        speaker: "Никита",
        text: "Давай с нами, не будь ботаном.",
        position: "left",
      },
    ],
    choices: [
      {
        text: "Отказать ребятам, остаться в школе",
        isCorrect: true,
        feedback: [
          {
            speaker: "Учитель",
            text: "Саша, молодец. Вижу, ты серьёзно относишься к учебе.",
          },
          { speaker: "Никита", text: "Ладно, потом спишем у тебя." },
        ],
      },
      {
        text: "Прогулять",
        isCorrect: false,
        feedback: [
          { speaker: "", text: "Учитель замечает отсутствие и звонит маме." },
          { speaker: "Мама", text: "Саша, я очень разочарована." },
        ],
      },
    ],
  },
  {
    id: 5,
    age: 17,
    location: "Мурманск, Инженерная улица",
    background: scene1Bg,
    speakers: ["Саша", "Мама"],
    dialogue: [
      {
        speaker: "Мама",
        text: "Саша, тебе уже пришли результаты ЕГЭ?",
        position: "left",
      },
      {
        speaker: "Саша",
        text: "Да, все результаты супер, недоволен только физикой.",
        position: "right",
      },
      {
        speaker: "Мама",
        text: "С такими результатами ты точно поступишь в другой город, тебе не нужно оставаться в Мурманске. Здесь не сделать хорошую карьеру.",
        position: "left",
      },
      {
        speaker: "Саша",
        text: "Ты права, но я немного волнуюсь. Что если у меня не получится?",
        position: "right",
      },
    ],
    choices: [
      {
        text: "Решиться на переезд и подать документы в Санкт-Петербург",
        isCorrect: true,
        feedback: [
          {
            speaker: "Мама",
            text: "Молодчина. Уверена, что ты со всем справишься в новом городе.",
          },
        ],
      },
      {
        text: "Решиться на переезд и подать документы в Москву",
        isCorrect: false,
        feedback: [
          {
            speaker: "Мама",
            mood: "Злая",
            text: "Не уверена, что это хороший выбор…",
          },
        ],
      },
      {
        text: "Остаться в Мурманске",
        isCorrect: false,
        feedback: [
          {
            speaker: "Мама",
            mood: "Злая",
            text: "Зря, сынок. Ты лишаешь себя многих возможностей.",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    age: 18,
    location: "Университет ИТМО, коворкинг",
    background: itmoCoworking,
    speakers: ["Саша", "Антон", "Даша"],
    dialogue: [
      {
        speaker: "Антон",
        text: "Саша, пошли вечером на Мегабаттл, будем болеть за ТИНТ!",
        position: "left",
      },
      {
        speaker: "Даша",
        text: "Да ну, завтра зачет. Лучше повторим материал.",
        position: "left",
      },
      { speaker: "Саша", text: "И то, и то хочется…", position: "right" },
      {
        speaker: "Антон",
        text: "Ну давай, развеяться нужно.",
        position: "left",
      },
      {
        speaker: "Даша",
        text: "Подумай: один вечер – и завтра может быть провал.",
        position: "left",
      },
    ],
    choices: [
      {
        text: "Учиться с Дашей",
        isCorrect: true,
        feedback: [
          {
            speaker: "Даша",
            text: "Правильно. С таким подходом всё получится.",
          },
          { speaker: "", text: "На следующий день зачет сдан." },
        ],
      },
      {
        text: "Пойти с Антоном",
        isCorrect: false,
        feedback: [
          { speaker: "", text: "На зачете завал." },
          { speaker: "Антон", text: "Блин, я-то сдал, а ты?" },
        ],
      },
    ],
  },
  {
    id: 7,
    age: 20,
    location: "Санкт-Петербург",
    background: spbCity,
    speakers: ["Саша", "Максим"],
    dialogue: [
      {
        speaker: "Максим",
        text: "Саня! Давненько не виделись. Пошли в Токио-сити, устроим накидонсон?",
        position: "left",
      },
      {
        speaker: "Саша",
        text: "Эх, ностальгия. Но у меня завал по учебе, обучаю нейросети…",
        position: "right",
      },
      {
        speaker: "Максим",
        text: "Да ладно, всего часик. Вспомним молодость!",
        position: "left",
      },
    ],
    choices: [
      {
        text: "Согласиться",
        isCorrect: true,
        feedback: [
          {
            speaker: "",
            text: "Они ужинают в Токио Сити, пьют шоты, вспоминают школьные годы и занятия футболом.",
          },
          { speaker: "Максим", text: "Дружба – это самое главное, брат." },
        ],
      },
      {
        text: "Отказаться",
        isCorrect: false,
        feedback: [
          {
            speaker: "Максим",
            mood: "Грустный",
            text: "Жаль. Видимо, у нас теперь разные жизни.",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    age: 21,
    location: "Санкт-Петербург, офис ГПН",
    background: gpnOffice,
    speakers: ["Саша"],
    dialogue: [
      {
        speaker: "Саша",
        text: "На работе дают слоты на забег… Чувствую, что это мое, я давно мечтаю пробежать марафон. Но я пока не готов. Что делать? Поучаствовать ли в забеге?",
        position: "right",
      },
    ],
    choices: [
      {
        text: "Принять участие в забеге на 10 км",
        isCorrect: true,
        feedback: [
          {
            speaker: "Саша",
            text: "Вау, мне очень понравилось! Я буду тренироваться, чтобы научиться бегать дольше и быстрее",
          },
        ],
      },
      {
        text: "Получить стартовый пакет и слиться",
        isCorrect: false,
        feedback: [{ speaker: "Саша", text: "Эх, я ведь даже не попробовал…" }],
      },
    ],
  },
  {
    id: 9,
    age: 21,
    location: "Санкт-Петербург, AI Talent Hub",
    background: itmoCoworking,
    speakers: ["Саша", "Гриша", "Наташа", "Тимур"],
    dialogue: [
      {
        speaker: "Наташа",
        text: "Видели, 21 октября будет квиз, давайте поучаствуем?",
        position: "left",
      },
      {
        speaker: "Гриша",
        text: "Я не против, надо собрать команду",
        position: "left",
      },
      {
        speaker: "Тимур",
        text: "Почему бы и нет, будет весело. Как назовем команду? Саша, есть идеи?",
        position: "left",
      },
    ],
    choices: [
      {
        text: "«Давайте ML-богемы?»",
        isCorrect: true,
        feedback: [
          {
            speaker: "Наташа",
            mood: "Радостная",
            text: "Отличное название, мы и правда богемы.",
          },
          { speaker: "Гриша", text: "Класс, пойдемте разносить перваков." },
          {
            speaker: "",
            text: "Они играют в квиз, веселятся и занимают второе место.",
          },
        ],
      },
      {
        text: "«Как насчет Крутые бобры?»",
        isCorrect: false,
        feedback: [
          {
            speaker: "Тимур",
            text: "Так называется твоя команда для хакатонов. Придумай что-то более креативное…",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    age: 22,
    location: "Санкт-Петербург, ЖК «Стрижи»",
    background: strijiResidential,
    speakers: ["Саша", "Ксюша"],
    dialogue: [
      {
        speaker: "Ксюша",
        text: "Приветик, а ты что сейчас делаешь?",
        position: "left",
      },
      {
        speaker: "Саша",
        text: "Вот прямо сейчас ничего. Открываю шоколадку, чтобы съесть, а что?",
        position: "right",
      },
      {
        speaker: "Ксюша",
        text: "Хотела позвать тебя гулять, пойдем?",
        position: "left",
      },
    ],
    choices: [
      {
        text: "Согласиться и пойти гулять с Ксюшей",
        isCorrect: true,
        feedback: [
          {
            speaker: "Ксюша",
            text: "Как здорово! Я скоро приеду на Ломоносовскую.",
          },
          {
            speaker: "",
            text: "Они гуляют около карьера, мило общаются, даже не хочется расходиться.",
          },
          {
            speaker: "Ксюша",
            mood: "Радостная",
            text: "Спасибо за прогулку. Мне было с тобой очень интересно.",
          },
        ],
      },
      {
        text: "Сказать, что устал, и отказаться",
        isCorrect: false,
        feedback: [
          {
            speaker: "Ксюша",
            mood: "Грустная",
            text: "Жаль…Кажется, ты не настроен общаться.",
          },
        ],
      },
    ],
  },
  {
    id: 11,
    age: 22,
    location: "Москва",
    background: moscowCity,
    speakers: ["Саша", "Дима"],
    dialogue: [
      {
        speaker: "Дима",
        text: "Ну что, брат, давно не виделись! У меня сейчас такая сложная учеба, очень устаю.",
        position: "left",
      },
      {
        speaker: "Саша",
        text: "Круто, что ты двигаешься вперёд.",
        position: "right",
      },
      {
        speaker: "Дима",
        text: "Я иногда сомневаюсь… Не знаю, в правильном ли направлении иду. Ты же старший, дай совет.",
        position: "left",
      },
      {
        speaker: "Саша",
        text: "Димас, ты всегда был умный, сам всё решишь.",
        position: "right",
      },
      {
        speaker: "Дима",
        text: "Ну, всё равно интересно, что ты думаешь. Иногда нужен кто-то, кто поддержит.",
        position: "left",
      },
    ],
    choices: [
      {
        text: "Поддержать и вдохновить брата",
        isCorrect: true,
        feedback: [
          {
            speaker: "Саша",
            text: "Димас, ты молодец. Не сомневайся в себе. Ошибки бывают у всех, но важно не останавливаться.",
          },
          {
            speaker: "Дима",
            text: "Спасибо, брат. Ты всегда умел правильно сказать.",
          },
        ],
      },
      {
        text: "Отмахнуться: «Разберёшься сам»",
        isCorrect: false,
        feedback: [
          { speaker: "Саша", text: "Ну это твоя жизнь, сам думай." },
          {
            speaker: "Дима",
            mood: "Грустный",
            text: "Понятно… Я думал, мы ближе друг к другу.",
          },
        ],
      },
    ],
  },
  {
    id: 12,
    age: 23,
    location: "Москва, офис Лемана Тех",
    background: lemanTechOffice,
    speakers: ["Саша", "Карина"],
    dialogue: [
      {
        speaker: "Карина",
        text: "Саша, подготовь, пожалуйста, выгрузку по рукам. Успеешь до итогов спринта?",
        position: "left",
      },
      { speaker: "Саша", text: "Да, конечно.", position: "right" },
      {
        speaker: "Карина",
        text: "На тебя можно положиться?",
        position: "left",
      },
      { speaker: "Саша", text: "Я постараюсь.", position: "right" },
    ],
    choices: [
      {
        text: "Сделать вовремя",
        isCorrect: true,
        feedback: [
          {
            speaker: "Карина",
            text: "Прекрасная работа, Саша! Ты растешь. На межборде обсудим, как тебе дорасти до руководителя.",
          },
        ],
      },
      {
        text: "Отвлечься на другие задачи и пропустить срок",
        isCorrect: false,
        feedback: [
          {
            speaker: "Карина",
            text: "Саша, я разочарована. Больше не подставляй наш домен.",
          },
        ],
      },
    ],
  },
  {
    id: 13,
    age: 24,
    location: "Санкт-Петербург, ЖК «Стрижи»",
    background: final,
    speakers: ["Саша"],
    dialogue: [
      {
        speaker: "",
        text: "Саша возвращается домой после насыщенного дня. Накануне своего дня рождения Саша, как правило, готовит пост для своего телеграм-канала, выбирая фотографии самых ярких моментов прошедшего года. «Неужели мне больше никогда не будет 23?» – печатают пальцы по клавиатуре телефона.",
        position: "right",
      },
      {
        speaker: "",
        text: "Листая фотопленку, Саша понимает: год, да и вся жизнь, проходят не зря. У него было столько классных моментов, а впереди будет еще больше. Это значит, что он все делает правильно.",
      },
    ],
    choices: [
      {
        text: "Далее",
        isCorrect: true,
        feedback: [],
      },
    ], // нет выбора — просто завершение
  },
];
