import {myFunction} from '../functionalone.js';

jest.mock('../functionalone.js', () => {
    const originalModule = jest.requireActual('../functionalone.js');
  
    return {
      __esModule: true,
      ...originalModule,
      myFunction: jest.fn(),
    };
  });



export {myFunction};

    
