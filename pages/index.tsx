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
import { GiHistogram, GiSpotedFlower, GiMineTruck, GiMineWagon, GiMineExplosion,} from "react-icons/gi";
import { SiGooglemaps,SiLibreoffice,SiPython,SiApacheairflow,SiUnitedairlines,SiMicrosoftexcel } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { RiSurgicalMaskLine } from "react-icons/ri";

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
        icon={GiMineExplosion}
        text="MODELOS Y FÓRMULAS PARA VOLADURA SUPERFICIAL"
        link="https://minas-voladura.herokuapp.com/"
        gridArea="p1"
      />
      <Project
        icon={GiMineTruck}
        text="CARTERA DE PROYECTOS MINEROS POWER BI"
        link="https://cartera-proyectos-mina.herokuapp.com/"
        gridArea="p2"
        
      />
      <Project
        icon={GiHistogram}
        link="https://analisisdataminas.herokuapp.com/"
        text="EXPLORACIÓN DE DATA CSV"
        gridArea="p3"
      />
      <Project
        icon={SiUnitedairlines}
        link="https://cartagenaminas.github.io/Mapa-1/"
        text="CLASIFICACIÓN DE IMÁGENES DEEP LEARNING"
        gridArea="p4"
      />
      <Project
        icon={GiMineWagon}
        link="https://clasificacion-rocas.herokuapp.com/"
        text="MODELOS DE MACHING LEARNING PARA CLASIFICACIÓN DE ROCAS"
        gridArea="p5"
      />
      <Project
      
        icon={SiApacheairflow}
        link="https://requerimiento-de-aire-minas.herokuapp.com/"
        text="REQUERIMIENTO DE AIRE"
        gridArea="p6"
      />
      <Project
        icon={RiSurgicalMaskLine}
        link="https://minas-mask.herokuapp.com/"
        text="DEEP LEARNING PARA CLASIFICACIÓN BINARIA TAPA BOCAS"
        gridArea="p7"
      />
      <Project
        icon={SiMicrosoftexcel}
        link="http://www.idlmining.com/python-excel-post1/"
        text="AUTOMATIZACIÓN DE EXCEL CON PYTHON XLWINGS"
        gridArea="p8"
      />
      <Project
        icon={ImBlog}
        link="http://www.idlmining.com/"
        text="IDL MINING STARTUP"
        gridArea="p9"
      />
      <Project
        icon={CgWebsite}
        link="https://cartagenaminas.github.io/CristianCartagena.github.io/"
        text="CURRICULUM VITAE"
        gridArea="p10"
      />
    </Grid>
  );
}
