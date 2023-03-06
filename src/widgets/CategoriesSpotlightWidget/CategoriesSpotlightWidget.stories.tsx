import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import { articles } from "../../components/Blog/ArticlesData";
import CategoriesSpotlightWidget, { CategoriesSpotlightWidgetProps } from ".";
import { comments } from "../../components/Blog/CommentsData";
import { categories } from "../../components/Blog/CategoryData";
import { users } from "../../components/Blog/UserData";

export default {
  title: "Components/widgets/CategoriesSpotlightWidget",
  component: CategoriesSpotlightWidget,
  argTypes: {
    comments: []
  },
} as Meta;

// Create a master template for mapping args to render the CategoriesSpotlightWidget component
const Template: Story<CategoriesSpotlightWidgetProps> = (args: CategoriesSpotlightWidgetProps) => <CategoriesSpotlightWidget {...args} />;

// Reuse that template for creating different stories
export const Demo = Template.bind({});
Demo.args = {
  categories: categories
};
