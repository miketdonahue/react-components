import React from 'react';
import styles from './tooltip.module.css';

const Tooltip = ({ children }: any) => {
  return (
    <div>
      <p className={styles.tooltip}>{children}</p>
    </div>
  );
};

export { Tooltip };
