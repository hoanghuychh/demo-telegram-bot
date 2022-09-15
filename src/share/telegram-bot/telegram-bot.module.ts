import { Module } from '@nestjs/common';
import { TelegramBotService } from './telegramBot.service';
@Module({
    imports:[],
    controllers: [],
    providers: [ TelegramBotService],
    exports: [ TelegramBotService]
})
export class telegrambotModule { }

