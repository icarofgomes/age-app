export const API_URL = 'http://localhost:3001';
const applicationJson = 'application/json';

export const USER_POST = (body) => ({
    url: `${API_URL}/users`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': applicationJson,
      },
      body: JSON.stringify(body),
    },
  });
  