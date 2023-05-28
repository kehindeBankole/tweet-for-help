import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetModule } from './tweet/tweet.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [TweetModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
