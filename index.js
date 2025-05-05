require('dotenv').config();
const { Telegraf } = require('telegraf');
const setupStartCommand = require('./modules/startCommand');
const setupInlineActions = require('./modules/inlineActions');
const handleNewChatMembers = require('./modules/newChatMembers');

const bot = new Telegraf(process.env.BOT_TOKEN);

// Setup bot commands and actions
setupStartCommand(bot);
setupInlineActions(bot);
handleNewChatMembers(bot);

// Launch the bot
bot.launch();
console.log('Bot is working');

// const mainMenu = Markup.keyboard([
//     ['🏋️‍♂️ Тренировки', '🍏 Питание'],
//     ['📊 Прогресс', '⚙️ Настройки']
//   ]).resize();
  
  // bot.start((ctx) => {
  //   ctx.reply('Привет! Я твой фитнес-бот. Выбери действие:', mainMenu);
  // });

  // // Обработчик для кнопки "Тренировки"
  // bot.hears('🏋️‍♂️ Тренировки', (ctx) => {
  //   ctx.reply('Вот твои тренировки на сегодня: \n1. Приседания\n2. Жим лёжа\n3. Подтягивания');
  // });
  
  // // Обработчик для кнопки "Питание"
  // bot.hears('🍏 Питание', (ctx) => {
  //   ctx.reply('Вот советы по питанию на сегодня: \n1. Больше белка\n2. Меньше сахара\n3. Достаточно воды');
  // });