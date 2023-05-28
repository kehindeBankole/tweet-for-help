<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://i.postimg.cc/j2HWjqLt/2023-05-28-02-26-59.jpg" width="200" alt="Picture of ridwan when smiling when he was healthy" /></a>
</p>

## Description

The Project is a component designed to facilitate a Twitter bot that actively promotes the hashtag #HelpSaveRidwan. The primary objective of this bot is to create a trending topic on Twitter by posting tweets with the specified hashtag at a frequency of every 3 seconds. This concerted effort aims to generate awareness and gather donations for Ridwan's medical bills.

Using the NestJS framework, this project utilizes the Twit library to interact with the Twitter API. It authenticates with the Twitter platform using the provided consumer key, consumer secret, access token, and access token secret.

The main functionality of the bot lies in the tweetEvery3Seconds() method, which is executed as a scheduled task based on a cron expression of '*/3 * * * * *'. This ensures that a new tweet containing the hashtag is posted every 3 seconds.

In case of successful tweet submission, the service logs the details of the sent tweet for reference. However, in the event of any error during the process, appropriate error handling is implemented to prevent disruption and ensure smooth operation.

By automating the tweeting process at such a frequent interval, the Twitter bot endeavors to create significant visibility for the #HelpSaveRidwan hashtag, driving engagement and encouraging generous contributions towards Ridwan's medical expenses.


## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```
