import { getmovementsList, getAccount } from './movements.api';
import { history } from '../../core/router';
import { mapMovementsListFromApiToVm, mapUsersListFromApiToVm } from './movements.mappers';
import { addMovementRows } from './movements.helpers';
import { onSetValues } from '../../common/helpers/element.helpers';

let account = {
    balance: '',
    iban: '',
    alias: '',
};

const params = history.getParams();
const isEditMode = Boolean(params.id);

if (isEditMode) {
    getmovementsList(params.id).then((apiMovement) => {
        const movement = mapMovementsListFromApiToVm(apiMovement);
        addMovementRows(movement);
    });
    getAccount(params.id).then((response) => {
        account = mapUsersListFromApiToVm(response);
        onSetValues((([first]) => first)(account));
    });
} else {
    getmovementsList().then((apiMovement) => {
        const movement = mapMovementsListFromApiToVm(apiMovement);
        addMovementRows(movement);
    });
}