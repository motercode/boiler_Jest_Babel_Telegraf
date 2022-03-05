import {myFunction} from '../src/functionalone.js';

jest.mock('../src/functionalone.js');



myFunction.mockReturnValueOnce('mocked');

it('should works unmocked as normal',() => {
    expect(myFunction()).toBe('mocked');
})

