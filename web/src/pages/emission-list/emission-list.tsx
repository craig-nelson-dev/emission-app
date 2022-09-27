import { useEffect, useState } from 'react';
import { Container, SimpleGrid, Spinner } from '@chakra-ui/react';
import EmissionDetail from '../../components/emission-detail';
import { getEmissions } from '../../service/emission';
import { Emission } from '../../types';

const EmissionList = () => {
  const [data, setData] = useState<Emission[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getAsync = async () => {
      setLoading(true);
      const newData = await getEmissions();
      setLoading(false);
      setData(newData);
    };
    getAsync();
  }, []);

  return (
    <Container maxW="container.xl" minW={'max-content'} p={4}>
      <SimpleGrid
        columns={[1, null, 2, null, 3]}
        spacing={10}
        bgColor="gray"
        px={8}
        py={12}
      >
        {loading ? (
          <Spinner size="xl" m={'auto'} />
        ) : (
          <>
            {data?.map((item, index) => {
              return <EmissionDetail data={item} key={index} />;
            })}
          </>
        )}
      </SimpleGrid>
    </Container>
  );
};

export default EmissionList;
