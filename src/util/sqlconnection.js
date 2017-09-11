import Sequalize from 'sequelize';


export const getSqliteConnection = (filePath = '')=>{
    console.log(filePath);
  return new Sequalize({
     storage : filePath,
      dialect : 'sqlite'
  });
};