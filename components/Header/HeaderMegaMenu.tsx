"use client";
import {
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBook,
  IconChartPie3,
  IconChevronDown,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconNotification,
  IconBrandYoutube,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok
} from "@tabler/icons-react";
import Link from "next/link";
import classes from "./HeaderMegaMenu.module.css";

const mockdata = [
  {
    icon: IconBrandYoutube,
    title: "YouTube",
    description: "Download your favorite videos from YouTube in multiple formats and resolutions.",
    link: "/youtube",
  },
  {
    icon: IconBrandFacebook,
    title: "Facebook",
    description: "Easily download videos from Facebook to enjoy them offline anytime.",
    link: "/facebook",
  },
  {
    icon: IconBrandInstagram,
    title: "Instagram",
    description: "Save Instagram videos and stories for offline viewing at your convenience.",
    link: "/instagram",
  },
  {
    icon: IconBrandTiktok,
    title: "TikTok",
    description: "Download viral TikTok videos and keep up with the latest trends offline.",
    link: "/tiktok",
  },
  // {
  //   icon: IconChartPie3,
  //   title: "Analytics",
  //   description: "Track your video downloads and see statistics for better insights.",
  // },
  // {
  //   icon: IconNotification,
  //   title: "Notifications",
  //   description: "Get notified when new features or updates are available for Grabify.",
  // },
];


export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
  <Link href={`${item.link}`} onClick={() => closeDrawer()}>
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton></Link>
  ));

  return (
    <Box pb={20}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Link href={"/"}>
            <Title className="cursor-pointer">Grabify</Title>
          </Link>

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link}>
              Home
            </a>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Media
                    </Box>
                    <IconChevronDown size={16} color={theme.colors.blue[6]} />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                {/* <Group justify="space-between" px="md">
                  <Text fw={500}>Features</Text>
                  <Anchor href="#" fz="xs">
                    View all
                  </Anchor>
                </Group> */}

                {/* <Divider my="sm" /> */}

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                {/* <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        Get started
                      </Text>
                      <Text size="xs" c="dimmed">
                        Their food sources have decreased, and their numbers
                      </Text>
                    </div>
                    <Button variant="default">Get started</Button>
                  </Group>
                </div> */}
              </HoverCard.Dropdown>
            </HoverCard>
            <a href="#" className={classes.link}>
              Learn
            </a>
            <a href="#" className={classes.link}>
              Academy
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Grabify Drawer"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Dashboard
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Media
              </Box>
              <IconChevronDown size={16} color={theme.colors.blue[6]} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>

          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
