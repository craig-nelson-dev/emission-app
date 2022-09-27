import { Box, Flex, Grid, GridItem, Spacer, Text } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { Emission } from '../../types';
import { formatKg } from '../../utils';

type Props = {
  data: Emission;
};

const EmissionDetail = ({ data }: Props) => {
  return (
    <Box p={3} bgColor={'white'} borderRadius={16} minW={'80'}>
      <Box
        borderRadius={8}
        bgImage={`url(${data.background})`}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        color={'white'}
        textAlign={'center'}
      >
        <Text fontSize={'2xl'} fontWeight={'semibold'} pt={16}>
          {data.name}
        </Text>
        <Text
          fontSize={'sm'}
          py={2}
        >{`${data.country} Countries, ${data.day} days`}</Text>
        <Grid
          templateColumns="repeat(1, 1fr)"
          gap={8}
          w={'max-content'}
          m={'auto'}
        >
          <GridItem w="100%">
            <Flex
              fontSize={'sm'}
              bgColor={'gray.900'}
              py={4}
              px={3}
              borderRadius={12}
              w={'full'}
              m={'auto'}
              fontWeight={'semibold'}
            >
              <Text>{`Emissions offset:`}</Text>
              <Spacer />
              <Text>{`${formatKg(data.emissionsOffset)} CO`}</Text>
              <Text
                verticalAlign={'sub'}
                fontSize={'xx-small'}
                as={'sub'}
                mt={4}
              >
                2
              </Text>
              <Text>e</Text>
            </Flex>
          </GridItem>
          <GridItem w="100%">
            <Flex
              fontSize={'sm'}
              bgColor={'white'}
              color={'black'}
              p={4}
              borderRadius={12}
              borderBottomRadius={0}
              w={'full'}
              m={'auto'}
              fontWeight={'semibold'}
            >
              <Text>Trip rating</Text>
              <Flex pl={8} pr={2}>
                <StarIcon w={6} h={6} fill={'yellow'} color={'yellow'} />
                <StarIcon w={6} h={6} fill={'yellow'} color={'yellow'} />
                <StarIcon w={6} h={6} fill={'yellow'} color={'yellow'} />
                <StarIcon w={6} h={6} fill={'yellow'} color={'yellow'} />
                <StarIcon w={6} h={6} fill={'yellow'} />
              </Flex>
              <Spacer />
              <Text>{data.rating}</Text>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default EmissionDetail;
