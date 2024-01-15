const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const fullNameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)+$/;

export const checkValidData = (email, password, fullName = null) => {
    // const isValidEmail = email && email.match(emailRegex);
    if (fullName !== null) {
        const isValidFullName = fullNameRegex.test(fullName);
        if (!isValidFullName) {
            return "You are supposed to enter your firstName as well as lastName";
        }
    }
    const isValidEmail = email && emailRegex.test(email);

    if (!isValidEmail) {
        return "Email is not a valid one!"
    }
    const isValidPassword = password && passwordRegex.test(password);
    if (!isValidPassword) {
        return "Password should be of min 8 size with atleast 1 number, 1 letter, 1 special character";
    }
    return null;
}