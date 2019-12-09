import { LightningElement, api, track, wire } from 'lwc';
import fetchContacts from '@salesforce/apex/homeOrgClass.fetchContacts';

export default class relatedContactsInfo extends LightningElement {
    constructor() {
        super();
        alert("related contact tem[plate is operated ");
    }
    @api AccountInfo;
    @track selectId;
    @track accIdInfo;
    @track contacts;
    @track error;
    @track keyValue;
    //this.selectEvent=false;  
    connectedCallback() {
        this.keyValue = "first event";
    }
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