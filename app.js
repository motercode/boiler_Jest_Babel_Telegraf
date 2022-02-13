import {Telegraf } from 'telegraf';

const fakeBotKey = 'fakeBotKey';

let theBot = new Telegraf(fakeBotKey);


theBot.help((ctx) => {
    ctx.reply(
      'Este bot te ayudará a gestionar tus gastos.\n escribe /gastos para ver los gastos\
      \n escribe /addgastos para empezar a meter gastos\
      \n /addgastos F ,  para finalizar de meter gastos\
      \n /borrar , borra todos tus gastos\
      \n /borra [gasto] , para borrar un solo gasto , por ejemplo borra 34  \
      \n /nuevo_usuario , crea un nuevo usuario para poder almacenar gastos',
    );
  })

  theBot.launch()