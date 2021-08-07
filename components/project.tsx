import { Box, Grid, Link, SlideFade } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@chakra-ui/react";

interface ProjectProps {
  text: string;
  isInternal?: boolean;
  link: string;
  icon: any;
  gridArea: string;
}

export default function Project({
  text,
  isInternal,
  link,
  icon,
  gridArea,
}: ProjectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    ref.current.addEventListener("mouseenter", () => setIsOpen(true));
    ref.current.addEventListener("mouseleave", () => setIsOpen(false));
  }, []);
  return (
    <Link
      w="full"
      h="full"
      minH="200px"
      href={link}
      target={isInternal ? "" : "_blank"}
      ref={ref}
      position="relative"
      _hover={{ background: "rgba(255,255,255,0.2)" }}
    >
      {icon && (
        <Icon
          zIndex={-1}
          boxSize="150px"
          as={icon}
          position="absolute"
          top="50%"
          left="50%"
          title="icon"
          transform="translateX(-50%) translateY(-50%)"
          color={isOpen ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.4)"}
        />
      )}
      <Grid placeItems="center" gridArea={gridArea} w="full" h="full">
        <SlideFade in={isOpen} offsetY="20px">
          <Box
            p="10px"
            color="black"
            bg="rgba(255,255,255,1)"
            rounded="md"
            shadow="md"
          >
            {text}
          </Box>
        </SlideFade>
      </Grid>
    </Link>
  );
}
