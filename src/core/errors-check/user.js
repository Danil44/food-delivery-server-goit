const NO_PASSWORD_MESSAGE = "Password field is required";
const NO_NAME_MESSAGE = "First name field is required";
const NO_USER_INPUT = "Fields are empty";

const checkForErrors = userInput => {
  const errorMessages = [];

  if (!userInput) {
    errorMessages.push(NO_USER_INPUT);
    return errorMessages;
  }

  if (!userInput.password) {
    errorMessages.push(NO_PASSWORD_MESSAGE);
  }
  if (!userInput.firstName) {
    errorMessages.push(NO_NAME_MESSAGE);
  }

  return errorMessages;
};

module.exports = checkForErrors;
