import Container from '../../src/util/container';




describe('DI Container class test',()=>{
    let container = null;
    let obj = null;
    let string = null;
    beforeEach(()=>{
        container = new Container();
        obj = {
            test : true,
            title : 'test'
        };
        string = 'production';
    });
    afterEach(()=>{
       obj = null;
       string = null;
       container = null;
    });
    describe('#register',()=>{
       it('should register object properly',()=>{
           container.register('config',obj);
           expect(container.get('config')).toHaveProperty('title',obj.title);
       });
       it('should register object with dependencies properly',()=>{
           container.register('config',obj);
           container.register('app',{app : true},['config']);
          console.log(container.get('app'));
          expect(container.get('app')).toBeTruthy();
       });
    });
    describe('#singleton',()=>{
        it('should register singleton object properly',()=>{
            container.singleton('config',obj);
            expect(container.get('config')).toHaveProperty('title',obj.title);
        });
        it('should register object with dependencies properly',()=>{
            container.singleton('config',obj);
            container.singleton('app',{app : true},['config']);
            console.log(container.get('app'));
            expect(container.get('app')).toBeTruthy();
        });
    });
});