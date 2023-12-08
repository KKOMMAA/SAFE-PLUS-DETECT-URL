import axios from 'axios';

export async function getCheckFroudAccount(fraudAccount) {
  const data = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/api/url/malicious-check`,
    {
      url: fraudAccount,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return data;
}
