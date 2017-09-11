import debug from 'debug';
import _ from 'lodash';



export default class Debugger{
    static get debuggable(){
        return debug.enabled;
    }
    static set debuggable(enabled){
        if (!_.isBoolean(enabled)){
            enabled = false;
        }
        debug.enabled = enabled;
    }
    static getDebuggerInstance(name = 'debug'){
        if (!_.isString(name)){
            name = 'debug';
        }
        return debug(name);
    }
}