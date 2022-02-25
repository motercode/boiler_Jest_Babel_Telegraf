import fs from 'fs';

import { ClassWhoUseMockedClass } from '../src/classes/classWhoUseMockedClass.js';
jest.mock('fs');


it('readfilesync can be mocked on the module fs',()=>{
    fs.readFileSync.mockReturnValueOnce('mocked fs read');
    const result = ClassWhoUseMockedClass.fsConsumerSync('./fileToRead.json');
    expect(result).toBe('mocked fs read');
})