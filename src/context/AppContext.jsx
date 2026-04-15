

import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);
  const [toast, setToast] = useState("");

  const addEvent = (type, name) => {
    const newEvent = {
      id: Date.now(),
      type,
      name,
      date: new Date().toLocaleDateString(),
    };

    setTimeline((prev) => [newEvent, ...prev]);

    setToast(`${type} with ${name}!`);

    setTimeout(() => {
      setToast("");
    }, 2000);
  };

  return (
    <AppContext.Provider value={{ timeline, addEvent, toast }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;