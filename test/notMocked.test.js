//EJEMPLO COMO MOCKEAR UNA CLASE 

import { ClassWhoUseMockedClass } from '../src/classes/classWhoUseMockedClass.js';




// importamos la clase a mockear , el constructor , y los metodos dinamicos
import { ClassToBeMocked , theclassConstructorMock , normalMethodMock} from '../src/classes/classToBeMocked.js';
it('should be mocked by default when we got a class under __mocks__ directory and the default automoc configuration',() => {
    expect(ClassWhoUseMockedClass.consumerConstructor().itsMocked).toBeFalsy();
    expect(ClassWhoUseMockedClass.consumerMethod()).toBe('not mocked normal method');
    expect(ClassWhoUseMockedClass.consumerStaticMethod()).toBe('not mocked static method');
})
it('methods not defined on the file __mocks__ must return normal if no mock',() => {
    expect(ClassToBeMocked.staticMethodNotDefinedMocked()).toBe('a static method not defined on mocks');
    const aclass= new ClassToBeMocked();
    expect(aclass.normalMethodNotDefinedMocked()).toBe('a normal method not defined on mocks');
})
