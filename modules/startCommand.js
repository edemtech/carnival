const { Markup } = require('telegraf');
const db = require('../db'); // Подключаем базу данных

function setupStartCommand(bot) {
  bot.start((ctx) => {
    const user = ctx.from;
    const userId = user.id;
    const username = user.username || 'без username';
    const firstName = user.first_name || 'Пользователь';
    const lastName = user.last_name || '';

    console.log(`🚀 Новый пользователь: ${firstName} (@${username}), ID: ${userId}`);

    // Сохраняем пользователя в базу данных
    const query = `
      INSERT OR IGNORE INTO users (id, username, first_name, last_name)
      VALUES (?, ?, ?, ?)
    `;
    db.run(query, [userId, username, firstName, lastName], (err) => {
      if (err) {
        console.error('Ошибка при добавлении пользователя в базу данных:', err.message);
      } else {
        console.log('Пользователь успешно добавлен в базу данных.');
      }
    });

    ctx.reply(`Привет, ${firstName}! Добро пожаловать 👋`);

    ctx.reply(
      'Привет! Я твой фитнес-бот. Выбери действие:',
      Markup.inlineKeyboard([
        [Markup.button.callback('🏋️‍♂️ Тренировки', 'workouts')],
        [Markup.button.callback('🍏 Питание', 'nutrition')],
        [Markup.button.callback('📊 Мой прогресс', 'progress')],
        [Markup.button.callback('⚙️ Настройки', 'settings')],
        [Markup.button.callback('Алло?', 'joke')],
      ])
    );
  });
}

module.exports = setupStartCommand;