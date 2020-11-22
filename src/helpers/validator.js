export const validateUser = ({ name, surname, sex }) => {
    const errors = {}

    const regex = new RegExp(/^[A-Za-z]+$/)

    if(!regex.test(name) || name.trim().length < 3) {
        errors.name = 'Name should be at least 3 characters length and contain only latin characters.'
    }

    if(!regex.test(surname)) {
        errors.surname = 'Surname should contain only latin characters.'
    }

    if(!sex.length) {
        errors.sex = 'Gender is required.'
    }

    return errors;
}
