import React from 'react';

function Footer(props) {

  return (
    <footer className={"footer " + (!props.length ? "hidden" : "")}>
      <div className="footer__item">
        <p>{props.length} items left</p>
      </div>
      <div className="footer__item" onClick={props.onclick}>
        <button name="All" className={"footer-item__btn " + (props.selected === "All" ? "selected" : "")}>All</button>
        <button name="Active" className={"footer-item__btn " + (props.selected === "Active" ? "selected" : "")}>Active</button>
        <button name="Completed" className={"footer-item__btn " + (props.selected === "Completed" ? "selected" : "")}>Completed</button>
      </div>
      <div className="footer__item">
        <button className="footer-item__btn"> Clear completed</button>
      </div>
    </footer>
  )
}

export default Footer;