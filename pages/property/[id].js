import { Box, Flex, Spacer, Text, Avatar } from "@chakra-ui/react";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import ImageScrollbar from "../../components/ImageScrollbar";
import { fetchApi, baseUrl } from "../../utils/fetchApi";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    roms,
    title,
    baths,
    area,
    agency,
    isVerifyed,
    description,
    type,
    purpose,
    finishingStatus,
    amenities,
    photos,
  },
}) => (
  <Box maxWidth="1000px" margin="auto" p="4">
    {photos && <ImageScrollbar data={photos} />}
  </Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
