import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import Blog, { BlogProps } from ".";
import ThemeType from "../types/ThemeType";

export default {
  title: "Components/Blog",
  component: Blog,
  argTypes: {
    categories: []
  },
} as Meta;

// Create a master template for mapping args to render the Blog component
const Template: Story<BlogProps> = (args: BlogProps) => <Blog {...args} />;

// Reuse that template for creating different stories
export const DefaultBlog = Template.bind({});
DefaultBlog.args = {
  categories: []
};
