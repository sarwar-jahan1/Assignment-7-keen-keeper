import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addEvent = (type, friendName) => {
    const newEvent = {
      id: Date.now(),
      type,
      name: friendName,
      date: new Date().toLocaleDateString(),
    };

    setTimeline((prev) => [newEvent, ...prev]);
  };

  return (
    <AppContext.Provider value={{ timeline, addEvent }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;