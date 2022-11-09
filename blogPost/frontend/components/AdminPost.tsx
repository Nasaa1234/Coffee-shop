/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { DataType } from "../types";
import Swal from "sweetalert2";
import { useData } from "../providers";
import router from "next/router";

export const AdminPost = ({ data }: { data: DataType }) => {
  const { Delete, Edit } = useData();
  const [show, setShow] = useState(false);
  const [value, setValue] = useState<any>({
    title: data.title,
    description: data.description,
    detail: data.body,
    picture:
      "https://image.shutterstock.com/image-photo/smiling-girl-student-wear-wireless-260nw-1492613150.jpg",
  });
  const handleChange = (prop: string) => (event: any) => {
    setValue({ ...value, [prop]: event.target.value });
  };

  const handle = () => setShow(!show);

  const DeleteModal = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result: any) => {
      if (result.isConfirmed) {
        Delete(data._id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div className="d-flex justify-content-between align-items-center border border-3 rounded px-3 py-1">
      <div
        className="d-flex flex-column justify-content-between"
        onClick={() => router.push(data?._id)}
      >
        <div className="fs-4 fw-bold">{data?.title.slice(0, 10)}...</div>
        <div className="d-flex gap-2">
          <img
            src={data.author?.image}
            className="rounded-circle"
            style={{ width: 30, height: 30 }}
          />
          <div>{data.author?.name}</div>
        </div>
      </div>
      <div>{data?.body.slice(0, 30)}........</div>
      <div className=" d-flex gap-3">
        <Button onClick={handle}>Edit</Button>
        <Button variant="danger" onClick={() => DeleteModal()}>
          Delete
        </Button>
      </div>
      <Modal show={show} onHide={handle}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column align-items-center gap-3">
            <div className="h-100 col-12">
              <Form.Label>Title</Form.Label>
              <Form.Control
                placeholder={"Title..."}
                value={`${value.title}`}
                onChange={handleChange("title")}
              />
            </div>
            <div className="h-100 col-12">
              <Form.Label>Description</Form.Label>
              <Form.Control
                placeholder={"Description..."}
                value={`${value.description}`}
                onChange={handleChange("description")}
              />
            </div>
            <div className="h-100 col-12">
              <Form.Label>Detail</Form.Label>
              <Form.Control
                placeholder={"Detail..."}
                value={`${value.detail}`}
                onChange={handleChange("detail")}
              />
            </div>
            <div className="h-100 col-12">
              <Form.Label>Picture</Form.Label>
              <Form.Control type={"file"} placeholder={"Picture..."} />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handle}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handle();
              Edit(
                value.title,
                value.description,
                value.picture,
                value.detail,
                data._id
              );
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
