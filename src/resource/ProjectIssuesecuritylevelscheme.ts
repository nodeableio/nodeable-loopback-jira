import {baseResource} from './baseResource';

/**
 * ProjectIssuesecuritylevelscheme Resource for associating permission schemes and projects.
 *
 * @constructor ProjectIssuesecuritylevelscheme
 * @property {IConnector} connector the jira connector instance
 */

export class ProjectIssuesecuritylevelscheme extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Returns the issue security scheme for project.
     *
     * @method getIssueSecurityScheme
     * @memberOf ProjectIssuesecuritylevelscheme#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.projectKeyOrId projectKeyOrId 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getIssueSecurityScheme = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('getIssueSecurityScheme','GET','rest/api/2/project/:projectKeyOrId/issuesecuritylevelscheme',options,callback)
    };
    

}
