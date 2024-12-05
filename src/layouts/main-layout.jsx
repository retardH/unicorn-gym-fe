import {
  Box,
  Group,
  NavLink,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { Link, Outlet, useLocation } from "react-router";

const links = [
  {
    label: "Dashboard",
    to: "/",
  },
  {
    label: "Search Bedrock",
    to: "/search",
  },
  {
    label: "Upload File",
    to: "/upload",
  },
];
export default function MainLayout() {
  const { pathname } = useLocation();
  const theme = useMantineTheme();
  return (
    <div>
      <Stack
        w="100%"
        px={12}
        py={18}
        justify="center"
        bg={theme.primaryColor}
        h={50}
      >
        <Text style={{ color: "white" }}>KBZ Knowledege Base</Text>
      </Stack>
      <Group w="100%" style={{ height: "calc(100vh - 50px)" }} align="start">
        <Stack h="100%" gap={6} p={12} component="aside">
          {links.map((link) => {
            return (
              <NavLink
                key={link.label}
                active={pathname === link.to}
                component={Link}
                to={link.to}
                label={link.label}
                px={28}
              ></NavLink>
            );
          })}
        </Stack>
        <Box p={12} flex={1} h="100%">
          <Outlet />
        </Box>
      </Group>
    </div>
  );
}
