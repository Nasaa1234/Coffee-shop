/* eslint-disable react/react-in-jsx-scope */
import {createContext, useContext, useState, useEffect} from 'react';
import {instance} from '../utils/axios';

const DataContext = createContext({});

export const DataProvider = ({children}) => {
  const [data, setData] = useState();
  const [postId, setPostId] = useState(null);
  const [user, setUser] = useState(false);
  const [succes, setSucces] = useState({
    create: '',
    update: '',
    delete: '',
    comment: '',
    deleteComment: '',
    addPost: '',
  });

  const getPostId = id => {
    setPostId(id);
  };

  useEffect(() => {
    const getData = async () => {
      const res = await instance.get('/post');
      setData(res.data.message);
    };
    getData();
  }, [succes]);

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
      .put('/post/deleteComment', {
        commentId: index,
        postId: id,
      })
      .then(el => setSucces({...succes, deleteComment: el}));
  };

  const AddPost = ({title, description, image, body}) => {
    instance
      .post('addPost', {
        title,
        description,
        body,
        image,
      })
      .then(el => setSucces({...succes, addPost: el}));
  };

  return (
    <DataContext.Provider
      value={{
        DeleteComment,
        AddComment,
        data,
        succes,
        AddPost,
        postId,
        user,
        getPostId,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
