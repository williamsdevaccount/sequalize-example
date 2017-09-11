export default class ResponseHelper{
    static ResponseError(res,error){
       ResponseHelper.json(res,error,error.status);

    }
    static ResponseErrors(res,errors,status = 400){
        ResponseHelper.json(res,errors,status);
    }
    static json(res,json = {},status = 200){
        res.status(status).json(json);
    }
}