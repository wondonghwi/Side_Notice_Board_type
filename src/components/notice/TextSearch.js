import React, { useCallback, useState } from 'react';
import { MdSearch } from "react-icons/md";

const TextSearch = ({name, placeholder}) => {

  const [text, setText] = useState('');

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const handleClick = useCallback(() => {
    alert(`${text} 검색`);
    setText('');
  }, [text]);

  const handleKeyPress = useCallback((e) => {
    console.log(e.key)
    if (e.key === 'Enter') {
      handleClick();
    }
  }, [handleClick]);

  return (
    <span>
      <input type="text"
             name={name}
             onChange={handleChange}
             value={text}
             onKeyPress={handleKeyPress}
             placeholder={placeholder}
      />
      <button>
        <MdSearch onClick={handleClick}/>
      </button>
    </span>
  );
};

export default React.memo(TextSearch);
