import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import ArticleListWidgetWrapper from "./ArticleListWidgetWrapper";
import ArticleListVariantType from "../../types/ArticleListVariantType";
import ArticleListWidgetBackup, { ArticleListWidgetBackupProps } from ".";

export default {
  title: "Components/widgets/ArticleListWidgetBackup",
  component: ArticleListWidgetBackup,
  argTypes: {
    categories: []
  },
} as Meta;

// Create a master template for mapping args to render the ArticleListWidget component
const Template: Story<ArticleListWidgetBackupProps> = (args: ArticleListWidgetBackupProps) => <ArticleListWidgetWrapper {...args} />;

// Reuse that template for creating different stories
export const DefaultArticleListWidget = Template.bind({});
DefaultArticleListWidget.args = {
  variant: ArticleListVariantType.spotlight,
  meta: {
  }
};
