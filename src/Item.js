import React from 'react';

function Item(props) {
  const { id, text} = props;
  return (
    <li key={id}>{text}</li>
  )
}

export default Item;