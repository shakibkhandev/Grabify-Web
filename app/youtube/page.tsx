"use client";
import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import { FaqSimple } from "@/components/Faq/FaqSimple";
import Layout from "@/components/Layout";
import { TableSort } from "@/components/Table/TableSort";
import URLSearchBar from "@/components/URLSearchBar";
import { SimpleGrid, Space, Title } from "@mantine/core";
import { useState } from "react";

export default function YoutubeMediaDownloaderPage() {
  const [value, setValue] = useState("");

  const fetch = () => {
    // TODO: Implement fetching logic here
    console.log("Fetching video from URL:", value);
    // Example:
    // fetch(value)
    //  .then((response) => response.json())
    //  .then((data) => console.log("Fetched video data:", data))
    //  .catch((error) => console.error("Error fetching video:", error));
  };

  return (
    <Layout>
      <Title order={2} ta="center" mt="sm">
        Youtube Media Downloader
      </Title>
      <Space m={60} />

      <URLSearchBar
        placeholder="https://www.youtube.com/watch?v=wsTv9y931o8"
        value={value}
        setValue={setValue}
        onGet={fetch}
      />
      <Space m={60} />
      {/* <TableSort /> */}
      <FaqSimple />
      <Space m={60} />

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
