export const checkRegisterData = (data) => {
    if (!data.firstname) {
        return "Please input firstname"
    } else if (!data.lastname) {
        return "Please input lastname"
    } else if (!data.username) {
        return "Please input username"
    } else if (data.username.length < 6) {
        return "Username length have to more than 6"
    } else if (!data.email || ValidateEmail(data.email) === false) {
        return "Please input correct email."
    } else if (!data.phone) {
        return "Please input phonenumber"
    } else if ((new Date().getFullYear() - new Date(data.birthday).getFullYear() <= 18) || !data.year18) {
        return "You age have to more than 18"
    } else if (!data.state) {
        return "Please input state"
    } else if (!data.city) {
        return "Please input city"
    } else if (!data.postcode) {
        return "Please input postcode"
    } else if (!data.password) {
        return "Please input correct password."
    } else if (data.password.length < 6) {
        return "Password length have to more than 6."
    } else if (data.password !== data.repassword) {
        return "Password and confirm password is not matched."
    } else if (data.username === data.password) {
        return "Username and password don't have to match."
    } else if (!data.file.length) {
        return "Please select document file"
    }
    return true
}

export const checkProfileData = (data) => {
    if (!data.firstname) {
        return "Please input firstname"
    } else if (!data.lastname) {
        return "Please input lastname"
    } else if (!data.username) {
        return "Please input username"
    } else if (data.username.length < 6) {
        return "Username length have to more than 6"
    } else if (!data.email || ValidateEmail(data.email) === false) {
        return "Please input correct email."
    } else if (!data.phone) {
        return "Please input phonenumber"
    } else if (new Date().getFullYear() - new Date(data.birthday).getFullYear() <= 18) {
        return "You age have to more than 18"
    } else if (!data.state) {
        return "Please input state"
    } else if (!data.city) {
        return "Please input city"
    } else if (!data.postcode) {
        return "Please input postcode"
    }
    return true
}

export const checkLoginData = (data) => {
    if (!data.email) {
        return "Please input user detail"
    } else if (!data.password) {
        return "Please input correct password."
    }
    return true
}

function ValidateEmail(mail) {
    // eslint-disable-next-line
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true
    }
    return false
}