import { Module } from '@nestjs/common';
import { telegrambotModule } from 'src/share/telegram-bot/telegram-bot.module';
import { TriggerMessController } from './trigger-mess.controller';

@Module({
  imports: [telegrambotModule],
  controllers: [TriggerMessController],
})
export class TriggerMessModule {}
