import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import ArticleListWidget, { ArticleListWidgetProps } from ".";
import { articles } from "../../components/Blog/ArticlesData";

export default {
  title: "Components/widgets/ArticleListWidget",
  component: ArticleListWidget,
  argTypes: {
    categories: []
  },
} as Meta;

// Create a master template for mapping args to render the ArticleListWidget component
const Template: Story<ArticleListWidgetProps> = (args: ArticleListWidgetProps) => <ArticleListWidget {...args} />;

// Reuse that template for creating different stories
export const Demo = Template.bind({});
Demo.args = {
  articles: articles,
  hideImage: false,
  viewArticleBaseUrl: "/?path=/story/components-widgets-articleviewwidget--demo/"
};
