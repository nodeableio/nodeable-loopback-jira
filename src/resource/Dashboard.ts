import {baseResource} from './baseResource';

/**
 * Dashboard The /dashboard resource.
 *
 * @constructor Dashboard
 * @property {IConnector} connector the jira connector instance
 */

export class Dashboard extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Returns a single dashboard.
     *
     * @method findById
     * @memberOf Dashboard#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    findById = async options => {

        return this.makeRequest('findById','GET','rest/api/2/dashboard/:id',options)
    };
    
    /**
     * Returns a list of all dashboards, optionally filtering them.an optional filter that is applied to the list of dashboards. Valid values include
     *                        "favourite" for returning only favourite dashboards, and "my" for returning
     *                        dashboards that are owned by the calling user.the index of the first dashboard to return (0-based). must be 0 or a multiple of
     *                        maxResultsa hint as to the the maximum number of dashboards to return in each call. Note that the
     *                        JIRA server reserves the right to impose a maxResults limit that is lower than the value that a
     *                        client provides, dues to lack or resources or any other condition. When this happens, your results will be
     *                        truncated. Callers should always check the returned maxResults to determine the value that is
     *                        effectively being used.
     *
     * @method list
     * @memberOf Dashboard#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.filter&quot;favourite&quot;&quot;my&quot; filter&quot;favourite&quot;&quot;my&quot; an optional filter that is applied to the list of dashboards. Valid values include
                        "favourite" for returning only favourite dashboards, and "my" for returning
                        dashboards that are owned by the calling user.
     * @param {string} options.startAtmaxResults startAtmaxResults the index of the first dashboard to return (0-based). must be 0 or a multiple of
                        maxResults
     * @param {string} options.maxResultsmaxResultsmaxResults maxResultsmaxResultsmaxResults a hint as to the the maximum number of dashboards to return in each call. Note that the
                        JIRA server reserves the right to impose a maxResults limit that is lower than the value that a
                        client provides, dues to lack or resources or any other condition. When this happens, your results will be
                        truncated. Callers should always check the returned maxResults to determine the value that is
                        effectively being used.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    list = async options => {

        return this.makeRequest('list','GET','rest/api/2/dashboard',options)
    };
    

}
