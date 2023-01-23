import axios from 'axios';

export const GET = async (url,TOKEN_API) => {
  try {
    const options = {
      method: 'get',
      url: url,
      headers: {
        Authorization: TOKEN_API,
      },
    };

    const req = await axios(options);

    return req.data;
  } catch (error) {
    throw error;
  }
};

export const POST = async (url,TOKEN_API='', data = {}) => {
  try {
    const options = {
      method: 'post',
      url: url,
      data: data,
      headers: {
        Authorization: TOKEN_API,
      },
    };

    const req = await axios(options);

    return req.data;
  } catch (error) {
    throw error;
  }
};

export const PATCH = async (url,TOKEN_API='', data = {}) => {
  try {
    const options = {
      method: 'patch',
      url: url,
      data: {...data},
      headers: {
        Authorization: TOKEN_API,
      },
    };

    const req = await axios(options);

    return req.data;
  } catch (error) {
    throw error;
  }
};

export const DELETE = async (url, TOKEN_API='',data = {}) => {
  try {
    const options = {
      method: 'delete',
      url: url,
      data: {...data},
      headers: {
        Authorization: TOKEN_API,
      },
    };

    const req = await axios(options);

    return req.data;
  } catch (error) {
    throw error;
  }
};
