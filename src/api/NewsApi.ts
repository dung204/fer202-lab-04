import axios from 'axios';

export type News = {
  id: string;
  title: string;
  imageUrl: string;
  body: string;
  createdAt: string;
};

class NewsApi {
  private readonly BASE_URL = '/api/news.json';

  async getAll() {
    const res = await axios.get<News[]>(this.BASE_URL);
    return res.data;
  }

  async getById(id: string) {
    const genres = await this.getAll();
    return genres.find((genre) => genre.id === id);
  }
}

const newsApi = new NewsApi();
export default newsApi;
