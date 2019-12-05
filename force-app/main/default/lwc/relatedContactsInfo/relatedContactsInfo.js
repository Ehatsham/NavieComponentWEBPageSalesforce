import { LightningElement, api, track, wire } from 'lwc';
import fetchContacts from '@salesforce/apex/homeOrgClass.fetchContacts';
export default class relatedContactsInfo extends LightningElement {
    @api AccountInfo;
    @track selectId;
    @track accIdInfo;
    @track contacts;
    @track error;
    //this.selectEvent=false;

    contactHandler(event) {
        this.selectEvent = true;
        this.accIdInfo = event.AccountId;

    }
    @wire(fetchContacts, { accId: '$accIdInfo' })
    wiredData(data, error) {
        if (data) {
            this.contacts = data;
        }
        if (error) {
            this.error = error;
        }
    }


}