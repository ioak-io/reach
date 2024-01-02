import React, { Children, useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import ArticleViewMetadataChildWidget, { ArticleViewMetadataChildWidgetProps } from ".";
import { articles } from "../../../../components/Blog/ArticlesData";
import { users } from '../../../../components/Blog/UserData'

export default {
  title: "Components/widgets/ArticleViewWidget/ArticleViewMetadataChildWidget",
  component: ArticleViewMetadataChildWidget,
  argTypes: {
    categories: []
  },
} as Meta;

// Create a master template for mapping args to render the ArticleViewWidget component
const Template: Story<ArticleViewMetadataChildWidgetProps> = (args: ArticleViewMetadataChildWidgetProps) => <ArticleViewMetadataChildWidget {...args} />;

// Reuse that template for creating different stories
export const Demo = Template.bind({});
Demo.args = {
  article: articles[1],
  children: "Custom content",
  user: users[0]
};
