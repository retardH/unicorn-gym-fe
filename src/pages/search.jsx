import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Group,
  Input,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useGetSearchResult = (query) => {
  return useQuery({
    queryKey: ["search", query],
    queryFn: async () => {
      const resp = await fetch(
        `https://g0hwq37vtd.execute-api.us-east-1.amazonaws.com/search?query=${query}`
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //     "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Credentials": true,
        //     "Access-Control-Allow-Methods": "OPTIONS,GET,POST,PUT,DELETE,PATCH",
        //   },
        // }
      );
      const data = await resp.json();
      return data;
    },
    enabled: !!query,
  });
};
const sample = [
  {
    sessionId: "session12345abcd",
    userId: "user001",
    userName: "AliceSmith",
    loginTime: "2024-12-05T09:15:00Z",
    ipAddress: "203.0.113.10",
    browser: "Firefox 118.0",
    device: "MacBook Pro macOS 14",
    sessionDuration: "5400", // in seconds
    isActive: true,
  },
  {
    sessionId: "session67890xyz",
    userId: "user002",
    userName: "BobJones",
    loginTime: "2024-12-05T10:30:00Z",
    ipAddress: "198.51.100.25",
    browser: "Chrome 119.0.0.0",
    device: "Windows 11 Laptop",
    sessionDuration: "0", // in seconds, still active
    isActive: true,
  },
];

export default function SearchPage() {
  const theme = useMantineTheme();
  const [searchInput, setSearchInput] = useState("");
  const [title, setTitle] = useState("");
  const { data, isLoading } = useGetSearchResult(title);
  const sessionId = data?.sessionId;
  return (
    <Stack h="100%">
      <Group w="100%">
        <Input
          placeholder="Search bedrock..."
          flex={1}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button onClick={() => setTitle(searchInput)}>Search</Button>
      </Group>
      <Box display="flex" flex={1}>
        <Container w="100%" flex={1} px={10} py={16} bg={theme.colors.gray[0]}>
          {/* <Text ta="center">Result Here</Text> */}
          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            <Text>{JSON.stringify(data?.generated_text)}</Text>
          )}
        </Container>
        <Box display={Flex}>
          <Box display="flex" alignItems="center">
            <h5>Session Id: {sessionId}</h5>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}
