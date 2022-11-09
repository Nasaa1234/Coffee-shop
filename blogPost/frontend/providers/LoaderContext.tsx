import React, { createContext, useContext, useState } from "react";
export const LoaderContext = createContext<any>({});

export const LoaderProvider = (props: any) => {
  const { children } = props;
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("Уншиж байна...");

  const setLoader = (props: any) => {
    setLoading(props);
  };

  const setMessage = (props: any) => {
    setContent(props);
  };

  return (
    <LoaderContext.Provider value={{ setLoader, setMessage, loader: loading }}>
      {children}
      {loading && (
        <div className="d-flex flex-column justify-content-center">
          <div className="spinner-border" role="status"></div>
          <span className="">{content}</span>
        </div>
      )}
    </LoaderContext.Provider>
  );
};

export const useLoaderContext = () => useContext(LoaderContext);
