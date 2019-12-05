public with sharing class homeOrgClass {
    @AuraEnabled(Cacheable=true)
    public static list<sobject> fetchAccount() {
      list<Account> accList=new list<Account>();
      accList=[Select Name,Industry,AnnualRevenue,Phone from Account ];
      return accList;
    }
    @AuraEnabled(Casheable=true)
    public static list<SObject> fetchContacts(string AccId){
      list<contact> listCon=[Select name,id,email,phone,address from contact where accountId=:AccId];
      return listCon;
    } 
}
 