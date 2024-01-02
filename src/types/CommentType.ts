
export type Comment = {
  id: string;
  description: string;
  helpful: number;
  notHelpful: number;
  createdAt?: string;
  updatedAt?: string;
  createdBy: string;
  updatedBy: string;
};
