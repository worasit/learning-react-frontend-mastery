import { createContext } from "react";

const ThemeContext = createContext([
  "green",
  () => {
    /* TODO document why this arrow function is empty */
  },
]);

export default ThemeContext;
