const Utils = {
  parseRequestURL: () => {
    const url = document.location.hash.slice(1).toLowerCase() || '/';
    const r = url.split('/');
    const request = {
      resource: null,
    };
    request.resource = r[0];
    return request;
  },
  checkTokenExpTime: (tokenExpTime) => {
    if ( tokenExpTime > Date.now() ) {
      console.log('token is alive');
      return 'alive';
    } else {
      console.log('token is expired');
      return 'expired';
    }
  }
};

export default Utils;
