import React from 'react';
import Video from './Video';

const VideoGridList = (props) => {
  return props.videoList.map((video) => {
    return <Video key={video.id} video={video} />;
  });
};

export default VideoGridList;