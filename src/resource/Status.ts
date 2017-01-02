import {baseResource} from './baseResource';

/**
 * Status 
 *
 * @constructor Status
 * @property {IConnector} connector the jira connector instance
 */

export class Status extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Returns a full representation of the Status having the given id or name.
     *
     * @method findById
     * @memberOf Status#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.idOrName idOrName 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    findById = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "idOrName": args[0],
             "token": args[1]
            
        };

        return this.makeRequest('findById','GET','rest/api/2/status/:idOrName',options,callback)
    };
    
    /**
     * Returns a list of all statuses
     *
     * @method getStatuses
     * @memberOf Status#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getStatuses = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "token": args[0]
            
        };

        return this.makeRequest('getStatuses','GET','rest/api/2/status',options,callback)
    };
    

}