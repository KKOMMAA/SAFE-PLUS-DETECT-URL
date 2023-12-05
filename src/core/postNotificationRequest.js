import axios from 'axios';

export async function postNotificationRequest(token) {
  const data = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/api/notifications`,
    { deviceToken: token },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return data;
}
