import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import React, { useRef } from 'react';
// import { useState } from 'react'

// const Form = ({ onSubmit }) => {
//   const [value, setValue] = useState('');
//   const handleSubmit = event => {
//     event.preventDefault();
//     if (!value.trim()) {
//       return;
//     }
//     onSubmit(value);
//     setValue('');

//   };

//   return (
//     <form className={style.form} onSubmit={handleSubmit}>
//       <button className={style.button} type="submit">
//         <FiSearch size="16px" />
//       </button>

//       <input
//         className={style.input}
//         placeholder="What do you want to write?"
//         name="search"
//         required
//         autoFocus
//         value={value}
//         onChange={event => {
//           setValue(event.target.value);
//         }}
//       />
//     </form>
//   );
// };

const Form = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();

    const inputValue = event.target.elements['search'].value;
    if (!inputValue.trim()) return;
    onSubmit(inputValue);
    event.target.reset(); // очищає інпут після сабміту
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
