import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';

import { TRELLO_APP_DATABASE_URL } from '../database.connection';

@Module({
  imports: [
    TasksModule,
    MongooseModule.forRoot(TRELLO_APP_DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })],
  controllers: [],
  providers: [AppService],
})
export class AppModule { }
