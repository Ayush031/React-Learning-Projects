import React, { useEffect, useState } from "react";
import Card from "./Components/Card.jsx";
import ThemeBtn from "./Components/ThemeBtn.jsx";
import { ThemeProvider } from "./contexts/theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightMode = () => setThemeMode("light");
  const darkMode = () => setThemeMode("dark");

  useEffect(() => {
    const htmlElement = document.querySelector("html").classList;
    htmlElement.remove("light", "dark");
    htmlElement.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
        <div className="flex flex-wrap min-h-screen items-center bg-neutral-300 dark:bg-slate-600">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>
            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
