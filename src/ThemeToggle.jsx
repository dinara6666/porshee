import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={"container"}>
            <div>
                <button onClick={toggleTheme} className="theme-button">
                    {theme === "light" ? "🌙 Темная тема" : "☀️ Светлая тема"}
                </button>
            </div>
        </div>
    );
};

export default ThemeToggle;