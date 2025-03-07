'use client'
import {
  Button,
  Container,
  Group,
  Image,
  List,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import classes from "./HeroBullets.module.css";


export function HeroBullets() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            {/* A <span className={classes.highlight}>modern</span> React <br />{" "}
            components library */}
            Grabify – Open-Source Video Downloader 
          </Title>
          {/* <Text c="dimmed" mt="md">
          Grabify is a powerful, open-source web application that lets you effortlessly download videos from platforms like YouTube, Facebook, TikTok, and more. Our goal is to make video downloading simple, fast, and accessible for everyone.
          </Text> */}

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck size={12} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Fast and Secure Video Downloads</b> – Download videos from YouTube, Facebook, TikTok, and other platforms in a breeze.
            </List.Item>
            <List.Item>
              <b>Multiple Formats and Resolutions</b> – Choose the video quality and format that fits your needs.
            </List.Item>
            <List.Item>
              <b>Open Source and Community-Driven</b> – Grabify is fully open-source, meaning anyone can contribute and improve the app.
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Get started
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="md"
              className={classes.control}
            >
              Source code
            </Button>
          </Group>
        </div>
        <Image src={"/image.svg"} className={classes.image} />
      </div>
    </Container>
  );
}
