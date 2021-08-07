import { Image } from "@chakra-ui/react";

export default function Yo() {
  return (
    <Image
      borderRadius="full"
      boxSize="200px"
      objectFit="cover"
      src="/yo_foto.jpg"
      alt="Juan Sensio"
      gridArea="i"
    />
  );
}
