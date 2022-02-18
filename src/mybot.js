import { Telegraf } from 'telegraf';
import 'dotenv/config'

class MyBot{
    constructor(){
        this.bot = new Telegraf(process.env.BOT_TOKEN);
        this.registreCommands();
    }


    launch(){
        this.bot.launch();
    }

    registreCommands(){
        this.bot.on('text', (ctx) => {        
            // Using context shortcut
            ctx.reply(`pong`)
          })
    }

  

}

export { MyBot };