import {
  Box,
  Button,
  FileButton,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import { UploadCloudIcon } from "lucide-react";

export default function UploadFilePage() {
  const theme = useMantineTheme();
  const [file, setFile] = useState();

  return (
    <Box h="100%">
      <Stack
        align="center"
        justify="center"
        h={240}
        gap={4}
        bg={theme.colors.gray[0]}
        style={{
          borderRadius: "18px",
          borderWidth: "2px",
          borderStyle: "dashed",
          borderColor: theme.colors.gray[5],
        }}
      >
        <UploadCloudIcon size={48} color={theme.colors.gray[5]} />
        <Text c={theme.colors.gray[6]}>
          Choose a file to upload for the Knowledge Base
        </Text>
        <FileButton
          onChange={async (payload) => {
            console.log(await payload.text());
            setFile(payload);
          }}
        >
          {(props) => (
            <Button {...props} variant="outline">
              Browse Files
            </Button>
          )}
        </FileButton>
        {file && <Text>Picked file: {file.name}</Text>}
      </Stack>
      <Button fullWidth size="md" mt={18} disabled={!file}>
        Confirm Upload
      </Button>
    </Box>
  );
}
