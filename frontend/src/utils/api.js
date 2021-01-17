import axios from 'axios';

const API_GET = async (resourse) => {
  return await axios
    .get(`${process.env.REACT_APP_API_URL}/${resourse}`, {
      headers: {
        'Content-Type': 'application/json',
        timeOffset: new Date().getTimezoneOffset(),
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error.response;
    });
};

const API_POST = async (resourse, body) => {
  return await axios
    .post(`${process.env.REACT_APP_API_URL}/${resourse}`, body, {
      headers: {
        'Content-Type': 'application/json',
        timeOffset: new Date().getTimezoneOffset(),
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error.response;
    });
};

const API_PATCH = async (resourse, body) => {
  return await axios
    .patch(`${process.env.REACT_APP_API_URL}/${resourse}`, body, {
      headers: {
        'Content-Type': 'application/json',
        timeOffset: new Date().getTimezoneOffset(),
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error.response;
    });
};

const API_DELETE = async (resourse, body) => {
  return await axios
    .delete(`${process.env.REACT_APP_API_URL}/${resourse}`, {
      headers: {
        'Content-Type': 'application/json',
        timeOffset: new Date().getTimezoneOffset(),
      },
      data: body,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error.response;
    });
};

export { API_GET, API_POST, API_PATCH, API_DELETE };
