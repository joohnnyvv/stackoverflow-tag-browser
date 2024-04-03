import Box from "@mui/material/Box";
import { numberOfItemsAtom } from "../../../lib/numberOfItemsAtom";
import { useAtom } from "jotai";
import { tagNameQueryAtom } from "../../../lib/tagNameQueryAtom";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import {
  StackTagsResponse,
  StackWikiResponse,
  TagWiki,
} from "../../../Models/ApiTypes";
import { currentPageAtom } from "../../../lib/currentPageAtom";
import { hasMoreTagsAtom } from "../../../lib/hasMoreTagsAtom";
import { isNetworkErrorAtom } from "../../../lib/isNetworkErrorAtom";
import { sortSettingsAtom } from "../../../lib/sortingAtom";
import TagCard from "./TagCard";
import { Grid } from "@mui/material";
import PlaceholderCard from "./PlaceholderCard";
import Typography from "@mui/material/Typography";

function TagsCardsContainer() {
  const [sortSettings] = useAtom(sortSettingsAtom);
  const [numberOfItems] = useAtom(numberOfItemsAtom);
  const [tagNameQuery] = useAtom(tagNameQueryAtom);
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const [, setHasMoreTags] = useAtom(hasMoreTagsAtom);
  const [, setIsNetworkError] = useAtom(isNetworkErrorAtom);

  const [tags, setTags] = useState<StackTagsResponse>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchTags = async () => {
    try {
      setIsLoading(true);
      const encodedTagNameQuery = encodeURIComponent(tagNameQuery);
      const tagsResponse: AxiosResponse<StackTagsResponse> = await axios.get(
        `https://api.stackexchange.com/2.3/tags?page=${currentPage}&pagesize=${numberOfItems}&order=${sortSettings[1]}&sort=${sortSettings[0]}&inname=${encodedTagNameQuery}&filter=default&site=stackoverflow&key=p1dDesP)8Xbrh0a4Qq0mVA((`,
      );

      const tagNames = tagsResponse.data.items.map((tag) => tag.name);
      const tagChunks = chunkArray(tagNames, 20);

      const allTagsWithDescriptions: StackTagsResponse = {
        has_more: false,
        quota_max: 0,
        quota_remaining: 0,
        items: [],
      };

      for (const tagChunk of tagChunks) {
        const encodedTags = tagChunk.map(encodeURIComponent).join(";");
        const descriptionsResponse: AxiosResponse<StackWikiResponse> =
          await axios.get(
            `https://api.stackexchange.com/2.3/tags/${encodedTags}/wikis?site=stackoverflow&key=p1dDesP)8Xbrh0a4Qq0mVA((`,
          );

        const descriptionsMap = new Map<string, TagWiki>();
        descriptionsResponse.data.items.forEach((wiki) =>
          descriptionsMap.set(wiki.tag_name, wiki),
        );

        const tagsWithDescriptions: StackTagsResponse = {
          has_more: tagsResponse.data.has_more,
          quota_max: tagsResponse.data.quota_max,
          quota_remaining: tagsResponse.data.quota_remaining,
          items: tagChunk.map((tagName) => {
            const originalTag = tagsResponse.data.items.find(
              (tag) => tag.name === tagName,
            ) ?? {
              name: "Unknown Tag",
            };
            return {
              ...originalTag,
              description: descriptionsMap.get(tagName)?.excerpt,
            };
          }),
        };
        allTagsWithDescriptions.has_more ||= tagsWithDescriptions.has_more;
        allTagsWithDescriptions.quota_max += tagsWithDescriptions.quota_max;
        allTagsWithDescriptions.quota_remaining +=
          tagsWithDescriptions.quota_remaining;
        allTagsWithDescriptions.items.push(...tagsWithDescriptions.items);
      }
      setTags(allTagsWithDescriptions);
      setHasMoreTags(allTagsWithDescriptions.has_more);
      setIsNetworkError(false);
      setIsLoading(false);
    } catch (error) {
      setIsNetworkError(true);
      setCurrentPage(1);
      setHasMoreTags(false);
      console.error(error);
    }
  };

  function chunkArray<T>(arr: T[], chunkSize: number): T[][] {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  }

  useEffect(() => {
    const fetchData = async () => {
      await fetchTags();
    };
    fetchData();
  }, [tagNameQuery, numberOfItems, sortSettings, currentPage]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: { md: "50px", xs: "20px" },
        alignItems: "center",
      }}
    >
      {tags?.items.length !== 0 ? (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
          justifyContent="center"
        >
          {isLoading
            ? Array.from({ length: numberOfItems }).map((_, index) => (
                <Grid item xs={2} sm={3} md={3} key={index}>
                  <PlaceholderCard />
                </Grid>
              ))
            : tags?.items.map((tag) => (
                <Grid item xs={2} sm={3} md={3} key={tag.name}>
                  <TagCard tag={tag} />
                </Grid>
              ))}
        </Grid>
      ) : (
        <Typography variant={"h4"}>No tags found</Typography>
      )}
    </Box>
  );
}

export default TagsCardsContainer;
