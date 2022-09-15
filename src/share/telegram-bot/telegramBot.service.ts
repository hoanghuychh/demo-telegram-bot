const TelegramBot = require('node-telegram-bot-api');
import { Injectable } from '@nestjs/common';
const CONFIG_TELEGRAM = {
  API_TOKEN: 'your_api_token_telegram',
  CHAT_ID: 'your_chat_id_group_telegram',
};

const bot = new TelegramBot(CONFIG_TELEGRAM.API_TOKEN);
@Injectable()
export class TelegramBotService {
  botMessage(message: string) {
    bot.sendMessage(CONFIG_TELEGRAM.CHAT_ID, message);
  }
}
