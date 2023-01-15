import { Box, Checkbox, Grid, TextInput } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { DataTable } from "mantine-datatable";
import React, { useEffect, useState } from "react";
import { IconSearch } from "@tabler/icons";

type wordToTest = { arab: string; french: string };

export const SearchingAndFilteringExample: React.FC<{
  wordsToTest: wordToTest[];
}> = ({ wordsToTest }) => {
  const [records, setRecords] = useState(wordsToTest);

  const [query, setQuery] = useState("");
  const [veteransOnly, setVeteransOnly] = useState(false);
  const [debouncedQuery] = useDebouncedValue(query, 200);

  useEffect(() => {
    setRecords(
      wordsToTest.filter(({ arab, french }) => {
        return !(
          debouncedQuery !== "" &&
          !french.toLowerCase().includes(debouncedQuery.trim().toLowerCase())
        );
      })
    );
  }, [debouncedQuery, wordsToTest]);
  return (
    <>
      <Grid align="center">
        <Grid.Col>
          <TextInput
            sx={{ flexBasis: "60%" }}
            placeholder="Search french words..."
            icon={<IconSearch size={16} />}
            value={query}
            onChange={(e) => setQuery(e.currentTarget.value)}
          />
        </Grid.Col>
        <Grid.Col xs={4} sm={3}>
          <Checkbox
            label="Only verbs"
            checked={veteransOnly}
            onChange={(e) => setVeteransOnly(e.currentTarget.checked)}
          />
        </Grid.Col>
      </Grid>
      <Box sx={{ height: "100%" }}>
        <DataTable
          withBorder
          records={records}
          columns={[
            {
              accessor: "french",
            },
            { accessor: "arab" },
          ]}
        />
      </Box>
    </>
  );
};
