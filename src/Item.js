import React from 'react';

function Item(props) {
  const { id, text, checked, onChange, i } = props;
  return (
    // <li key={id}>{text}</li>
    <li key={id}>
      <div className="list-item">
        <div className="list-item__check">
          <input
            id={i}
            // name="complite-"
            className="list-item__check-box"
            type="checkbox"
            checked={checked}
            onChange={onChange}
          />
          <label
            htmlFor={i}
          />
        </div>
        <div className="list-item__text">{text}</div>
        <div className="list-item__delete"></div>
      </div>
    </li>
  )
}

export default Item;