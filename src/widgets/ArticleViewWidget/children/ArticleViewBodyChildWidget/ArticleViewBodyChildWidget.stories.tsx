import React, { Children, useState } from "react";
import { Story, Meta } from "@storybook/react";
import ArticleViewBodyChildWidget, { ArticleViewBodyChildWidgetProps } from ".";
import { articles } from "../../../../components/Blog/ArticlesData";

export default {
  title: "Components/widgets/ArticleViewWidget/ArticleViewBodyChildWidget",
  component: ArticleViewBodyChildWidget,
  argTypes: {
    categories: []
  },
} as Meta;

// Create a master template for mapping args to render the ArticleViewWidget component
const Template: Story<ArticleViewBodyChildWidgetProps> = (args: ArticleViewBodyChildWidgetProps) => <ArticleViewBodyChildWidget {...args} />;

// Reuse that template for creating different stories
export const Demo = Template.bind({});
Demo.args = {
  article: articles[1]
};
