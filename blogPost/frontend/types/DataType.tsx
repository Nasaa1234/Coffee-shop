export type DataType = {
  title: String;
  description: String;
  image: String;
  body: String;
  author: any;
  create_at: Date;
  published_at: Date;
  comments: CommentType[];
  _id: any;
};

type CommentType = {
  written_by: String;
  image: String;
  text: String;
};
