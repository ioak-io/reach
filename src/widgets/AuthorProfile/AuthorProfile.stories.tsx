import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import { articles } from "../../components/Blog/ArticlesData";
import AuthorProfile, { AuthorProfileProps } from ".";
import { comments } from "../../components/Blog/CommentsData";
import { categories } from "../../components/Blog/CategoryData";
import { users } from "../../components/Blog/UserData";

export default {
  title: "Components/widgets/AuthorProfile",
  component: AuthorProfile,
} as Meta;

// Create a master template for mapping args to render the AuthorProfile component
const Template: Story<AuthorProfileProps> = (args: AuthorProfileProps) => <AuthorProfile {...args} />;

// Reuse that template for creating different stories
export const Demo = Template.bind({});
Demo.args = {
  horizontal: true,
  user: users[0]
};
