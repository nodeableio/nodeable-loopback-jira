import {baseResource} from './baseResource';

/**
 * ProjectCategory 
 *
 * @constructor ProjectCategory
 * @property {IConnector} connector the jira connector instance
 */

export class ProjectCategory extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Create a project category via POST.
     *
     * @method create
     * @memberOf ProjectCategory#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.name name 
     * @param {string} options.description description 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    create = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('create','POST','rest/api/2/projectCategory',options,callback)
    };
    
    /**
     * Delete a project category.
     *
     * @method deleteById
     * @memberOf ProjectCategory#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    deleteById = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('deleteById','DELETE','rest/api/2/projectCategory/:id',options,callback)
    };
    
    /**
     * Returns all project categories
     *
     * @method find
     * @memberOf ProjectCategory#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    find = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('find','GET','rest/api/2/projectCategory',options,callback)
    };
    
    /**
     * Contains a representation of a project category in JSON format.
     *
     * @method getProjectCategoryById
     * @memberOf ProjectCategory#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getProjectCategoryById = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('getProjectCategoryById','GET','rest/api/2/projectCategory/:id',options,callback)
    };
    
    /**
     * Modify a project category via PUT. Any fields present in the PUT will override existing values. As a convenience, if a field
     * is not present, it is silently ignored.
     *
     * @method update
     * @memberOf ProjectCategory#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.id id 
     * @param {string} options.name name 
     * @param {string} options.description description 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    update = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('update','PUT','rest/api/2/projectCategory/:id',options,callback)
    };
    

}
