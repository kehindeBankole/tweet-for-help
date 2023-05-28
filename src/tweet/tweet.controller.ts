import { Controller, Post } from '@nestjs/common';
import { TweetService } from './tweet.service';

@Controller('tweet')
export class TweetController {
  constructor(private readonly tweetService: TweetService) {}
  @Post()
  postTweet() {
    return this.tweetService.postTweet();
  }
}
