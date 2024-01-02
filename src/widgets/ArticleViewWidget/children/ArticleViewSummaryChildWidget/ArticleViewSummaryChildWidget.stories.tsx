import React, { Children, useState } from "react";
import { Story, Meta } from "@storybook/react";
import ArticleViewSummaryChildWidget, { ArticleViewSummaryChildWidgetProps } from ".";
import { articles } from "../../../../components/Blog/ArticlesData";

export default {
  title: "Components/widgets/ArticleViewWidget/ArticleViewSummaryChildWidget",
  component: ArticleViewSummaryChildWidget,
  argTypes: {
    categories: []
  },
} as Meta;

// Create a master template for mapping args to render the ArticleViewWidget component
const Template: Story<ArticleViewSummaryChildWidgetProps> = (args: ArticleViewSummaryChildWidgetProps) => <ArticleViewSummaryChildWidget {...args} />;

// Reuse that template for creating different stories
export const Demo = Template.bind({});
Demo.args = {
  article: articles[1]
};
