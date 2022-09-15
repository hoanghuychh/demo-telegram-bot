import { Body, Controller, Post } from '@nestjs/common';
import { TelegramBotService } from './../share/telegram-bot/telegramBot.service';

@Controller('trigger-mess')
export class TriggerMessController {
  constructor(private telegramBotService: TelegramBotService) {}
  @Post('/telegram')
  postMessage(@Body() body: any) {
    try {
      return this.telegramBotService.botMessage(`mess: ${body.message}`);
    } catch (error) {
      console.log('chh_log ---> postMessage ---> error', error);
    }
  }
}
