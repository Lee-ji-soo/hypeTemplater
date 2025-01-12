import { useEffect, useState } from "react";
import { GlobalTheme, MainTheme } from "@/styles/GlobalTheme";

const useDarkMode = () => {
  const [colorTheme, setColorTheme] = useState<MainTheme | null>(null);

  function setColorMode(mode: MainTheme) {
    if (mode === GlobalTheme.light) {
      document.body.dataset.theme = "light";
      window.localStorage.setItem("theme", "light");
    } else {
      document.body.dataset.theme = "dark";
      window.localStorage.setItem("theme", "dark");
    }
    setColorTheme(mode);
  }

  function setToggleTheme() {
    colorTheme === GlobalTheme.light
      ? setColorMode(GlobalTheme.dark)
      : setColorMode(GlobalTheme.light);
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");

    window.matchMedia("(prefers-color-scheme:dark)").matches && !localTheme
      ? setColorMode(GlobalTheme.dark)
      : localTheme === "dark"
      ? setColorMode(GlobalTheme.dark)
      : setColorMode(GlobalTheme.light);
  }, []);

  return { colorTheme, setToggleTheme };
};

export default useDarkMode;
