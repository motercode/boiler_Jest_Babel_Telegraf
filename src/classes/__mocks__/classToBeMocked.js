// METODO DINAMICO
export const normalMethodMock = jest.fn().mockImplementation(()=>{
    return 'method mocked'
});



// CONSTRUCTOR
// creamos un resultado tipo del constructor con los metodos mockeados como propiedades del objeto
const defaultObject = {
                  itsMocked: true,
                  normalMethod: normalMethodMock
              };
// creamos la funcion constructora de la clase que devuelve el objeto tipo 
const classConstructorMock = jest.fn().mockImplementation(() => {
                return  defaultObject;
            });
// metemos el constructor   a la classe mockeada mediante spyon y este ya mete todos los demas metodos mockeados
// CONSTRUCTOR


const ClassToBeMocked = jest.fn();
// tambien exportamos el constructor para poderlo cambiar en los test  
export const theclassConstructorMock =  jest.spyOn(ClassToBeMocked.prototype, 'constructor')
  .mockImplementation(classConstructorMock);




// STATIC METHODS
  ClassToBeMocked.staticMethod= jest.fn().mockReturnValue('staticMethod mocked');

  //EXPORTAS LA CLASE
  export { ClassToBeMocked}   
  