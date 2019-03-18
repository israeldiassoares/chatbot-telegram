const TelegramBot = require('node-telegram-bot-api');

const TOKEN = 'TOKEN';

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on('new_chat_members', (msg) => {
  bot.sendMessage(msg.chat.id, `Hey ! ${msg.from.first_name}, bem vindo ! `)
})
