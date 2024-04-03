import React from "react";
import PlaceholderCard from "../../../../Components/TagsSection/TagsCards/PlaceholderCard";
import TagCard from "../../../../Components/TagsSection/TagsCards/TagCard";

export default {
  title: "Tags Section/Tags Cards/Tags Cards",
  component: TagCard,
  argTypes: {
    isLoading: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => {
  return (
    <div style={{ width: "350px" }}>
      {args.isLoading ? (
        <PlaceholderCard />
      ) : (
        <TagCard
          tag={{
            name: "javascript",
            count: 1000,
            description:
              "Javascript is often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior.",
          }}
        />
      )}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  isLoading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
