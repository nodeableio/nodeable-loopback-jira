"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseResource_1 = require("./baseResource");
/**
 * IssueSubtask
 *
 * @constructor IssueSubtask
 * @property {IConnector} connector the jira connector instance
 */
class IssueSubtask extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         *
         *
         * @method canMoveSubTask
         * @memberOf IssueSubtask#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.issueIdOrKey issueIdOrKey
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.canMoveSubTask = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('canMoveSubTask', 'GET', 'rest/api/2/issue/:issueIdOrKey/subtask/move', options, callback);
        };
        /**
         * Returns an issue's subtask list
         *
         * @method getSubTasks
         * @memberOf IssueSubtask#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.issueIdOrKey issueIdOrKey
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getSubTasks = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('getSubTasks', 'GET', 'rest/api/2/issue/:issueIdOrKey/subtask', options, callback);
        };
        /**
         * Reorders an issue's subtasks by moving the subtask at index "from"
         * to index "to".
         *
         * @method moveSubTasks
         * @memberOf IssueSubtask#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.issueIdOrKey issueIdOrKey
         * @param {string} options.current current
         * @param {string} options.original original
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.moveSubTasks = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('moveSubTasks', 'POST', 'rest/api/2/issue/:issueIdOrKey/subtask/move', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.IssueSubtask = IssueSubtask;
