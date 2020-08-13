 import { getAccountList } from './account-list.api';
 import { addAccountRows } from './account-list.helpers';
 import { mapAccountListApiToVm } from './account-list.mappers';

 /*
 Account {
       id: string
       iban: string
       name: string
       balance: string // de number a string €
       lastTransaction: string //string a DD/MM/YYYY
        }
 */

 getAccountList().then(accountList => {
     //console.log({ accountList });
     const vmAccountList = mapAccountListApiToVm(accountList);
     addAccountRows(vmAccountList);
 });