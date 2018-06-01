import * as utils from '../utils/utils';
export default class User {
    constructor(userOptions) {
        if (userOptions) {
            if(!userOptions.displayName && !userOptions.name) throw new Error('Cannot create new user without displayName');
            if(!userOptions.email) throw new Error('Cannot create new user without email');

            this.userId = utils.getId();
            this.name = userOptions.displayName || userOptions.name;
            this.email = userOptions.email;
            this.createdDate = userOptions.createdDate || new Date();
        }
    }
}


