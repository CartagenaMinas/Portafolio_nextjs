import { Heading, VStack, Link, Text } from "@chakra-ui/react";
import { getPostData, getPostsNames } from "lib/blog";
import ReactMarkdown from "react-markdown";
import NextLink from "next/link";

const renderers = {
  heading: (props) => <Heading {...props} fontSize="28px" />,
  paragraph: (props) => <Text {...props} />,
  link: (props) => <Link {...props} target="_blank" />,
};

export default function Post({ post }) {
  const { title, content, date } = post;
  return (
    <VStack maxW="6xl" px={6} margin="30px auto">
      <NextLink href="/blog">
        <Link alignSelf="flex-start">Back to Blog</Link>
      </NextLink>
      <VStack padding="30px 0px" spacing={3}>
        <Heading>{title}</Heading>
        <Text textTransform="capitalize" fontSize="14px">
          {date}
        </Text>
      </VStack>
      <VStack align="left" spacing={6}>
        <ReactMarkdown renderers={renderers}>{content}</ReactMarkdown>
      </VStack>
    </VStack>
  );
}

export async function getStaticPaths() {
  const posts = getPostsNames();
  const paths = posts.map((post) => ({
    params: {
      post,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPostData(params.post);
  return {
    props: {
      post,
    },
  };
}
