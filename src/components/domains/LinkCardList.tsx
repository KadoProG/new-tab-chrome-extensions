import { Button } from '@/components/common/button/Button';
import React from 'react';
import styles from '@/components/domains/LinkCardList.module.scss';

interface LinkCardListProps {
  links: Link[];
}

export const LinkCardList: React.FC<LinkCardListProps> = (props) => (
  <div className={styles.container}>
    {props.links.map((link) => (
      <div key={link.url} className={styles.item}>
        <Button href={link.url}>
          <div className={styles.item__top__button}>
            {link.imageUrl && <img src={link.imageUrl} alt={link.title} width={40} height={40} />}
            <p style={{ flex: 1 }}>{link.title}</p>
          </div>
        </Button>
      </div>
    ))}
  </div>
);
