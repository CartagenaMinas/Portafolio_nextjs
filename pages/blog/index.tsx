import { Heading, List, Link, ListItem, Text, VStack } from "@chakra-ui/react";
import { getPosts } from "lib/blog";
import NextLink from "next/link";

export default function Blog({ posts }) {
  return (
    <VStack px={3} w="full" maxW="4xl" margin="30px auto">
      <NextLink href="/">
        <Link alignSelf="flex-start">Back to Home</Link>
      </NextLink>
      <Heading padding="20px 0px">Blog</Heading>
      <List w="full">
        {posts?.map(({ title, description, link, date }) => (
          <NextLink href={`/blog/${link}`} key={link}>
            <Link w="full" h="full" _hover={{ textDecoration: "none" }}>
              <ListItem
                w="full"
                p={3}
                _hover={{ background: "rgba(255,255,255,0.2)" }}
              >
                <Heading fontSize="xl">{title}</Heading>
                <Text
                  textTransform="capitalize"
                  fontSize="14px"
                  color="lightgray"
                >
                  {date}
                </Text>
                <Text paddingTop={1} fontSize="xl">
                  {description}
                </Text>
              </ListItem>
            </Link>
          </NextLink>
        ))}
      </List>
    </VStack>
  );
}

export async function getStaticProps() {
  const posts = getPosts();
  return {
    props: {
      posts,
    },
  };
}
