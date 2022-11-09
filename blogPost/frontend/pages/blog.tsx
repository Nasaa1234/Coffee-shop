import router from "next/router";
import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { Post } from "../components";
import { useData } from "../providers";
const BlogPosts = () => {
  const { allData, data, setPage, pageNumber } = useData();
  const [arr, setArr] = useState<any>();

  const debugClick = (e: any) => {
    const clickValue = e.target.offsetParent.getAttribute("data-page")
      ? e.target.offsetParent.getAttribute("data-page")
      : e.target.getAttribute("data-page");
    router.push(`?per_page=${pageNumber.per_page}&page=${pageNumber.page}`);
    setPage({ ...pageNumber, page: clickValue });
  };
  useEffect(() => {
    setArr(allData?.message?.length / pageNumber.per_page);
  }, [pageNumber, allData]);
  console.log(arr);
  return (
    <div className="mt-5">
      <h1 className="fw-bold">Blog posts</h1>
      <div style={{ color: "#6D7D8B" }} className="mt-2 mb-4">
        Our latest updates and blogs about managing your team
      </div>
      <div className="d-flex flex-column align-items-center gap-4">
        <div className="d-flex flex-row gap-5 row justify-content-center ">
          {data.message?.map((el: any, index: number) => {
            return <Post child={el} key={index} />;
          })}
        </div>
        <Pagination onClick={debugClick}>
          <Pagination.Prev />
          {arr &&
            Array(5)
              .fill(0)
              .map((el: any, ind: number) => {
                return (
                  <Pagination.Item key={ind} data-page={ind + 1}>
                    {ind + 1}
                  </Pagination.Item>
                );
              })}
          <Pagination.Next />
        </Pagination>
      </div>
    </div>
  );
};

export default BlogPosts;
