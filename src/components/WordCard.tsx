import {
  Card,
  Text,
  Button,
  Group,
  Progress,
  createStyles,
} from "@mantine/core";
import React from "react";
import { useState } from "react";

import { IconArrowBigLeft, IconArrowBigRight, IconEye } from "@tabler/icons";

import { useDispatch } from "react-redux";
import { decrement, increment } from "@/utils/slice/currentIndexWordSlice";
import { incrementMax } from "@/utils/slice/maxIndexWordSlice";

type CardProps = {
  wordToTest: { arab: string; french: string };
  shouldShowTranslation: boolean;
  progression: number;
};

const useStyles = createStyles((theme, _params, getRef) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "100%",
  },
  text: { display: "flex", justifyContent: "center" },
  progress: { marginTop: "20px" },
}));

export const WordCard: React.FC<CardProps> = ({
  wordToTest,
  shouldShowTranslation,
  progression,
}) => {
  const [showWord, setShowWord] = useState(false);
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const label = `${progression}%`;

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder className={classes.root}>
      <Card.Section>
        <Progress
          value={progression}
          label={label}
          size="xl"
          radius="xl"
          className={classes.progress}
        />
      </Card.Section>
      <Text weight={500} className={classes.text} size={"xl"}>
        Translate the word
      </Text>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500} size={"xl"}>
          {wordToTest.french}
        </Text>
        {(shouldShowTranslation || showWord) && (
          <Text weight={500} size={"xl"}>
            {wordToTest.arab}
          </Text>
        )}
      </Group>
      <Group position="apart" mt="md" mb="xs">
        <Button
          variant="light"
          color="blue"
          mt="md"
          radius="md"
          leftIcon={<IconArrowBigLeft />}
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Previous
        </Button>
        <Button
          variant="light"
          color="blue"
          mt="md"
          radius="md"
          rightIcon={<IconArrowBigRight />}
          onClick={() => {
            dispatch(increment());
            setShowWord(false);
          }}
          disabled={!(shouldShowTranslation || showWord)}
        >
          Next
        </Button>
      </Group>
      <Button
        variant="light"
        color="green"
        mt="md"
        radius="md"
        onClick={() => {
          dispatch(incrementMax());
          setShowWord(true);
        }}
        leftIcon={<IconEye />}
        rightIcon={<IconEye />}
      >
        Show
      </Button>
    </Card>
  );
};
