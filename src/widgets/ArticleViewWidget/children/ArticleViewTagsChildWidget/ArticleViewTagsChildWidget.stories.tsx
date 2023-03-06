import React, { Children, useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import ArticleViewTagsChildWidget, { ArticleViewTagsChildWidgetProps } from ".";
import { articles } from "../../../../components/Blog/ArticlesData";

export default {
  title: "Components/widgets/ArticleViewWidget/ArticleViewTagsChildWidget",
  component: ArticleViewTagsChildWidget,
  argTypes: {
    categories: []
  },
} as Meta;

// Create a master template for mapping args to render the ArticleViewWidget component
const Template: Story<ArticleViewTagsChildWidgetProps> = (args: ArticleViewTagsChildWidgetProps) => <ArticleViewTagsChildWidget {...args} />;

// Reuse that template for creating different stories
export const Demo = Template.bind({});
Demo.args = {
  article: articles[1]
};