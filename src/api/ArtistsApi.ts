import axios from 'axios';

export type Artist = {
  id: string;
  name: string;
  imageUrl: string;
};

class ArtistsApi {
  private readonly BASE_URL = '/api/artists.json';

  async getAll() {
    const res = await axios.get<Artist[]>(this.BASE_URL);
    return res.data;
  }

  async getById(id: string) {
    const artists = await this.getAll();
    return artists.find((artist) => artist.id === id);
  }
}

const artistsApi = new ArtistsApi();
export default artistsApi;
