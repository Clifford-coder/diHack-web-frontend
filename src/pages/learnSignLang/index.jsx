import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  ContentWrap,
  Heading,
  HomeBut,
  VideoCard,
  VideoCardImg,
  VideoCardTitle,
  Wrapper,
} from './styles';
import { toast } from 'react-toastify';
import { BeatLoader } from 'react-spinners';
import { SectionHeading } from '../../components/misc';

const LearnSignLang = () => {
  const [videos, setVideos] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    try {
      (async () => {
        const response = await axios.get(
          'https://www.googleapis.com/youtube/v3/search',
          {
            params: {
              part: 'snippet',
              maxResults: '20',
              key: process.env.REACT_APP_GOOGLE_API_KEY, //hide this in .env
              q: 'Learn sign language',
            },
          }
        );
        setVideos(response.data.items);
      })();
    } catch (error) {
      console.error(error);
      toast.error('Error occured in getting videos!');
    }
  }, []);

  if (!videos) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
        }}
      >
        <BeatLoader size={40} color="#08bd17" />
      </div>
    );
  }

  return (
    <Wrapper>
      <HomeBut onClick={() => navigate('/home')}>
        <i className="fas fa-arrow-circle-left" /> Go back to home
      </HomeBut>
      <Heading>Here are some videos from youtube</Heading>
      <ContentWrap>
        {!videos ? (
          <SectionHeading style={{ textAlign: 'center' }}>
            No videos available at the momemt
          </SectionHeading>
        ) : (
          videos.map((video) => {
            const { snippet, id } = video;
            return (
              <VideoCard
                key={id.videoId}
                onClick={() =>
                  window.open(
                    `https://www.youtube.com/watch?v=${id.videoId}`,
                    '_blank'
                  )
                }
              >
                <VideoCardImg src={snippet.thumbnails.high.url} />
                <VideoCardTitle>{snippet.title}</VideoCardTitle>
              </VideoCard>
            );
          })
        )}
      </ContentWrap>
    </Wrapper>
  );
};

export default LearnSignLang;
