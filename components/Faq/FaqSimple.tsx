import {
  Accordion,
  ActionIcon,
  Button,
  Container,
  CopyButton,
  Title,
  Tooltip,
} from "@mantine/core";
import { IconCheck, IconCopy, IconDownload } from "@tabler/icons-react";
import classes from "./FaqSimple.module.css";

export function FaqSimple() {
  const groceries = [
    {
      value: "1080p - video + audio",
      content: (
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
      ),
    },
  ];

  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.content}</Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title ta="center" className={classes.title}>
        All Types
      </Title>
      <Accordion variant="separated">{items}</Accordion>
    </Container>
  );
}
