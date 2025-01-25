import axios from "axios";

interface FetchDataType {
  path: string;
  method: string;
  data?: object;
}

const fetchData = async ({ path, method, data }: FetchDataType) => {
  console.log("Fetching data");
  if (!path || !method) {
    throw new Error("Check method and path is exist");
  }
  if (method.toLocaleLowerCase() !== "get" && !data) {
    throw new Error("Please send data");
  }
  const response = await axios(`${"http://localhost:4943" + path}`, {
    method,
    data,
  }).catch((error) => {
    throw new Error(error);
  });
  return response.data;
};

export default fetchData;
