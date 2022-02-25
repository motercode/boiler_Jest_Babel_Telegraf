import {runIntegrationTest , showTestResults} from './integrationTestRunner.js'
// clase a testear
import { MyBot } from '../src/myBot.js';



const aBot = new MyBot();
aBot.launch();



(async () => {
  let resultMessage = [];
  resultMessage.push(await runIntegrationTest( "ping pong test" , "ping","pong", 7));
  resultMessage.push(await runIntegrationTest( "simple error test", "yes","no", 7));
  resultMessage.push(await runIntegrationTest( "timeout test", "yes","no", 0.0001));

  showTestResults(resultMessage);
  process.exit(1);
})(); 

