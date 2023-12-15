// ThemePicker.js

import { useState } from "react";

const ThemePicker = ({ handleThemeChange, store, selectedTheme }) => {
  const themes = [
    "ffffff",
    "8B008B",
    "006400",
    "C0A204",
    "00008B",
    "4B0082",
    "8B4513",
    "2F4F4F",
    "000000",
    "484444",
  ];
  const [selectField, setSelectField] = useState(false);
  // const [selectTheme, setSelectedTheme] = useState(false)
  const handleThemes = () => {
    setSelectField(!selectField);
  };
  //console.log(store.theme)
  return (
    <div className="lg:col-span-2 mb-4 cursor-pointer">
      <h2 className="font-semibold mb-2">Theme</h2>
      <div
        className="border border-gray-300 rounded-[5px] h-10 flex items-center px-5 opacity-70"
        onClick={handleThemes}
      >
        {store.theme ? "Click to Change Theme" : "Click to pick a theme"}
      </div>
      <div>
        {selectField && (
          <div className="bg-[rgba(255,255,255,0.5)] mt-4 rounded-md shadow-md   h-auto px-5 py-7 gap-2 gap-y-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 place-items-center justify-center">
            {themes.map((theme, index) => (
              <button
                type="button"
                key={index}
                className={`rounded-md shadow-md w-12 h-12  sm:w-16 sm:h-16 ${
                  (selectedTheme === theme &&
                    " shadow-xl scale-[1.15] transition-all duration-[600ms] ease-in-out") ||
                  (store.theme === theme &&
                    "border-[2px] border-orange shadow-xl scale-[1.05]")
                }`}
                style={{ backgroundColor: "#" + theme, cursor: "pointer" }}
                onClick={() => handleThemeChange(theme)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemePicker;
