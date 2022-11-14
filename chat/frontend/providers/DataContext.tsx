import {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
  useEffect,
} from "react";
import {
  allUsersRoute,
  GetMessageRoute,
  loginRoute,
  registerRoute,
  sendMessageRoute,
} from "../utils/axios";
import router from "next/router";
import axios from "axios";

interface DataContextInterface {
  data: any;
  setData: any;
  user: any;
  AddUser: (email: string, password: string, username: string) => void;
  Login: (username: any, password: any) => void;
  SendMessage: (from: string, to: string, message: string) => void;
  succes: any;
}

const DataContext = createContext<DataContextInterface>(
  {} as DataContextInterface
);
interface DataProviderProps {
  children: ReactNode;
}
export const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState();
  const [user, setUser] = useState<any>();
  const [succes, setSucces] = useState<any>({
    send: "",
  });
  const AddUser = (email: string, password: string, username: string) => {
    axios
      .post(registerRoute, {
        email,
        password,
        username,
      })
      .then((el) => {
        console.log(el);
      });
  };

  useEffect(() => {
    axios.get(allUsersRoute).then((el) => {
      setData(el.data);
    });
  }, []);
  const Login = (username: any, password: any) => {
    axios
      .post(loginRoute, {
        username,
        password,
      })
      .then((el: any) => {
        if (typeof window !== "undefined" && el.data) {
          setUser(el.data.message);
          router.push("/chat");
        }
      })
      .catch((el) => console.log(el));
  };

  const SendMessage = (from: any, to: any, message: string) => {
    axios
      .post(sendMessageRoute, {
        from,
        to,
        message,
      })
      .then((el: any) => {
        setSucces({ send: el });
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
        user,
        SendMessage,
        succes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextInterface => useContext(DataContext);
