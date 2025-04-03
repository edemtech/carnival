require('dotenv').config();
const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

const mainMenu = Markup.keyboard([
    ['🏋️‍♂️ Тренировки', '🍏 Питание'],
    ['📊 Прогресс', '⚙️ Настройки']
  ]).resize();
  
  bot.start((ctx) => {
    ctx.reply('Привет! Я твой фитнес-бот. Выбери действие:', mainMenu);
  });

//   bot.start((ctx) => {
//     ctx.reply(
//       'Привет! Я твой фитнес-бот. Выбери действие:',
//       Markup.inlineKeyboard([
//         [Markup.button.callback('🏋️‍♂️ Тренировки', 'workouts')],
//         [Markup.button.callback('🍏 Питание', 'nutrition')],
//         [Markup.button.callback('📊 Прогресс', 'progress')],
//         [Markup.button.callback('⚙️ Настройки', 'settings')],
//       ])
//     );
//   });
  
  // Обработка нажатий на inline-кнопки
  bot.action('workouts', (ctx) => ctx.reply('Тренировка на сегодня: приседания, жим лёжа, подтягивания.'));
  bot.action('nutrition', (ctx) => ctx.reply('Совет по питанию: ешь больше белка и меньше сахара.'));
  bot.action('progress', (ctx) => ctx.reply('Твой прогресс: -2 кг за неделю! Отлично!'));
  bot.action('settings', (ctx) => ctx.reply('Настройки пока недоступны.'));




  
  // Обработчик для кнопки "Тренировки"
  bot.hears('🏋️‍♂️ Тренировки', (ctx) => {
    ctx.reply('Вот твои тренировки на сегодня: \n1. Приседания\n2. Жим лёжа\n3. Подтягивания');
  });
  
  // Обработчик для кнопки "Питание"
  bot.hears('🍏 Питание', (ctx) => {
    ctx.reply('Вот советы по питанию на сегодня: \n1. Больше белка\n2. Меньше сахара\n3. Достаточно воды');
  });
  
  // Запуск бота
  bot.launch();
  console.log('Бот запущен');