const baseUrl = 'https://us-central1-reckon-b5a4a.cloudfunctions.net/poultry/';

export default {
  BASE: `${baseUrl}`,
  SIGNIN: `${baseUrl}user/signin`,

  SIGNUP: `${baseUrl}user/signup`,
  VERIFY: `${baseUrl}user/verify`,
  UPDATE: `${baseUrl}user/update`,
  RESET_PASSWORD: `${baseUrl}user/password/reset?`,
  FORGOT_PASSWORD: `${baseUrl}user/password/forgot`,
  VERIFY_EMAIL: `${baseUrl}user/email/verify?`,
  GET_EMAIL_VERIFICATION_LINK: `${baseUrl}user/email/send`,
  ADD_FISH: `${baseUrl}`,
  DELETE_FISH: `${baseUrl}`, // id
  UPDATE_FISH: `${baseUrl}`, // id
  GET_FISHES: `${baseUrl}`,
};
