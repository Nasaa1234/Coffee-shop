/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createContext, useContext, useState, useEffect} from 'react';
import {instance} from '../utils/axios';

const DataContext = createContext({});

export const DataProvider = ({children}) => {
  'CHIULD: ', children);
  const [data, setData] = useState([]);
  const [succes, setSucces] = useState({
    create: '',
    update: '',
    delete: '',
    comment: '',
    deleteComment: '',
  });
  const [error, setError] = useState({
    create: '',
    update: ' ',
    delete: '',
  });

  useEffect(() => {
    instance
      .get('/posts')
      .then(el => {
        setData(el.data);
      })
      .catch(err => setError(err));
  }, [succes]);

  const Create = (title, description, image, body) => {
    instance
      .post('/posts', {
        title,
        description,
        image,
        body,
      })
      .then(el => {
        setSucces({...succes, create: el});
      })
      .catch(el => 'err', el));
  };

  const AddComment = (text, id) => {
    instance
      .put('/post/writeComment', {
        comments: text,
        postId: id,
      })
      .then(el => setSucces({...succes, comment: el}));
  };

  const DeleteComment = (index, id) => {
    instance
      .delete('/post/deleteComment', {
        commentId: index,
        postId: id,
      })
      .then(el => setSucces({...succes, deleteComment: el}));
  };

  <NavigationContainer>
    <DataContext.Provider
      value={{
        data,
        setData,
        Create,
        error,
        succes,
        DeleteComment,
        AddComment,
      }}>
      {children}
    </DataContext.Provider>
    ;
  </NavigationContainer>;
};

export const useData = () => useContext(DataContext);
