"use client";
import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import Layout from "@/components/Layout";
import {
  ActionIcon,
  Button,
  CloseButton,
  Container,
  CopyButton,
  Input,
  Select,
  SimpleGrid,
  Space,
  Title,
  Tooltip,
} from "@mantine/core";
import {
  IconCheck,
  IconCopy,
  IconDownload,
  IconUnlink,
} from "@tabler/icons-react";
import { useState } from "react";

export default function YoutubeMediaDownloaderPage() {
  const [value, setValue] = useState("");

  const fetch = () => {
    console.log("Fetching video from URL:", value);
  };

  return (
    <Layout>
      <Title order={2} ta="center" mt="sm">
        Youtube Media Downloader
      </Title>
      <Space m={60} />

      <div className="flex flex-col max-w-[800px] m-auto">
        <div className="w-full flex items-center space-x-2">
          {/* Input field */}
          <Input
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
            placeholder={"placeholder"}
            leftSection={<IconUnlink size={16} />}
            className="flex-1"
            radius="md"
          />

          {/* CloseButton, only visible when there is text */}
          {value && (
            <CloseButton
              onClick={() => setValue("")}
              className="cursor-pointer"
              bg={"gray"}
            />
          )}
        </div>

        <Space m={10} />
        {/* Get Button */}
        <Button
          variant="default"
          onClick={fetch}
          className="w-full"
          radius="md"
        >
          Get
        </Button>
      </div>

      <Space m={60} />
      <Container size="xs">
        <Select
          label="All types"
          placeholder="Pick one Type"
          data={["1080p - Video + Audio", "720p", "360p", "240p"]}
          defaultValue={"1080p - Video + Audio"}
          allowDeselect={false}
        />

        <Space m={30} />
        <div className="flex justify-around items-center">
          <CopyButton value="https://mantine.dev" timeout={2000}>
            {({ copied, copy }) => (
              <Tooltip
                label={copied ? "Copied" : "Copy"}
                withArrow
                position="right"
              >
                <ActionIcon
                  color={copied ? "teal" : "gray"}
                  variant="subtle"
                  onClick={copy}
                >
                  {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
                </ActionIcon>
              </Tooltip>
            )}
          </CopyButton>
          <Button variant="default" leftSection={<IconDownload size={14} />}>
            Download
          </Button>
        </div>
      </Container>
      <Space m={80} />

      <SimpleGrid
        cols={{ base: 2, sm: 4, lg: 7 }}
        spacing={{ base: 10, sm: "xl" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
        {" "}
        {/* You can adjust cols as per your layout preference */}
        {Array.from({ length: 10 }).map((_, index) => (
          <ArticleCard key={index} />
        ))}
      </SimpleGrid>
    </Layout>
  );
}
