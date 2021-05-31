import Project from "@/components/project";
import { Link, Icon,Grid, Heading, VStack, Image, Text, HStack } from "@chakra-ui/react";
import {BiRocket} from "react-icons/bi";
import {FiGithub, FiLinkedin, FiMail, FiTwitter} from "react-icons/fi";
export default function Home() {
  return (
    <Grid placeItems="center" p={[3,3,0]} 
    templateColumns={["1fr","repeat(2,1fr)","repeat(4,1fr)"]}
    templateAreas={['"i" "t" "p1" "p2" "p3" "p4" "p5" "p6" "p7" "p8" "p9" "p10"',
    '"i t" "p1 p2" "p3 p4" "p5 p6" "p7 p8" "p9 p10"',
    '"p1 p2 p3 p4" "p5 i t p6" "p7 p8 p9 p10"'
    ]}minH="100vh" gap="10px" mt={4,0}> 
     <Image
        borderRadius="full"
        boxSize="150px"
        objectFit="cover"
        src="/yo.jpg"
        alt="Cristian Cartagena"
        gridArea="i"
        
      />
     <VStack 
     spacing={[6,3]}
     gridArea="t" 
     align={["center","flex-start"]} w="full" p={5}>
      <Heading>Cristian Cartagena Matos</Heading>
      <Text textAlign={["center","left"]}>Este es mi Portafolio. Aqui encontraras algunos de mis proyectos.</Text>
      <HStack spacing={10}>
        <Link href="https://www.linkedin.com/in/cristiancartagenamatos/" target="_blank"><Icon as={FiLinkedin} boxSize="30px"/></Link>
        <Link href="https://github.com/CartagenaMinas" target="_blank"><Icon as={FiGithub} boxSize="30px"/></Link>
        <Link href="mailto:cristian.cartagena@unmsm.edu.pe" target="_blank"><Icon as={FiMail} boxSize="30px"/></Link>
      </HStack>
     </VStack>
     <Project text="proyecto 1" icon={BiRocket} link="https://www.youtube.com/watch?v=U_UdyuI82tQ" gridArea="p1"/>
     <Project text="proyecto 2" gridArea="p2"/>
     <Project text="proyecto 3" gridArea="p3"/>
     <Project text="proyecto 4" gridArea="p4"/>
     <Project text="proyecto 5" gridArea="p5"/>
     <Project text="proyecto 6" gridArea="p6"/>
     <Project text="proyecto 7" gridArea="p7"/>
     <Project text="proyecto 8"  gridArea="p8"/>
     <Project text="proyecto 9"  gridArea="p9"/>
     <Project text="proyecto 10" gridArea="p10"/>
  </Grid>
 );
}
