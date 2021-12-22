import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <div className={classes.items}>5 items left</div>
      <div className={classes.status}>
        <span className={classes.all}>All</span>
        <span className={classes.active}>Active</span>
        <span className={classes.completed}>Completed</span>
      </div>
      <div className={classes.clear}>
        Clear Completed
      </div>
    </div>
  )
}

export default Footer;
