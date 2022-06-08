import { Box } from "@chakra-ui/react";

const Footer = () => (
  <Box
    textAlign="center"
    padding="5"
    color="gray.600"
    borderTop="1px"
    borderColor="gray.100"
    marginTop="10px"
  >
    2022 Real Estate,{" "}
    <a
      href="/github.com/vitalysoroko95"
      target="_blank"
      rel="noopener noreferrer"
    >
      by Vitaly Soroko
    </a>
  </Box>
);

export default Footer;
