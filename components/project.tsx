import { Link, Grid, Box, SlideFade } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { Icon } from "@chakra-ui/react";



export default function Project({text, link, icon, ...props }) {
    const [isOpen, setIsOpen]=useState(false);
    const ref = useRef(null);
    useEffect(() => {
        ref.current.addEventListener('mouseenter', ()=> setIsOpen(true))
        ref.current.addEventListener('mouseleave', ()=> setIsOpen(false))
    },[])
    return (
        <Link 
        
        w="full" h="full" 
        minH="200px" href={link} 
        target="_blank" ref={ref} 
        position="relative"
        _hover={{background: 'rgba(255,255,255,0.2)'}}
        >
        {icon && <Icon 
        zIndex={-1}
        boxSize="150px" 
        as={icon} 
        position="absolute"
        top="50%"
        left="50%"
        transform="translateX(-50%) translateY(-50%)"
        color={isOpen ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.4)"}
        ></Icon>}
        <Grid   
        placeItems="center" 
        {...props}  
        w="full" 
        h="full" 
        >
            
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