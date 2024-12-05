import { createTheme, MantineProvider } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/main-layout";
import Dashboard from "./pages/dashboard";
import SearchPage from "./pages/search";
import UploadFilePage from "./pages/upload-file";

import "@mantine/core/styles.css";
import Invoice from "./pages/invoice";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "upload",
        element: <UploadFilePage />,
      },
      {
        path: "invoice",
        element: <Invoice />,
      },
    ],
  },
]);

const theme = createTheme({
  fontFamily: "Inter, sans-serif",
});

export default function App() {
  return (
    <MantineProvider
      theme={theme}
      defaultColorScheme="light"
      withGlobalStyles
      withNormalizeCSS
    >
      <RouterProvider router={routes} />
    </MantineProvider>
  );
}
