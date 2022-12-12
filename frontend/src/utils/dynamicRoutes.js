const {NODE_ENV, BACK_URI, FRONT_URI} = process.env.NODE_ENV;

const backUri = NODE_ENV === 'production' || NODE_ENV === 'prod'
  ? BACK_URI
  : "http://localhost:3001/";

const frontUri = NODE_ENV === 'production' || NODE_ENV === 'prod'
  ? FRONT_URI
  : 'http://localhost:3000/';

export {
  backUri,
  frontUri
};
