import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <div className={classes.items}>5 items left</div>
      <div className={classes.status}>
        <span>All</span>
        <span>Active</span>
        <span>Completed</span>
      </div>
      <div className={classes.clear}>
        Clear Completed
      </div>
    </div>
  )
}

export default Footer;
