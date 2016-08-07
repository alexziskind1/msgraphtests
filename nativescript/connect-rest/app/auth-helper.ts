import * as tnsOauth from './tns-oauth';

export class AuthHelper {
    static logout(successPage: string, cookieDomains?: string[]) {
        return new Promise((resolve, reject)=>{
            try {
                tnsOauth.logout(cookieDomains, successPage);
                resolve();
            } catch(er) {
                reject(er);
            }
        });
    }
}