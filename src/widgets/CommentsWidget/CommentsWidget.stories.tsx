import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import { articles } from "../../components/Blog/ArticlesData";
import CommentsWidget, { CommentsWidgetProps } from ".";
import { comments } from "../../components/Blog/CommentsData";
import { categories } from "../../components/Blog/CategoryData";
import { users } from "../../components/Blog/UserData";

export default {
  title: "Components/widgets/CommentsWidget",
  component: CommentsWidget,
  argTypes: {
    comments: []
  },
} as Meta;

// Create a master template for mapping args to render the CommentsWidget component
const Template: Story<CommentsWidgetProps> = (args: CommentsWidgetProps) => <CommentsWidget {...args} />;

// Reuse that template for creating different stories
export const Demo = Template.bind({});
Demo.args = {
  comments: comments,
  users: users
};
