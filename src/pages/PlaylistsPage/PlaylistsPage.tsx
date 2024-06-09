import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import artistsApi, { Artist } from '@/api/ArtistsApi';
import genresApi, { Genre } from '@/api/GenresApi';
import PlaylistsPageStyle from '@/pages/PlaylistsPage/PlaylistsPage.style';

export default function PlaylistsPage() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    Promise.all([genresApi.getAll().then(setGenres), artistsApi.getAll().then(setArtists)]);
  }, []);

  return (
    <PlaylistsPageStyle>
      <Row className="justify-content-center mt-5">
        <Col xs={6} className="text-center">
          <h2>Playlists</h2>
          <p>
            Beyond the beat. Expertly crafted playlists for every need, at your fingertips. Pick
            yourself a genre, and you're ready to go.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center mb-5">
        <Col xs={8} className="text-center">
          <Row className="gy-4">
            {genres.map((genre) => (
              <Col key={genre.id} xs={4}>
                <div className="genre-item position-relative px-4 py-5 rounded-3">
                  <img src={genre.imageUrl} alt={genre.name} />
                  <div className="black-filter"></div>
                  <h5>{genre.name}</h5>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col xs={6} className="text-center">
          <p>... a featured artist would be perfect, too.</p>
        </Col>
      </Row>
      <Row className="justify-content-center mb-5">
        <Col xs={8} className="text-center">
          <Row className="gy-4">
            {artists.map((artist) => (
              <Col key={artist.id} xs={12}>
                <div className="artist-item position-relative px-4 py-5 rounded-3">
                  <img src={artist.imageUrl} alt={artist.name} />
                  <div className="black-filter"></div>
                  <h5>{artist.name}</h5>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </PlaylistsPageStyle>
  );
}
