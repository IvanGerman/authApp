export const data = {
  isUserAuth: false,
  bearerToken: '',

  set setIsUserAuth(value) {
    this.isUserAuth = value;
  },

  set setBearerToken(value) {
    this.bearerToken = value;
  }
}