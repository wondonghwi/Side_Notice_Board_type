import React, { useCallback, useState } from 'react';
import { MdSearch } from "react-icons/md";

//검색 버튼을 눌렀을때 해당 name으로 검색하기 위한 컴포넌트
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
