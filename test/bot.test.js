import { MyBot } from '../src/mybot.js';
import { Telegraf } from 'telegraf';


describe('it works ',() => {
    test('its a telegraf bot',() => {
        let aBot = new MyBot();
        expect(aBot.bot).toBeDefined();
        expect(aBot.bot).toBeInstanceOf(Telegraf);

    })
})