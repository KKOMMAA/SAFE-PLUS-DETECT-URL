import axios from 'axios';

export async function getCheckFroudAccount() {
  const data = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/url/malicious-check`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data;
}
