const ENV = process.env.REACT_APP_NODE_ENV;

const backUri = ENV === 'production' || ENV === 'prod'
  ? "https://delivery-app-backend.up.railway.app/"
  : "http://localhost:3001/";

const frontUri = ENV === 'production' || ENV === 'prod'
  ? 'https://intreguedelivery.vercel.app/'
  : 'http://localhost:3000/';

export {
  backUri,
  frontUri
};
