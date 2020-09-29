import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationComp = {
    field: {
        email: [Validators.email, Validators.required],
        message: [Validators.required]

    }
};

export const formValidation = createFormValidation(validationComp);