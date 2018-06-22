import { UserInfo } from './b-club-user-info';
import { ChatThread } from './b-club-chat-thread';

import { uuid } from '../utils/uuid';

export class ChatMessage {
    id: string;
    sentAt: Date;
    isRead: boolean;
    author: UserInfo;
    text: string;
    thread: ChatThread;
  
    constructor(obj?: any) {
      this.id              = obj && obj.id              || uuid();
      this.isRead          = obj && obj.isRead          || false;
      this.sentAt          = obj && obj.sentAt          || new Date();
      this.author          = obj && obj.author          || null;
      this.text            = obj && obj.text            || null;
      this.thread          = obj && obj.thread          || null;
    }
  }