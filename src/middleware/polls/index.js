import _ from 'lodash';
import Validations from '../../util/validation';
import ResponseFormatter from '../../util/responseformatter';
const NEW_REQUIRED_FIELDS = ['title','description'];


export const validateNew = (req,res,next)=>{
  let body = req.body;
  let error = Validations.ValidateBody(body,NEW_REQUIRED_FIELDS);
  if (error){
    console.log('ERROR!');
      ResponseFormatter.ResponseErrors(res,error,400);
  }else {
    console.log('NO ERROR!');
      next('route');
  }
};