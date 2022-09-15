import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { telegrambotModule } from './share/telegram-bot/telegram-bot.module';
import { TriggerMessModule } from './trigger-mess/trigger-mess.module';

@Module({
  imports: [TriggerMessModule, telegrambotModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
