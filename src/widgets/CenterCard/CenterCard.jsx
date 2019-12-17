import React from 'react'
import S from './CenterCardStyles'

export default function CenterCard(props: Props){
  return(
    <S.Container size={props.size}>
      { props.children }
    </S.Container>
  );
}

type Props = {
  size: 'normal' | 'large';
  children: Array<any>
}

CenterCard.defaultProps = {
  size: 'normal'
};
