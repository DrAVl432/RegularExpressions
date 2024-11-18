class Validator {
    validateUsername(username) {
      const regex = /^(?!.*\d{4})[a-zA-Z][a-zA-Z0-9-_]*[a-zA-Z]$/;
      return regex.test(username);
    }
  }
  export default  Validator;
