const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Создаем или подключаемся к базе данных
const dbPath = path.resolve(__dirname, 'users.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err.message);
  } else {
    console.log('Подключение к базе данных установлено.');
  }
});

// Создаем таблицу пользователей, если её нет
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      username TEXT,
      first_name TEXT,
      last_name TEXT,
      progress INTEGER DEFAULT 0,
      level INTEGER DEFAULT 1,
      aim INGEGER DEFAULT 0,
      health INTEGER DEFAULT 0
    )
  `);
});

module.exports = db;