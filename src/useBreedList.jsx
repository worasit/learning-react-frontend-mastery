import { useEffect, useState } from "react";

const localCache = {};
export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  const requestBreedList = async () => {
    setBreedList([]);
    setStatus("loading");

    const response = await fetch(
      `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
    );
    const json = await response.json();
    localCache[animal] = json.breeds || [];
    setBreedList(localCache[animal]);
    setStatus("loaded");
  };

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }
  }, [animal]);

  return [breedList, status];
}
