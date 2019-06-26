import React from 'react';

export const COMPLETED = "Completed";
export const ALL = "All";
export const ACTIVE = "Active";

function Footer(props) {

  return (
    <footer className={"footer " + (!props.length ? "hidden" : "")}>
      <div className="footer__item">
        <p>{props.counter} items left</p>
      </div>
      <div className="footer__item" onClick={props.onclick}>
        <button name={ALL} className={"footer-item__btn " + (props.selected === ALL ? "selected" : "")}>All</button>
        <button name={ACTIVE} className={"footer-item__btn " + (props.selected === ACTIVE ? "selected" : "")}>Active</button>
        <button name={COMPLETED} className={"footer-item__btn " + (props.selected === COMPLETED ? "selected" : "")}>Completed</button>
      </div>
      <div className="footer__item">
        <button className="footer-item__btn" onClick={props.onDeleteClick}> Clear completed</button>
      </div>
    </footer>
  )
}

export default Footer;