import { TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";
import input from "input";
import 'dotenv/config'

// clase a testear
import { MyBot } from '../src/myBot.js';



const apiId = parseInt(process.env.API_ID);
const apiHash = process.env.API_HASH;
const stringSession = new StringSession(process.env.STRING_SESSION); // fill this later with the value from session.save()


let resultMessage=[];
const timeoutsecs = 3;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms!=0?ms*1000:timeoutsecs*1000));



const aBot = new MyBot();
aBot.launch();



(async () => {
  
  await runIntegrationTest( "ping","pong", 0);
  await runIntegrationTest( "yes","no", 0);

  console.log(resultMessage);
  process.exit(1);

})(); 


async function runIntegrationTest(intakeMessage,messageExpected,especificDelay = 0){

  let answerMessages = [];
  let newMessages = false;
  let initialMessagesLength=0;
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
  



  
  await client.sendMessage(process.env.NAME_OF_BOT_CHANNEL, { message: intakeMessage });
  initialMessagesLength = (await client.getMessages(process.env.NAME_OF_BOT_CHANNEL,{})).length;  
  await delay(especificDelay);
  answerMessages = await client.getMessages(process.env.NAME_OF_BOT_CHANNEL,{});  
  newMessages = (initialMessagesLength != answerMessages.length);

  if(!newMessages)
  {
    resultMessage.push(`el bot no ha respondido en el tiempo especificado ${especificDelay?especificDelay:timeoutsecs} segundos`);
  }else if( answerMessages[0].message==messageExpected)
  {
     resultMessage.push('el test ha sido correcto');
  }
  else{
    resultMessage.push(`el bot ha respondido ${answerMessages[0].message} y se esperaba ${messageExpected} `);
  }


  return resultMessage;
}
