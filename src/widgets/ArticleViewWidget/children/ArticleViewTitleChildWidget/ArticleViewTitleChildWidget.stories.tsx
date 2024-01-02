import React, { Children, useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import ArticleViewTitleChildWidget, { ArticleViewTitleChildWidgetProps } from ".";
import { articles } from "../../../../components/Blog/ArticlesData";

export default {
  title: "Components/widgets/ArticleViewWidget/ArticleViewTitleChildWidget",
  component: ArticleViewTitleChildWidget,
  argTypes: {
    categories: []
  },
} as Meta;

// Create a master template for mapping args to render the ArticleViewWidget component
const Template: Story<ArticleViewTitleChildWidgetProps> = (args: ArticleViewTitleChildWidgetProps) => <ArticleViewTitleChildWidget {...args} />;

// Reuse that template for creating different stories
export const Demo = Template.bind({});
Demo.args = {
  article: articles[1]
};
