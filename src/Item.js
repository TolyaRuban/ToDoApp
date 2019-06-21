import React from 'react';

function Item(props) {
  const { id, text, checked, onChange, i, handleDelete } = props;
  const index = i;
  return (
    // <li key={id}>{text}</li>
    <li key={id}>
      <div className="list-item">
        <div className="list-item__check">
          <input
            id={i}
            // name="complite-"
            className={"list-item__check-box " + (checked ? "text--through" : "")}
            type="checkbox"
            checked={checked}
            onChange={onChange}
          />
          <label
            htmlFor={i}
          />
        </div>
        <div className={"list-item__text " + (checked ? "text--through" : "")}>{text}</div>
        <div className="list-item__delete" onClick={() => handleDelete(index)}> ✕ </div>
      </div>
    </li>
  )
}

export default Item;