import GET_DATA_API from "./urlApi";

const ROCKETS_END = 'rockets'

const fetchRocket = async () => {
  const apiData = await fetch(`${GET_DATA_API}${ROCKETS_END}`);
  const result = await apiData.json();
  return result;
};

export default fetchRocket;
  