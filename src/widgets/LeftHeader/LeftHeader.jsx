import React from 'react';
import S from './LeftHeaderStyles'

export default class LeftHeader extends React.Component<Props> {

  render(){
    return(
      <S.Container>
        { this.renderGraphic() }
        <S.TextBox>
          <S.Title>{this.props.title}</S.Title>
          <S.SubTitle>{this.props.subtitle}</S.SubTitle>
        </S.TextBox>
      </S.Container>
    )
  }

  renderGraphic() {
    if(this.props.graphicType === 'icon')
      return this.renderMaterialIcon();
    else if(this.props.graphicType === 'image')
      return this.renderImage();
    else if(this.props.graphicType === 'stub')
      return this.renderStub();
  }

  renderMaterialIcon(){
    return(
      <S.Icon className='material-icons'>
        { this.props.graphicName }
      </S.Icon>
    )
  }

  renderImage(){
    const source = this.props.graphicName;
    return <S.Image src={source} alt={null}/>;
  }

  renderStub(){
    return <S.ImageStub/>;
  }

  static defaultProps = {
    graphicType: 'image'
  };
}

type Props = {
  title: string,
  subtitle: any,
  graphicType: ?string,
  graphicName: string,
};
