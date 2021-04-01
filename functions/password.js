// A password should contain at least "n" a lowercase, a uppercase and a number
const passwordValidator = (password) => {
  var n = 2;
  var constructedRegEx =
    "^(?=(?:.*[0-9]){" +
    n +
    ",})(?=(?:.*[a-z]){" +
    n +
    ",})(?=(?:.*[A-Z]){" +
    n +
    ",})(?=(?:.*[[!@#$%^&*()_+]){" +
    n +
    ",}).+$";

  var PasswordRegEx = new RegExp(constructedRegEx, "m");

  const isValid = PasswordRegEx.test(password);

  return isValid;
};

module.exports = passwordValidator;
