import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import ArticleMinimalListWidget, { ArticleMinimalListWidgetProps } from ".";
import { articles } from "../../components/Blog/ArticlesData";
import { categories } from "../../components/Blog/CategoryData";
import { users } from "../../components/Blog/UserData";

export default {
  title: "Components/widgets/ArticleMinimalListWidget",
  component: ArticleMinimalListWidget,
  argTypes: {
    categories: []
  },
} as Meta;

// Create a master template for mapping args to render the ArticleMinimalListWidget component
const Template: Story<ArticleMinimalListWidgetProps> = (args: ArticleMinimalListWidgetProps) => <ArticleMinimalListWidget {...args} />;

// Reuse that template for creating different stories
export const Demo = Template.bind({});
Demo.args = {
  articles: articles,
  categories: categories,
  users: users,
  hideImage: false,
  viewArticleBaseUrl: "/?path=/story/components-widgets-articleviewwidget--demo/"
};
