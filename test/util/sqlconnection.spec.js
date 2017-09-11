import {getSqliteConnection} from "../../src/util/sqlconnection";

const sqlLite = getSqliteConnection(`${__dirname}/../../src/data/polls.sqlite`);
describe('SqlConnection Util test',()=>{
    describe('#getSqliteConnection',()=>{
       it('should get valid connection',()=>{
           return sqlLite.authenticate()
               .then(()=>{
               expect(true).toEqual(true);
               })
               .catch((err)=>{
               expect(err).toBeNull();
               });
       });
    });
});
