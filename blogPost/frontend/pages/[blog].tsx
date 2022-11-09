/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useData, useLoaderContext } from "../providers";
import { instance } from "../utils/axios";

const Comment = ({
  text,
  written,
  image,
}: {
  text: string;
  written: string;
  image: string;
}) => {
  return (
    <div className="d-flex align-items-center gap-4">
      <div className="d-flex flex-column border rounded align-items-center p-3 gap-2">
        <img src={image} style={{ width: 30 }} />
        {written}
      </div>
      {text}
    </div>
  );
};

const Blog = () => {
  const router = useRouter();
  const { AddComment, succes } = useData();
  const { blog }: any = router.query;
  const [post, setPost] = useState<any>();
  const [commentValue, setCommentValue] = useState<string>("");

  const getComment = (e: any) => {
    if (e.key == "Enter") {
      AddComment(commentValue, post._id, post.author);
      setCommentValue("");
    }
  };
  useEffect(() => {
    blog
      ? instance
          .get(`posts/postDetail/${blog}`)
          .then((el) => setPost(el.data.data))
          .catch((err) => console.log(err))
      : console.log("loading...");
  }, [blog, succes]);
  return (
    <div>
      <div className="w-100 d-flex flex-column align-items-center my-5  gap-5 ">
        <div className="fs-1 fw-bold text-start ">{post?.title}</div>
        <div className="card-body d-flex align-items-center gap-3">
          <img src={post?.author?.image} alt="" width={40} />
          <div className="text-muted">{post?.author?.email}</div>
          <div className="text-muted">{post?.author?.name}</div>
        </div>
        <img src={post?.image} alt="" width={900} height={450} />
        <div className="w-50 ">{post?.body}</div>
        <div className="d-flex gap-3  border-bottom border-secondary p-5 w-50">
          <img src={post?.author?.image} alt="" style={{ width: 50 }} />
          <div className="d-flex flex-column lh-2">
            <div className="fs-6 fw-lighter">written by</div>
            <div>{post?.author?.email}</div>
          </div>
        </div>
        <div className="d-flex flex-column gap-4 justify-content-start w-50">
          {post?.comments.map((el: any, ind: number) => {
            return (
              <div key={ind}>
                <Comment
                  text={el.text}
                  written={el.written_by}
                  image={el.image}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex flex-column align-items-start w-50">
          <div className="fs-2 text-muted">Join the conversation</div>
          <div className="d-flex align-items-center mt-4">
            <img alt="User Profile" />
            <textarea
              rows={6}
              cols={66}
              value={commentValue}
              placeholder="Comments"
              onChange={(e: any) => setCommentValue(e.target.value)}
              onKeyDown={getComment}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
