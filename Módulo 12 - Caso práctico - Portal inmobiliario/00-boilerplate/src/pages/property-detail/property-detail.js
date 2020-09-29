import { history, routes } from '../../core/router';
import { getPropertiesList } from '../property-list/property-list.api';
import { setPropertyValues } from './property-detail.helpers';
import { getEquipmentsList, insertContact } from './property-detail.api';
import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors } from '../../common/helpers';
import { formValidation } from './property-detail.validation';

const params = history.getParams();

getPropertiesList().then((propertiesList) => {
    const property = propertiesList[params.id - 1];
    property.rooms = `${property.rooms} habitaciones`;
    property.squareMeter = `${property.squareMeter} m2`;
    property.bathrooms = `${property.bathrooms} baños`;
    property.price = `${property.price} €`;

    getEquipmentsList().then(equipmentList => {
        const equipArray = [];
        property.equipmentIds.forEach(eq => {
            equipmentList.forEach(item => {
                if (item.id === eq) {
                    equipArray.push(item.name)
                }
            })
        });
        property.equipment = equipArray;
        setPropertyValues(property);
    });
});

let formulario = {
    email: '',
    message: ''
};

onUpdateField('email', (event) => {
    const value = event.target.value;
    formulario = {
        ...formulario,
        email: value
    };

    formValidation.validateField('email', formulario.email).then(result => {
        onSetError('email', result);
    });
});

onUpdateField('message', (event) => {
    const value = event.target.value;
    formulario = {
        ...formulario,
        message: value
    };

    formValidation.validateField('message', formulario.message).then(result => {
        onSetError('message', result);
    });
});

onSubmitForm('contact-button', () => {
    formValidation.validateForm(formulario).then(result => {
        onSetFormErrors(result);

        if (result.succeeded) {
            insertContact(formulario).then(() => { history.push(routes.propertyList) });
        }
    });
});