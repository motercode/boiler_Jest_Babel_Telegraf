import { TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";
import input from "input";
import 'dotenv/config'

// clase a testear
import { MyBot } from '../src/mybot.js';



const apiId = parseInt(process.env.API_ID);
const apiHash = process.env.API_HASH;
const stringSession = new StringSession(process.env.STRING_SESSION); // fill this later with the value from session.save()


let resultMessage=[];
const timeoutsecs = 3;

const messageExpected = "pong";
const intakeMessage = "ping";
let aBot = new MyBot();
aBot.launch();



(async () => {
  console.log("Loading integration test...");
  const client = new TelegramClient(stringSession, apiId, apiHash, {
    connectionRetries: 5,
  });
  await client.start({
    phoneNumber: async () => await input.text("Please enter your number: "),
    password: async () => await input.text("Please enter your password: "),
    phoneCode: async () =>
      await input.text("Please enter the code you received: "),
    onError: (err) => console.log(err),
  });
  // console.log("You should now be connected.");
  // console.log(client.session.save()); // Save this string to avoid logging in again
  
  

  let lastmessage=undefined;
  let timeOut = false;

  await client.sendMessage(process.env.NAME_OF_BOT_CHANNEL, { message: intakeMessage });
  const sentIntakeMessageTime =  Date.now();
  let testeando = 0
  while (lastmessage!=messageExpected && !timeOut) {
    timeOut = (( Date.now() - sentIntakeMessageTime) > (timeoutsecs*1000));
    lastmessage = (await client.getMessages(process.env.NAME_OF_BOT_CHANNEL,{}))[0];
   
  }

  if(lastmessage.message=messageExpected)
  {
     resultMessage.push('el test ha sido correcto');
  }
  else{
    resultMessage.push(`timeout no ha contestado el bot o ha tardado mas de ${timeoutsecs} segundos `);
  }


  console.log(resultMessage);
  process.exit(1);

})(); 



