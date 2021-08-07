import { Heading, HStack, Icon, Link, Text, VStack } from "@chakra-ui/react";
import {
  FiTwitter,
  FiGithub,
  FiMail,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";

export default function Info() {
  return (
    <VStack
      spacing={[6, 3]}
      gridArea="t"
      align={["center", "flex-start"]}
      w="full"
      p={5}
    >
      <Heading fontSize="40px" textAlign={"center"}>CRISTIAN CARTAGENA MATOS</Heading>
      <Text fontSize="lg" textAlign={["center", "center"]}>
       Ingeniero de Minas | Emprendedor  |  Programador | Desarrollador de Deep Learning  | Co-Founder Startup IDL Mining
      </Text>
      <Text fontSize="lg" textAlign={["center", "center"]}>
      ---------- PORTAFOLIO DE PROYECTOS ----------
      </Text>
      {/* <HStack spacing={6}>
        <Link href="https://twitter.com/juansensio" target="_blank">
          <Icon as={FiTwitter} boxSize="30px" title="twitter" />
        </Link>
        <Link href="https://github.com/juansensio" target="_blank">
          <Icon as={FiGithub} boxSize="30px" title="github" />
        </Link>
        <Link href="https://www.linkedin.com/in/juanbpedro/" target="_blank">
          <Icon as={FiLinkedin} boxSize="30px" title="linkedin" />
        </Link>
        <Link href="https://www.instagram.com/j_sensio/" target="_blank">
          <Icon as={FiInstagram} boxSize="30px" title="instagram" />
        </Link>
        <Link href="mailto:sensio.juan@gmail.com">
          <Icon as={FiMail} boxSize="30px" title="mail" />
        </Link>
      </HStack> */}
    </VStack>
  );
}
