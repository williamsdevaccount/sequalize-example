import {getSqliteConnection} from "../../src/util/sqlconnection";
import {getModels} from "../../src/models/index";
import SQLRepository from "../../src/repository/sql";
const sqlLite = getSqliteConnection(`${__dirname}/../../src/data/polls.sqlite`);
import uuid from 'uuid';
const ID = uuid.v4();
const USER_ID = uuid.v4();
const newDataRow = (id = uuid.v4(),title = 'New Poll',description = '')=>{
  return {
   id : id,
   title : title,
   description : description,
   user_id : USER_ID
  };
};
const newRows = (length = 10)=>{
    let rows = [];
    let count = 0;
    do{
        let ID = uuid.v4();
        rows.push(newDataRow(ID,`Poll ${ID}`,`TEST POLL ${ID}`));
        count++;
    }while(count < length);
    return rows;
};
const models = getModels(sqlLite);
const repository = new SQLRepository(models.user);
const setup = (done)=>{
    return repository.sync()
        .then((valid)=>{
        if (!valid){
            throw 'Model not synced';
        }
        done();
        })
        .catch((err)=>{
        throw err;
        });
};

beforeAll(setup);

describe('SQLRepository test',()=>{
   describe('#save',()=>{
      let testData = {
          id : ID,
          title : `${ID} test`,
          description : 'hey there'
      };
      it('should save valid data',()=> {
          return repository.save(testData)
              .then((data) => {
              console.log(data);
              expect(data).toBeTruthy();
              })
              .catch((err) => {
                  console.log(err);
                  expect(err).toBeNull();
              });
      });
   });
   describe('#saveMany',()=>{
       let rows = newRows();
       it('should save a collection of rows',()=>{
          return repository.saveMany(rows)
              .then(data=>{
                  expect(data).toBeTruthy();
              })
              .catch(err=>{
                 console.error(err);
                 expect(err).toBeNull();
              });
       });
   });
});