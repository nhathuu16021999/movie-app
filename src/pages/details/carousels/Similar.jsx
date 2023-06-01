import Carousel from '../../../components/carousel/Carousel';
import useFetch from '../../../hooks/useFetch';

const Similar = ({ mediaType, id }) => {
  console.log({ mediaType });
  const { data, loading } = useFetch(`/${mediaType}/${id}/similar`);

  const title = mediaType === 'tv' ? 'Similar TV Shows' : 'Similar Movies';

  return (
    <Carousel
      title={title}
      data={data?.results}
      loading={loading}
      endPoint={mediaType}
    />
  );
};

export default Similar;
