//EJEMPLO COMO MOCKEAR UNA CLASE 

import { ClassWhoUseMockedClass } from '../src/classes/classWhoUseMockedClass.js';




// importamos la clase a mockear , el constructor , y los metodos dinamicos
import { ClassToBeMocked , theclassConstructorMock , normalMethodMock} from '../src/classes/classToBeMocked.js';
jest.mock('../src/classes/classToBeMocked.js');

// es bien , limpiar los mocks antes de cada test para asegurarse el comportamiento cada vez
beforeEach(() => {
    theclassConstructorMock.mockClear();
    normalMethodMock.mockClear();
    ClassToBeMocked.staticMethod.mockClear();
    // theExpenseConstructor.mockRestore();
  });





it('should be mocked after a jest.mock ',() => {
    expect(ClassWhoUseMockedClass.consumerConstructor().itsMocked).toBeTruthy();
    expect(ClassWhoUseMockedClass.consumerMethod()).toBe('method mocked');   
    expect(ClassWhoUseMockedClass.consumerStaticMethod()).toBe('staticMethod mocked');
})
it('should be an spy on all methods ',() => {
 
    ClassWhoUseMockedClass.consumerConstructor();
    expect(theclassConstructorMock).toHaveBeenCalledWith('one Arg','second Arg');
    ClassWhoUseMockedClass.consumerMethod();
    expect(normalMethodMock).toHaveBeenCalledWith('one Arg','second Arg');
    ClassWhoUseMockedClass.consumerStaticMethod();
    expect(ClassToBeMocked.staticMethod).toHaveBeenCalledWith('one Arg','second Arg');
})
it('methods not defined on the file __mocks__ are not on the mock so throw error',() => {
    expect(() => {
        ClassToBeMocked.staticMethodNotDefinedMocked();
      }).toThrow();

      const aclass= new ClassToBeMocked();
      expect(() => {
        aclass.normalMethodNotDefinedMocked();
      }).toThrow();
     

})


describe('we can change mock behavior on each test',() => {
it('changgin the return of the normal method just once',() => {
    normalMethodMock.mockReturnValueOnce('changed only here');
    let result = ClassWhoUseMockedClass.consumerMethod();

    expect(result).not.toBe('method mocked');   
    expect(result).toBe('changed only here');

    result = ClassWhoUseMockedClass.consumerMethod();

    expect(result).toBe('method mocked');   
    expect(result).not.toBe('changed only here');  
})
it('1/2 if you change the implementation or return value without ..Once functions you cannot return to the previous implementation , you need to define it (see spyon)',()=>
{
    normalMethodMock.mockReturnValue('changed only here');
    let result = ClassWhoUseMockedClass.consumerMethod();

    expect(result).not.toBe('method mocked');   
    expect(result).toBe('changed only here');

})
it('2/2 should not propagate the behaviour on next test even if we do not use ..Once fuctions because we got a before each clear',()=>
{
    normalMethodMock.mockReturnValue('method mocked');
    let result = ClassWhoUseMockedClass.consumerMethod();

    expect(result).toBe('method mocked');   
    expect(result).not.toBe('changed only here');;  
})
it('same way to modify static methods',()=>{
    ClassToBeMocked.staticMethod.mockReturnValueOnce('method Static mocked different');
    let result = ClassWhoUseMockedClass.consumerStaticMethod();

    expect(result).toBe('method Static mocked different');   
    ClassToBeMocked.staticMethod.mockImplementationOnce(()=>{
        //do some stuff
        return 'method Static mocked different';
    });
    result = ClassWhoUseMockedClass.consumerStaticMethod();

    expect(result).toBe('method Static mocked different');   
    ClassToBeMocked.staticMethod.mockImplementationOnce(()=>{
        throw 'the error';
        return ;
    });
   
    expect(() => {
        ClassWhoUseMockedClass.consumerStaticMethod();
      }).toThrow();
   
    })
})


describe('we can change the mock  constructor ',() => {

    it('we can implenenet a new mock constructor',() => {
      //remember to add the methods if you want to ese it on this test
        const anotherTypeConstructior = {
            money: 44,
            concept: 'sardinas',
            date: '25/03/2022',
            id: 32, 
            normalMethod: normalMethodMock
        };
        theclassConstructorMock.mockImplementationOnce(()=>{
            return anotherTypeConstructior;
        });
    
        const result = ClassWhoUseMockedClass.consumerConstructor();
    
        expect(result.money).toEqual(44);
        expect(result.itsMocked).not.toBeDefined();
        expect(ClassWhoUseMockedClass.consumerMethod()).toBe('method mocked');
    })
    it('we can implenenet a new mock constructor',() => {
        
          const result = ClassWhoUseMockedClass.consumerConstructor();
      
          expect(result.money).not.toEqual(44);
          expect(result.itsMocked).toBeDefined();
      })
   
})






