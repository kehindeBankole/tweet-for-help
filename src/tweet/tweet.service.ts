import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import * as Twit from 'twit';

@Injectable()
export class TweetService {
  private readonly client: Twit;
  constructor() {
    this.client = new Twit({
      consumer_key: '...',
      consumer_secret: '...',
      access_token: '...',
      access_token_secret: '...',
    });
  }
  @Cron('*/3 * * * * *')
  async postTweet(): Promise<void> {
    try {
      await this.client.post('statuses/update', {
        status:
          "Ridwan's acts of kindness is spoken  widely of amongst his friends and family. This 'kindness' shouldn't leave us yet. #HelpSaveRidwan",
      });
      console.log('Tweeted successfully.');
    } catch (error) {
      console.error('Error tweeting:', error);
    }
  }
}
