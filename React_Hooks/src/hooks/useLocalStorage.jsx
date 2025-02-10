import React, { useEffect, useState } from "react";

const useLocalStorage = (key, initialState) => {
  const [name, setName] = useState(
    localStorage.getItem(key) ? localStorage.getItem(key) : initialState
  );

  useEffect(() => {
    localStorage.setItem(key, name);
  }, [name, key]);

  return [name, setName];
};

export default useLocalStorage;
