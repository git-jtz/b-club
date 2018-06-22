import { uuid } from '../utils/uuid';
import { ChatMessage } from './b-club-chat-message';

export class ChatThread {
    id: string;
    lastMessage: ChatMessage;
    name: string;
    avatarSrc: string;

    constructor(id?: string,
                name?: string,
                avatarSrc?: string) {
        this.id = id || uuid();
        this.name = name;
        this.avatarSrc = avatarSrc;
    }
}