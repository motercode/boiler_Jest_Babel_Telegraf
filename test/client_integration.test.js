import {runIntegrationTest} from './integrationTestRunner.js'
// clase a testear
import { MyBot } from '../src/myBot.js';



const aBot = new MyBot();
aBot.launch();



(async () => {
  let resultMessage = [];
  resultMessage.push(await runIntegrationTest( "ping","pong", 0));
  resultMessage.push(await runIntegrationTest( "yes","no", 0));

  console.log(resultMessage);
  process.exit(1);

})(); 

