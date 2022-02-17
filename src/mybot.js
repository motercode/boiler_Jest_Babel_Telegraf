import { Telegraf } from 'telegraf';

class MyBot{
    constructor(){
        this.bot = new Telegraf('fake');
    }


    launch(){
        this.bot.launch();
    }
}

export { MyBot };