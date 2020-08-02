function host(endpoint) {
  return `https://api.backendless.com/84E6EDE6-221A-2C65-FF9A-F641D503CD00/3EB98878-06A3-4342-B0FE-6CAFC3B2258C/${endpoint}`;
}

const endpoints = {
  REGISTER: 'users/register',
  LOGIN: 'users/login',
  TEAMS: 'data/teams',
  UPDATE_USER: 'users/',
};

export async function register(username, password) {
  return (
    await fetch(host(endpoints.REGISTER), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
  ).json();
}

export async function login(username, password) {
  return (
    await fetch(host(endpoints.LOGIN), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: username,
        password,
      }),
    })
  ).json();
}

async function setUserTeamId(userId, teamId) {
  const token = localStorage.getItem('userToken');

  if (!token) {
    throw new Error('User is not logged in');
  }

  return (
    await fetch(host(endpoints.UPDATE_USER + userId), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'user-token': token,
      },
      body: JSON.stringify({ teamId }),
    })
  ).json();
}

export async function createTeam(team) {
  const token = localStorage.getItem('userToken');

  if (!token) {
    throw new Error('User is not logged in');
  }

  const result = await (
    await fetch(host(endpoints.TEAMS), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'user-token': token,
      },
      body: JSON.stringify(team),
    })
  ).json();

  if (result.hasOwnProperty('errorData')) {
    const error = new Error();
    Object.assign(error, result);
    throw error;
  }

  const userUpdateResult = await setUserTeamId(result.ownerId, result.objectId);

  if (userUpdateResult.hasOwnProperty('errorData')) {
    const error = new Error();
    Object.assign(error, userUpdateResult);
    throw error;
  }

  return result;
}
