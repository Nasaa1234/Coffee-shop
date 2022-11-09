import {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
  useEffect,
} from "react";
import { instance } from "../utils/axios";
import router from "next/router";

interface DataContextInterface {
  data: any;
  setData: any;
  AddUser: (email: string, password: string) => void;
  Login: (email: any, password: any) => void;
}

const DataContext = createContext<DataContextInterface>(
  {} as DataContextInterface
);
interface DataProviderProps {
  children: ReactNode;
}
export const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState();
  const AddUser = (email: string, password: string) => {
    instance
      .post("/users", {
        email,
        password,
      })
      .then((el) => {
        console.log(el);
      });
  };

  useEffect(() => {
    instance.get(`users`).then((el) => {
      setData(el.data);
    });
  }, []);
  const Login = (email: any, password: any) => {
    console.log(email);
    instance
      .post("/login", {
        email,
        password,
      } as any)
      .then((el: any) => {
        if (typeof window !== "undefined") {
          localStorage.setItem("token", el?.data.token);
          localStorage.setItem("name", el?.data.username);
          router.push("/");
        }
      })
      .catch((el) => console.log(el));
  };
  return (
    <DataContext.Provider
      value={{
        AddUser,
        Login,
        data,
        setData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextInterface => useContext(DataContext);
