import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'f878673c100f4dd49fee041a497af1e0',
  },
});
