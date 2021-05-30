import Project from "@/components/project";
import { Grid, Heading, VStack, Image, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Grid placeItems="center" p={3}>
     <Image
        borderRadius="full"
        boxSize="150px"
        src="/yo.jpg"
        alt="Cristian Cartagena"
      />
     <VStack>
      <Heading>Cristian Cartagena Matos</Heading>
      <Text>Este es mi Portafolio</Text>
     </VStack>
     <Project text="proyecto 1"/>
     <Project text="proyecto 2"/>
     <Project text="proyecto 3"/>
  </Grid>
 );
}
