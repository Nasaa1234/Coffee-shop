import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
  useEffect,
} from "react";
import fetchData from "../utils/fetchData";
import { CardType } from "../interfaces/CardType";
interface DataContextInterface {
  goods: CardType[];
}

const DataContext = createContext<DataContextInterface>(
  {} as DataContextInterface
);
interface DataProviderProps {
  children: ReactNode;
}
export const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [goods, setGoods] = useState<CardType[]>([]);

  useEffect(() => {
    fetchData({
      path: "/goods",
      method: "GET",
    }).then((response) => setGoods(response));
  }, []);

  return (
    <DataContext.Provider value={{ goods }}>{children}</DataContext.Provider>
  );
};

export const UseData = (): DataContextInterface => useContext(DataContext);
