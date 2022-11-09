import React, { useRef, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function App() {
  const [value, setValue] = useState({
    search: "",
    addEnglish: "",
    addMongolian: "",
    delete: "",
    editWordEnglish: "",
    editWordMongolian: "",
  });
  const [word, setWord] = useState("");
  const searchRef = useRef();
  const addEnglishRef = useRef();
  const addMongolianRef = useRef();
  const deleteRef = useRef();
  const editWordEnglishhRef = useRef();
  const editWordMongolianhRef = useRef();

  const Read = () => {
    if (value.search === "") {
      searchRef.current.focus();
      return;
    }
    axios.get(`http://localhost:8000/${value.search}`).then((res) => {
      setWord(`${Object.values(res.data)}`);
      setValue({ ...value, search: "" });
    });
  };
  const Create = async () => {
    if (value.addEnglish === "") {
      addEnglishRef.current.focus();
      return;
    }
    if (value.addMongolian === "") {
      addMongolianRef.current.focus();
      return;
    }
    await axios
      .post(`http://localhost:8000/add_word`, {
        mongolian: value.addMongolian,
        english: value.addEnglish,
      })
      .then(() => setValue({ ...value, addEnglish: "", addMongolian: "" }));
  };
  const Delete = async () => {
    if (value.delete === "") {
      deleteRef.current.focus();
      return;
    }
    await axios
      .delete(`http://localhost:8000/delete_word`, {
        english: value.delete,
      })
      .then(() => setValue({ ...value, delete: "" }));
  };
  const Update = async () => {
    if (value.editWordEnglish === "") {
      editWordEnglishhRef.current.focus();
      return;
    }
    if (value.editWordMongolian === "") {
      editWordMongolianhRef.current.focus();
      return;
    }
    await axios
      .put(`http://localhost:8000/edit_word`, {
        english: value.editWordEnglish,
        mongolian: value.editWordMongolian,
      })
      .then(() =>
        setValue({ ...value, editWordEnglish: "", editWordMongolian: "" })
      );
  };
  const handleChange = (prop) => (event) => {
    setValue({ ...value, [prop]: event.target.value });
  };
  return (
    <div>
      <div className="row px-5">
        <h1 className="d-flex justify-content-center my-4"> Dictionary</h1>
        <div className="d-flex flex-column gap-2 col ">
          <h2>Search</h2>
          <div className="h-100">
            <Form.Label>Write word</Form.Label>
            <Form.Control
              placeholder={"Write word..."}
              value={`${value.search}`}
              onChange={handleChange("search")}
              ref={searchRef}
              onKeyDown={(e) => e.code === "Enter" && Read()}
            />
            <div className="d-flex flex-row">
              Your translation:
              <div style={{ fontWeight: "bold" }}>{word}</div>
            </div>
          </div>
          <Button onClick={() => Read()}>search</Button>
        </div>
        <div className="d-flex flex-column gap-2 col">
          <h2>Add</h2>
          <div className="h-100">
            <Form.Label>English</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange("addEnglish")}
              placeholder={"English"}
              value={`${value.addEnglish}`}
              ref={addEnglishRef}
              onKeyDown={(e) => e.code === "Enter" && Create()}
            />
            <Form.Label>Mongolian</Form.Label>
            <Form.Control
              placeholder={"Mongolian"}
              type="text"
              onChange={handleChange("addMongolian")}
              value={`${value.addMongolian}`}
              onKeyDown={(e) => e.code === "Enter" && Create()}
              ref={addMongolianRef}
            />
          </div>
          <Button onClick={() => Create()}>Add</Button>
        </div>
        <div className="d-flex flex-column gap-2 col">
          <h2>Delete</h2>
          <div className="h-100">
            <Form.Label>Write word</Form.Label>
            <Form.Control
              placeholder={"Write word..."}
              value={`${value.delete}`}
              onChange={handleChange("delete")}
              ref={deleteRef}
              onKeyDown={(e) => e.code === "Enter" && Delete()}
            />
          </div>
          <Button onClick={() => Delete()}>Delete</Button>
        </div>
        <div className="d-flex flex-column gap-2 col">
          <h2>Update</h2>
          <div className="h-100">
            <Form.Label>English</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange("editWordEnglish")}
              value={`${value.editWordEnglish}`}
              placeholder="English"
              ref={editWordEnglishhRef}
              onKeyDown={(e) => e.code === "Enter" && Update()}
            />
            <Form.Label>Mongolian</Form.Label>
            <Form.Control
              type="text"
              placeholder="Mongolian"
              onChange={handleChange("editWordMongolian")}
              value={`${value.editWordMongolian}`}
              ref={editWordMongolianhRef}
              onKeyDown={(e) => e.code === "Enter" && Update()}
            />
          </div>
          <Button onClick={() => Update()}>Update</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
