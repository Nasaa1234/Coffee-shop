import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { AdminPost } from "../components";
import { useData } from "../providers";

const Admin = () => {
  const { allData, Create, setPage, pageNumber, error } = useData();
  const [show, setShow] = useState(false);
  const [value, setValue] = useState<any>({
    title: "",
    description: "",
    detail: "",
    picture:
      "https://image.shutterstock.com/image-photo/smiling-girl-student-wear-wireless-260nw-1492613150.jpg",
  });
  const handle = () => setShow(!show);
  const [per, setPer] = useState(0);
  const handleChange = (prop: string) => (event: any) => {
    setValue({ ...value, [prop]: event.target.value });
  };

  return (
    <div className="mt-3 d-flex flex-column align-items-end gap-3">
      <div className="d-flex gap-4 ">
        <Form>
          <Form.Control
            placeholder={"Per Page..."}
            type="number"
            onChange={(e: any) => setPer(e.target.value)}
          />
        </Form>
        <Button
          onClick={() => {
            setPage({ ...pageNumber, per_page: per });
          }}
        >
          See page
        </Button>
        <Button
          variant="success"
          onClick={() => {
            handle();
            console.log(error);
          }}
        >
          Add Post
        </Button>
      </div>

      <div className="w-100 d-flex flex-column gap-3">
        {allData.message?.map((el: any, ind: number) => {
          return (
            <div key={ind}>
              <AdminPost data={el} />
            </div>
          );
        })}
      </div>
      <Modal show={show} onHide={handle}>
        <Modal.Header closeButton>
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column align-items-center gap-3">
            <div className="h-100 col-12">
              <Form.Label>Title</Form.Label>
              <Form.Control
                placeholder={"Title..."}
                value={value.title}
                onChange={handleChange("title")}
              />
              {/* <small className="form-text text-danger">Required</small> */}
            </div>
            <div className="h-100 col-12">
              <Form.Label>Description</Form.Label>
              <Form.Control
                placeholder={"Description..."}
                value={value.description}
                onChange={handleChange("description")}
              />
            </div>
            <div className="h-100 col-12">
              <Form.Label>Detail</Form.Label>
              <Form.Control
                placeholder={"Detail..."}
                value={value.detail}
                onChange={handleChange("detail")}
              />
            </div>
            <div className="h-100 col-12">
              <Form.Label>Picture</Form.Label>
              <Form.Control type={"file"} placeholder={"Title..."} />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handle}>
            Close
          </Button>
          <Button
            className="col-4"
            onClick={() => {
              Create(
                value.title,
                value.description,
                value.picture,
                value.detail
              );

              setValue({
                title: "",
                description: "",
                detail: "",
                picture:
                  "https://image.shutterstock.com/image-photo/smiling-girl-student-wear-wireless-260nw-1492613150.jpg",
              });
              handle();
            }}
          >
            Add Post
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Admin;
