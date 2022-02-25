import {ClassToBeMocked} from './classToBeMocked.js';
import fs from 'fs';

class ClassWhoUseMockedClass{
    static consumerConstructor(){
        return new ClassToBeMocked('one Arg', 'second Arg');
    }
    static consumerMethod(){
        const theObject = new ClassToBeMocked();
        return theObject.normalMethod('one Arg', 'second Arg');
    }
    static consumerStaticMethod(){
       
        return ClassToBeMocked.staticMethod('one Arg', 'second Arg');
    }
    
    static fsConsumerSync(filename){ 
        return fs.readFileSync(filename)
    }

}

export {ClassWhoUseMockedClass};