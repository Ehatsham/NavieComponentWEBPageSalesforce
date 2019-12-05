/* eslint-disable no-alert */
/* eslint-disable no-console */
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
        const currentId = this.AccId;
        // eslint-disable-next-line no-unused-vars
        const dataValue = event.target.id;
        alert("dataValue is " + dataValue);
        //  this.AccId = document.getElementById('');
        alert("value of the current Account is -->" + this.AccId);
        console.log('current id value ' + currentId);
        // console.log('value of current tuple ' + this.AccId);
        const specificAccInfo = new CustomEvent('info', {
            AccountId: this.AccId,
            AccountName: dataValue.Name,
            AccountIndustry: dataValue.Industry
        });
        this.dispatchEvent(specificAccInfo);
        alert(specificAccInfo);
    }

}