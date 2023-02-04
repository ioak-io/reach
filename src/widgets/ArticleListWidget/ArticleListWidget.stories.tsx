import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import ArticleListWidget, { ArticleListWidgetProps } from ".";
import ArticleListWidgetWrapper from "./ArticleListWidgetWrapper";
import ArticleListVariantType from "../../types/ArticleListVariantType";

export default {
  title: "Components/widgets/ArticleListWidget",
  component: ArticleListWidget,
  argTypes: {
    categories: []
  },
} as Meta;

// Create a master template for mapping args to render the ArticleListWidget component
const Template: Story<ArticleListWidgetProps> = (args: ArticleListWidgetProps) => <ArticleListWidgetWrapper {...args} />;

// Reuse that template for creating different stories
export const DefaultArticleListWidget = Template.bind({});
DefaultArticleListWidget.args = {
  variant: ArticleListVariantType.spotlight,
  meta: {
  }
};
