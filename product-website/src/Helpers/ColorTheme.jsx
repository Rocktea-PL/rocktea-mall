import { useState, useEffect } from 'react';

export const ColorThemePicker = ({ themes, onThemeChange }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(localStorage.getItem('selectedTheme') || themes[0]);

  const handleThemeClick = (theme) => {
    onThemeChange(theme);
    setSelectedTheme(theme);
    localStorage.setItem('selectedTheme', theme);
    setShowPicker(false);
  };

  useEffect(() => {
    document.body.style.backgroundColor = selectedTheme;
  }, [selectedTheme]);

  return (
    <div style={{ position: 'fixed', top: '200px', right: '10px', zIndex: '999' }} className='bg-gray'>
      <button onClick={() => setShowPicker((prev) => !prev)}>
        🎨 Theme
      </button>
      {showPicker && (
        <div
          style={{
            position: 'absolute',
            top: '40px',
            right: '0',
            padding: '10px',
            backgroundColor: 'gray',
            border: '1px solid #ddd',
            borderRadius: '5px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {themes.map((theme, index) => (
            <div
              key={index}
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: theme,
                margin: '5px',
                cursor: 'pointer',
              }}
              onClick={() => handleThemeClick(theme)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
