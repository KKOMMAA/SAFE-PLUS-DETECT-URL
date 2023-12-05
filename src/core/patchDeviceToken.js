import axios from 'axios';

export async function patchDeviceToken(token) {
  const data = await axios.patch(
    `${process.env.REACT_APP_BASE_URL}/api/user/device-token`,
    { deviceToken: token },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return data;
}
