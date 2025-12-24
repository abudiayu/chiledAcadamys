export const formatVideos = (items) => {
  return items.map((item) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.medium.url,
    embedUrl: `https://www.youtube.com/embed/${item.id.videoId}`,
  }));
};
