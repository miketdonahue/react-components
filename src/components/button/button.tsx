import React from 'react';
import styles from './button.module.css';

const Button = ({ children }: any) => {
  return (
    <div>
      <button className={styles.button}>{children}</button>
    </div>
  );
};

export { Button };
