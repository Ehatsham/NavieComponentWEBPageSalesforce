import { LightningElement, track, wire, api } from 'lwc';
import fetchAccount from '@salesforce/apex/homeOrgClass.fetchAccount';
export default class acountList extends LightningElement {
    @track Accounts;
    @track Error;
    @api greeting;
    @wire(fetchAccount)
    wiredData({ error, data }) {
        if (data) {
            this.Accounts = data;
        }
        if (error) {
            this.Error = error;
        }
    }

}