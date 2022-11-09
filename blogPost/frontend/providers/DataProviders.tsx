import {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
  useEffect,
} from "react";
import type { Dispatch, SetStateAction } from "react";
import { AxiosRequestConfig } from "axios";
import { instance } from "../utils/axios";
import { useRouter } from "next/router";

interface DataContextInterface {
  data?: any;
  setData: Dispatch<SetStateAction<any>>;
  Create: (
    title: string,
    description: string,
    image: string,
    body: string
  ) => void;
  error: any;
  succes: any;
  Delete: (id: any) => void;
  Edit: (
    title: string,
    description: string,
    image: string,
    body: string,
    id: any
  ) => void;
  AddUser: (
    username: string,
    email: string,
    password: string,
    image: string
  ) => void;
  pageNumber: {
    per_page: number;
    page: number;
  };
  allData: any;
  setPage: any;
  AddComment: (text: string, title: string, author: any) => void;
}

const DataContext = createContext<DataContextInterface>(
  {} as DataContextInterface
);
interface DataProviderProps {
  children: ReactNode;
}
export const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<any[]>([]);
  const [allData, setAllData] = useState<any[]>([]);

  const [succes, setSucces] = useState<any>({
    create: "",
    update: "",
    delete: "",
    comment: "",
  });
  const [error, setError] = useState<any>({
    create: "",
    update: " ",
    delete: "",
  });
  const [pageNumber, setPage] = useState<any>({
    page: 1,
    per_page: 3,
  });

  useEffect(() => {
    instance
      .get(`posts?per_page=${pageNumber.per_page}&page=${pageNumber.page}`)
      .then((el) => {
        setData(el.data);
      })
      .catch((err) => setError(err));
  }, [succes, pageNumber]);

  useEffect(() => {
    instance
      .get(`allPosts`)
      .then((el) => {
        setAllData(el.data);
      })
      .catch((err) => setError(err));
  }, [succes, pageNumber]);
  const Create = (
    title: string,
    description: string,
    image: string,
    body: string
  ) => {
    console.log(title);
    console.log("add: asdfadsf");
    instance
      .post("/posts", {
        title,
        description,
        image,
        body,
      })
      .then((el) => {
        setSucces({ ...succes, create: el });
        console.log(el);
      })
      .catch((el) => console.log("err", el));
  };
  const Delete = (id: any) => {
    fetch("http://localhost:8888/posts", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }) as any,
    })
      .then((el) => {
        setSucces({ ...succes, delete: el });
        console.log(el);
      })
      .catch((err) => console.log("Error", err));
  };

  const AddComment = (text: string, id: string, author: any) => {
    console.log(text, id);
    instance
      .put("posts/comments", {
        comments: text,
        id,
        author,
      })
      .then((el) => setSucces({ ...succes, comment: el }));
  };

  const Edit = (
    title: string,
    description: string,
    image: string,
    body: string,
    id: any
  ) => {
    instance.put("posts", {
      title,
      description,
      image,
      body,
      id,
    } as AxiosRequestConfig<any>);
  };

  const AddUser = (
    username: string,
    email: string,
    password: string,
    image: string
  ) => {
    instance
      .post("users", {
        username,
        email,
        password,
        image,
      })
      .then((el) => {
        // setItem(el.data.message.username, el.data.message);
        console.log(el);
      });
  };
  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        Create,
        error,
        succes,
        Delete,
        Edit,
        AddComment,
        AddUser,
        pageNumber,
        setPage,
        allData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextInterface => useContext(DataContext);
