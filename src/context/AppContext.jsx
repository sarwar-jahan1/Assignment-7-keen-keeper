// import { createContext, useState } from "react";

// export const AppContext = createContext();

// const AppProvider = ({ children }) => {
//   const [timeline, setTimeline] = useState([]);

//   const addEvent = (type, friendName) => {
//     const newEvent = {
//       id: Date.now(),
//       type,
//       name: friendName,
//       date: new Date().toLocaleDateString(),
//     };

//     setTimeline((prev) => [newEvent, ...prev]);
//   };

//   return (
//     <AppContext.Provider value={{ timeline, addEvent }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export default AppProvider;

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

    // 🔥 Toast message
    setToast(`${type} with ${name}!`);

    // auto hide after 2 sec
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