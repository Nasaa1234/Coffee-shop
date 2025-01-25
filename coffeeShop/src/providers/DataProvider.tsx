import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
  useEffect,
} from 'react';
import type {Dispatch, SetStateAction} from 'react';
import {CardType, MoreInc, OrderType} from '../interfaces';
import fetchData from '../utils/FecthData';
import {useAuth} from './index';
interface DataContextInterface {
  bagItems?: CardType[];
  setBag: Dispatch<SetStateAction<any>>;
  goods: CardType[];
  addItem: (item: CardType, moreInc: MoreInc) => void;
  removeItem: (id: number) => void;
  totalAmount: number;
  orderItems: OrderType;
  getSuccess: (items: any) => void;
}

const DataContext = createContext<DataContextInterface>(
  {} as DataContextInterface,
);
interface DataProviderProps {
  children: ReactNode;
}
export const DataProvider: FC<DataProviderProps> = ({children}) => {
  const {user} = useAuth();
  const [goods, setGoods] = useState<CardType[]>([]);
  const [bagItems, setBag] = useState<any[]>([]);
  const [totalAmount, setTotal] = useState<number>(0);
  const [succes, setSuccess] = useState<any>();

  const [orderItems, setOrder] = useState<OrderType>({
    Processing: [],
    Success: [],
    Canceled: [],
  });

  useEffect(() => {
    bagItems?.map(el => {
      setTotal(prev => prev + el.price);
    });
  }, [bagItems]);

  useEffect(() => {
    fetchData({
      path: `/user/${user}`,
      method: 'GET',
    }).then(response => {
      setOrder({
        Processing: response?.processing,
        Success: response?.success,
        Canceled: response?.cancelled,
      });
    });
  }, [user, succes]);

  useEffect(() => {
    fetchData({
      path: '/goods',
      method: 'GET',
    }).then(response => {
      setGoods(response);
    });
  }, []);

  const addItem = (item: CardType, moreInc: MoreInc) => {
    setBag(bagItems.concat({...item, moreInc}));
    fetchData({
      path: '/order/process',
      method: 'POST',
      data: {
        order: [{orderId: item._id, quantity: 1}],
      },
    }).then(response => {
      fetchData({
        path: `/user/${user}`,
        method: 'PUT',
        data: {
          process: response.processId,
        },
      }).then(finish => {
        setSuccess(finish);
      });
    });
  };

  const removeItem = (id: number) => {
    setBag([...bagItems.filter((_, index: number) => index !== id)]);
    fetchData({
      path: `/user/delete/${user}`,
      method: 'PUT',
      data: {
        type: 'all',
      },
    }).then(el => setSuccess(el));
  };

  const getSuccess = items => {
    const order = items.map(el => {
      return {orderId: el._id, quantity: 1};
    });
    fetchData({
      path: '/order/succes',
      method: 'POST',
      data: {
        order: order,
      },
    }).then(response => {
      fetchData({
        path: `/user/${user}`,
        method: 'PUT',
        data: {
          success: response.succesId,
        },
      }).then(() => {
        setBag([]);
        fetchData({
          path: `/user/delete/${user}`,
          method: 'PUT',
          data: {
            type: 'all',
          },
        }).then(el => setSuccess(el));
      });
    });
  };

  return (
    <DataContext.Provider
      value={{
        bagItems,
        setBag,
        goods,
        addItem,
        removeItem,
        totalAmount,
        orderItems,
        getSuccess,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export const UseData = (): DataContextInterface => useContext(DataContext);
