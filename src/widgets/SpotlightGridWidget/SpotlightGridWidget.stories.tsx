import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import { articles } from "../../components/Blog/ArticlesData";
import SpotlightGridWidget, { SpotlightGridWidgetProps } from ".";
import { comments } from "../../components/Blog/CommentsData";
import { categories } from "../../components/Blog/CategoryData";
import { users } from "../../components/Blog/UserData";

export default {
  title: "Components/widgets/SpotlightGridWidget",
  component: SpotlightGridWidget,
  argTypes: {
    comments: []
  },
} as Meta;

// Create a master template for mapping args to render the SpotlightGridWidget component
const Template: Story<SpotlightGridWidgetProps> = (args: SpotlightGridWidgetProps) => <SpotlightGridWidget {...args} />;

// Reuse that template for creating different stories
export const Demo = Template.bind({});
Demo.args = {
  data: categories.map(item => ({ id: item.id, text: item.name, image: item.picture }))
};
