import { Button } from '@/components/common/button/Button';
import React from 'react';
import styles from '@/components/domains/LinkCardList.module.scss';
import { useLinkEditDialogContext } from '@/components/contexts/llinkEditDialog/useLinkEditDialogContext';

interface LinkCardListProps {
  links: Link[];
}

export const LinkCardList: React.FC<LinkCardListProps> = (props) => {
  const { edit } = useLinkEditDialogContext();
  return (
    <div className={styles.container}>
      {props.links.map((link) => (
        <div key={link.id} className={styles.item}>
          <Button href={link.url}>
            <div className={styles.item__top__button}>
              {link.imageUrl && <img src={link.imageUrl} alt={link.title} width={40} height={40} />}
              <p style={{ flex: 1 }}>{link.title}</p>
            </div>
          </Button>
          <Button
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: 40,
              height: 40,
              padding: 0,
              borderRadius: '50%',
            }}
            onClick={(e) => {
              e.stopPropagation();
              edit(link.id);
            }}
          >
            ⋮
          </Button>
        </div>
      ))}
      <div className={styles.item}>
        <Button onClick={() => edit()}>
          <div className={styles.item__top__button}>
            <p style={{ flex: 1 }}>追加</p>
          </div>
        </Button>
      </div>
    </div>
  );
};
