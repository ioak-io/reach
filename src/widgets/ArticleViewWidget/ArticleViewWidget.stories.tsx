import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import { articles } from "../../components/Blog/ArticlesData";
import ArticleViewWidget, { ArticleViewWidgetProps } from ".";
import { comments } from "../../components/Blog/CommentsData";

export default {
  title: "Components/widgets/ArticleViewWidget",
  component: ArticleViewWidget,
  argTypes: {
    categories: []
  },
} as Meta;

// Create a master template for mapping args to render the ArticleViewWidget component
const Template: Story<ArticleViewWidgetProps> = (args: ArticleViewWidgetProps) => <ArticleViewWidget {...args} />;

// Reuse that template for creating different stories
export const Demo = Template.bind({});
Demo.args = {
  article: articles[1],
  comments: comments
};
