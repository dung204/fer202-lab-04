import axios from 'axios';

export type Genre = {
  id: string;
  name: string;
  imageUrl: string;
};

class GenresApi {
  private readonly BASE_URL = '/api/genres.json';

  async getAll() {
    const res = await axios.get<Genre[]>(this.BASE_URL);
    return res.data;
  }

  async getById(id: string) {
    const genres = await this.getAll();
    return genres.find((genre) => genre.id === id);
  }
}

const genresApi = new GenresApi();
export default genresApi;
