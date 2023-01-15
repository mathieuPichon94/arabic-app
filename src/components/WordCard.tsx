import { Card, Image, Text, Button, Group } from "@mantine/core";
import React from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { decrement, increment } from "@/utils/slice/currentIndexWordSlice";
import { incrementMax } from "@/utils/slice/maxIndexWordSlice";

type CardProps = {
  wordToTest: { arab: string; french: string };
  shouldShowTranslation: boolean;
};

export const WordCard: React.FC<CardProps> = ({
  wordToTest,
  shouldShowTranslation,
}) => {
  const [showWord, setShowWord] = useState(false);
  const dispatch = useDispatch();

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Text weight={500}>Translate the word</Text>
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
          color="green"
          mt="md"
          radius="md"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Previous
        </Button>
        <Button
          variant="light"
          color="red"
          mt="md"
          radius="md"
          onClick={() => {
            dispatch(incrementMax());
            setShowWord(true);
          }}
        >
          Show
        </Button>
        <Button
          variant="light"
          color="blue"
          mt="md"
          radius="md"
          onClick={() => {
            dispatch(increment());
            setShowWord(false);
          }}
          disabled={!(shouldShowTranslation || showWord)}
        >
          Next
        </Button>
      </Group>
    </Card>
  );
};
