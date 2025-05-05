const db = require('../db');

function setupInlineActions(bot) {
  bot.action('workouts', (ctx) => ctx.reply('Тренировка на сегодня: приседания, жим лёжа, подтягивания.'));
  bot.action('nutrition', (ctx) => ctx.reply('Совет по питанию: ешь больше белка и меньше сахара.'));
  bot.action('progress', (ctx) => {
    const userId = ctx.from.id;

    // Получаем прогресс пользователя из базы данных
    const query = `SELECT progress FROM users WHERE id = ?`;
    db.get(query, [userId], (err, row) => {
      if (err) {
        console.error('Ошибка при получении прогресса:', err.message);
        ctx.reply('Ошибка при получении данных.');
      } else if (row) {
        ctx.reply(`Твой прогресс: ${row.progress} очков!`);
      } else {
        ctx.reply('Данные о прогрессе не найдены.');
      }
    });
  });
  bot.action('settings', (ctx) => ctx.reply('Настройки пока недоступны.'));
  bot.action('joke', (ctx) => ctx.reply('Хуем по лбу не дало??'));
}

module.exports = setupInlineActions;