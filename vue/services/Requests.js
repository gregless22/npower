const axios = require('axios')


const apiClient = axios.create({
  baseURL: '',
  timeout: 1000,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {

  postSurvey(form) {
    return apiClient.post('/survey', form)
  },

  postContact(contact) {
    return apiClient.post('/contact', contact)
  }

}

