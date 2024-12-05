import {
  Box,
  Button,
  Container,
  Group,
  Input,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";

const useGetSearchResult = () => {
  return useQuery({
    queryKey: ["search"],
    queryFn: async () => {
      const resp = await fetch(
        "https://bw7v2haut2.execute-api.us-east-1.amazonaws.com/dev/search?query=Explain+about+the+credit+cards+in+details",
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Methods": "OPTIONS,GET,POST,PUT,DELETE,PATCH",
          },
        }
      );
      const data = await resp.json();
      return data;
    },
  });
};

export default function SearchPage() {
  const theme = useMantineTheme();
  const { data, isLoading } = useGetSearchResult();
  return (
    <Stack h="100%">
      <Group w="100%">
        <Input placeholder="Search bedrock..." flex={1} />
        <Button>Search</Button>
      </Group>
      <Container w="100%" flex={1} px={10} py={16} bg={theme.colors.gray[0]}>
        {/* <Text ta="center">Result Here</Text> */}
        <Text>{JSON.stringify(data)}</Text>
      </Container>
    </Stack>
  );
}
