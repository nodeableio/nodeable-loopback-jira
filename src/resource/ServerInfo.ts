import {baseResource} from './baseResource';

/**
 * ServerInfo 
 *
 * @constructor ServerInfo
 * @property {IConnector} connector the jira connector instance
 */

export class ServerInfo extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Returns general information about the current JIRA server.
     *
     * @method findById
     * @memberOf ServerInfo#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.doHealthCheck doHealthCheck 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    findById = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('findById','GET','rest/api/2/serverInfo',options,callback)
    };
    

}
