class ClassToBeMocked{
    constructor(...args){
        this.itsMocked = false;
    }
    normalMethod (...args){
        return 'not mocked normal method';
    }

    static staticMethod (...args){
        return 'not mocked static method';
    }

    normalMethodNotDefinedMocked()
    {
        return 'a normal method not defined on mocks'
    }
    static staticMethodNotDefinedMocked()
    {
        return 'a static method not defined on mocks'
    }
}

export { ClassToBeMocked }