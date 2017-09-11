import _ from 'lodash';

export default class Validation{
    static ValidateBody(body = {},keys = []){
        let errors  = [];
        keys.forEach((key)=>{
            if (!_.has(body,key)){
                console.log('does not have key');
                 errors.push(Validation.KeyError(key));
            }
        });
        return errors.length > 0
            ? { errors: errors}
            :null
        };
    static KeyError (key){
        return Validation.Error('Bad Request',`required field : ${key} is missing in request`,400);
    }
    static Error(type = 'Server',message = 'server error',status = 500){
        return {
                type : type,
                message : message,
                status : status
        }
    }
}