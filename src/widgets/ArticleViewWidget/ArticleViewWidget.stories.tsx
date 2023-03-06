import React, { Children, useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { articles } from "../../components/Blog/ArticlesData";
import ArticleViewWidget, { ArticleViewWidgetProps } from ".";
import { categories } from "../../components/Blog/CategoryData";
import { users } from "../../components/Blog/UserData";
import ArticleViewWidgetWrapper from "./ArticleViewWidgetWrapper";

export default {
  title: "Components/widgets/ArticleViewWidget",
  component: ArticleViewWidget,
  argTypes: {
    categories: []
  },
} as Meta;

// Create a master template for mapping args to render the ArticleViewWidget component
const Template: Story<ArticleViewWidgetProps> = (args: ArticleViewWidgetProps) => <ArticleViewWidgetWrapper {...args} />;

const articleChildWidget =
  <div>
    <h3>Add children widgets to construct and render a article content here
    </h3>
    <ul>
      <li>ArticleViewTitleChildWidget</li>
      <li>ArticleViewBodyChildWidget</li>
      <li>ArticleViewMetadataChildWidget</li>
    </ul>
  </div>



// Reuse that template for creating different stories
export const Demo = Template.bind({});
Demo.args = {
  article: articles[1],
  categories: categories,
  users: users,
  children: articleChildWidget
};
