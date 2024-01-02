import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import ArticleListWidget, { ArticleListWidgetProps } from ".";
import { articles } from "../../components/Blog/ArticlesData";
import { categories } from "../../components/Blog/CategoryData";
import { users } from "../../components/Blog/UserData";

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
  categories: categories,
  users: users,
  hideImage: false,
  viewArticleBaseUrl: "/?path=/story/components-widgets-articleviewwidget--demo/"
};
