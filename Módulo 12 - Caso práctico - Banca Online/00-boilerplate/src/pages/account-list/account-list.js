 import { getAccountList } from './account-list.api';
 import { addAccountRows } from './account-list.helpers';
 import { mapAccountListApiToVm } from './account-list.mappers';
 import { onUpdateField } from '../../common/helpers';
 import { history } from '../../core/router';

 /*
 Account {
       id: string
       iban: string
       name: string
       balance: string // de number a string €
       lastTransaction: string //string a DD/MM/YYYY
        }
 */
 const setEvents = accountList => {
     accountList.forEach(account => {
         onUpdateField(`select-${account.id}`, event => {
             const route = event.target.value;
             history.push(route);
         });
     });
 };


 getAccountList().then(accountList => {
     //console.log({ accountList });
     const vmAccountList = mapAccountListApiToVm(accountList);
     addAccountRows(vmAccountList);
     setEvents(vmAccountList);

 });