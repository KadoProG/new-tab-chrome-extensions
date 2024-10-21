import React from 'react';
import styles from '@/components/domains/LinkButton.module.scss';
import { Link } from 'react-router-dom';

interface LinkButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  type?: HTMLButtonElement['type'];
  style?: React.CSSProperties;
  href?: string;
  children: React.ReactNode;
  onMouseDown: (e: React.MouseEvent) => void;
}

export const LinkButton: React.FC<LinkButtonProps> = (props) =>
  props.href ? (
    <Link to={props.href} className={styles.button}>
      {props.children}
    </Link>
  ) : (
    <button
      onMouseDown={props.onMouseDown}
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.type}
      className={styles.button}
    >
      {props.children}
    </button>
  );
