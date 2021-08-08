import Info from "@/components/info";
import Yo from "@/components/yo";
import Project from "@/components/project";
import { Grid } from "@chakra-ui/react";
import { ImBlog, ImEarth } from "react-icons/im";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { GiHistogram, GiSpotedFlower} from "react-icons/gi";
import { SiGooglemaps,SiLibreoffice,SiPython } from "react-icons/si";

export default function Home() {
  return (
    <Grid
      placeItems="center"
      p={[3, 3, 0]}
      templateColumns={["1fr", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
      templateAreas={[
        '"i" "t" "p1" "p2" "p3" "p4" "p5" "p6" "p7" "p8" "p9" "p10"',
        '"i t" "p1 p2" "p3 p4" "p5 p6" "p7 p8" "p9 p10"',
        '"p1 p2 p3 p4" "p5 i t p6" "p7 p8 p9 p10"',
      ]}
      minH="100vh"
      gap="10px"
      mt={[4, 0]}
      
    >
      <Yo />
      <Info/>
      <Project
        icon={ImEarth}
        text="IDL Mining"
        link="http://www.idlmining.com/"
        gridArea="p1"
      />
      <Project
        icon={GiSpotedFlower}
        text="Iris Dataset"
        link="https://irisminas.herokuapp.com/"
        gridArea="p2"
        
      />
      <Project
        icon={SiLibreoffice}
        link="https://cartagenaminas.github.io/CristianCartagena.github.io/"
        text="Curriculum Vitae"
        gridArea="p3"
      />
      <Project
        icon={SiGooglemaps}
        link="https://cartagenaminas.github.io/Mapa-1/"
        text="Deep Learning Map"
        gridArea="p4"
      />
      <Project
        icon={FiGithub}
        link="https://github.com/CartagenaMinas"
        text="Github"
        gridArea="p5"
      />
      <Project
      
        icon={FiLinkedin}
        link="https://www.linkedin.com/in/cristiancartagenamatos/"
        text="Linkedin"
        gridArea="p6"
      />
      <Project
        icon={GiHistogram}
        link="https://analisisdataminas.herokuapp.com/"
        text="Modelo de Bloques"
        gridArea="p7"
      />
      <Project
        icon={FiMail}
        link="mailto:cristian.cartagena@unmsm.edu.pe"
        text="Email"
        gridArea="p8"
      />
      <Project
        icon={SiPython}
        link="https://www.linkedin.com/in/cristiancartagenamatos/"
        text="Proyecto de Python"
        gridArea="p9"
      />
      <Project
        icon={ImBlog}
        link="https://www.linkedin.com/in/cristiancartagenamatos/"
        text="blog"
        gridArea="p10"
      />
    </Grid>
  );
}
