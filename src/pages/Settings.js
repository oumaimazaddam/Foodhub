import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function Settings() {
   
    const [settings, setSettings] = useState(() => {
        const savedSettings = localStorage.getItem('settings');
        return savedSettings ? JSON.parse(savedSettings) : {
            "--background-color": "#fff",
            "--background-light": "#fff",
            "--primary-color": "rgb(255, 0, 86)",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "#0A0A0A",
            "--text-light": "#575757",
            "--font-size": "16px",
            "--animation-speed": 1
        };
    });

    useEffect(() => {
        
        const root = document.documentElement;
        for (let key in settings) {
            root.style.setProperty(key, settings[key]);
        }
    }, [settings]);

  
    useEffect(() => {
        localStorage.setItem('settings', JSON.stringify(settings));
    }, [settings]);

    const [theme, setTheme] = useState(() => {
        return settings["--background-color"] === "#fff" ? "light" : "dark";
    });

    const themes = [
        {
            "--background-color": "#fff",
            "--background-light": "#fff",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "#0A0A0A",
            "--text-light": "#575757"
        },
        {
            "--background-color": "rgb(29, 29, 29)",
            "--background-light": "rgb(77, 77, 77)",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "#ffffff",
            "--text-light": "#eceaea"
        }
    ];

    const primaryColors = [
        "rgb(255, 0, 86)",
        "rgb(33, 150, 243)",
        "rgb(255, 193, 7)",
        "rgb(0, 200, 83)",
        "rgb(156, 39, 176)",
        "rgb(124, 12, 230)"

    ];

    const fontSizes = [
        { title: "Small", value: "12px" },
        { title: "Medium", value: "16px" },
        { title: "Large", value: "20px" }
    ];

    const animationSpeeds = [
        { title: "Slow", value: 2 },
        { title: "Medium", value: 1 },
        { title: "Fast", value: 0.5 }
    ];

    const [primaryColor, setPrimaryColor] = useState(primaryColors.indexOf(settings["--primary-color"]));
    const [fontSize, setFontSize] = useState(fontSizes.findIndex(size => size.value === settings["--font-size"]));
    const [animationSpeed, setAnimationSpeed] = useState(animationSpeeds.findIndex(speed => speed.value === settings["--animation-speed"]));

    function changeTheme(i) {
        const _theme = { ...themes[i] };
        setTheme(i === 0 ? "light" : "dark");
        setSettings(prevSettings => ({ ...prevSettings, ..._theme }));
    }

    function changeColor(i) {
        const _color = primaryColors[i];
        setSettings(prevSettings => ({
            ...prevSettings,
            "--primary-color": _color
        }));
        setPrimaryColor(i);
    }

    function changeFontSize(i) {
        const _size = fontSizes[i];
        setSettings(prevSettings => ({
            ...prevSettings,
            "--font-size": _size.value
        }));
        setFontSize(i);
    }

    function changeAnimationSpeed(i) {
        const _speed = animationSpeeds[i];
        setSettings(prevSettings => ({
            ...prevSettings,
            "--animation-speed": _speed.value
        }));
        setAnimationSpeed(i);
    }

    return (
        <div>
            <div className="section d-block">
                <h2>Primary Theme</h2>
                <div className="options-container">
                    <div className="option light" onClick={() => changeTheme(0)}>
                        {theme === "light" && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        )}
                    </div>
                    <div className="option dark" onClick={() => changeTheme(1)}>
                        {theme === "dark" && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="section d-block">
                <h2>Preferred color</h2>
                <div className="options-container">
                    {primaryColors.map((color, index) => (
                        <div
                            key={index}
                            className="option light"
                            style={{ backgroundColor: color }}
                            onClick={() => changeColor(index)}
                        >
                            {primaryColor === index && (
                                <div className="check">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="section d-block">
                <h2>Font size</h2>
                <div className="options-container">
                    {fontSizes.map((size, index) => (
                        <button
                            key={index}
                            className="btn"
                            onClick={() => changeFontSize(index)}
                        >
                            {size.title}
                            {fontSize === index && <span><FontAwesomeIcon icon={faCheck} /></span>}
                        </button>
                    ))}
                </div>
            </div>
            <div className="section d-block">
                <h2>Animation speed</h2>
                <div className="options-container">
                    {animationSpeeds.map((speed, index) => (
                        <button
                            key={index}
                            className="btn"
                            onClick={() => changeAnimationSpeed(index)}
                        >
                            {speed.title}
                            {animationSpeed === index && <span><FontAwesomeIcon icon={faCheck} /></span>}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
