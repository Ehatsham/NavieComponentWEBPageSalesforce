import { LightningElement, track, wire, api } from 'lwc';
import fetchAccount from '@salesforce/apex/homeOrgClass.fetchAccount';
export default class acountList extends LightningElement {
    @track Accounts;
    @api AccountInfo;
    @track Error;
    @api greeting;
    @track AccId;
    @track Audio;
    @wire(fetchAccount)
    wiredData({ error, data }) {
        if (data) {
            this.Accounts = data;
            this.AccId = data;
        }
        if (error) {
            this.Error = error;
            this.Audio = data;
        }
    }

    showContact(event) {
        event.preventDefault();
        this.AccId = event.target.key;
        console.log(this.AccId);
        const specificAccInfo = new CustomEvent('spfAccInfo', {
            AccountId: this.AccId,

        });
        this.dispatchEvent(specificAccInfo);
        alert('Ehatsham Ahamed');
    }

}