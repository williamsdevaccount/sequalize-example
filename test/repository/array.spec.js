import ArrayRepo from '../../src/repository/array';
let service = null;
const setup = (count = 10)=>{
    service = new ArrayRepo();
    for(let i = 0; i < count;i++){
        let data = {
            id : `${i}`,
            title : `title ${i}`
        };
        service.save(data);
    }
};
const teardown = ()=>{
    service.store = null;
    service = null;
};
describe('Array Repository Test',()=>{
    beforeEach(()=>{
        setup();
    });
    afterEach(()=>{
       teardown();
    });
    describe('#save',()=>{
       it('should save',()=>{
         return service.save({
             id : 'abc',
             title : 'hey'
         }).then((data)=>{
           expect(data).toHaveProperty('id','abc');
         });
       });
    });
    describe('#all',()=>{
        it('should get all',()=>{
            return service.all().then((data)=>{
                expect(data.length).toEqual(10);
            });
        });
    });
    describe('#get',()=>{
        it('should get one',()=>{
            return service.get('1').then((data)=>{
                expect(data).toHaveProperty('id','1');
                expect(data).toHaveProperty('title','title 1');
            });
        });
    });
});