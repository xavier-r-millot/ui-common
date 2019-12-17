import styled from 'styled-components'

const halfPanelOffset = "14px";

const Dims = {
  containerPaddingVert: "12px",
  containerPaddingHor: "16px",
};

const ThemePage = styled.div`
  background: ${p => p.theme.colors.primaryColor};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const ModalLayout = styled.div`
  padding: 14px 20px 14px 20px;
  width: 580px;
  height: 700px;
`;

const ContentContainer = styled.div`
  position: absolute;
  padding: ${Dims.containerPaddingVert} ${Dims.containerPaddingHor};
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  background: ${p => p.theme.colors.contrastColor};
`;

const LeftPanel = styled(ContentContainer)`
  position: absolute;
  width: calc(50% - calc(${halfPanelOffset} * 1.5));
  left: ${halfPanelOffset};
  top: ${halfPanelOffset};
  height: 97%;
`;

const RightPanel = styled(ContentContainer)`
  position: absolute;
  width: calc(50% - calc(${halfPanelOffset} * 1.5));
  right: ${halfPanelOffset};
  top: ${halfPanelOffset};
  height: 97%;
`;

const FullWidthPanel = styled(ContentContainer)`
  left: 14px;
  right: 14px;
  min-height: 100%;
`;

const FullScreen = styled(ContentContainer)`
  position: absolute;
  left: ${halfPanelOffset};
  right: ${halfPanelOffset};
  top: ${halfPanelOffset};
  height: 97%;
`;

const TextLine = styled.div`
  margin-top: ${p => `${(p.low) * 12}px`};
  display: flex;
  justify-content: start;
  width: 100%;
  align-items: ${p => p.center ? 'center' : 'stretch'};
`;

const BigCodeViewer = styled.div`
  margin-top: 18px;
  padding: 20px 12px;
  border-radius: 4px;
  max-height: ${p => p.maxHeight};
  overflow-y: scroll;
  background: ${p => p.theme.colors.primaryColor};
`;

const SlimCodeViewer = styled(BigCodeViewer)`
  margin-top: 18px;
  padding: 11px 12px;
`;

const Div = styled.div`
  margin-top: ${p => `${(p.top || 0) * 12}px`};
  margin-right: ${p => `${(p.right || 0) * 12}px`};
  margin-bottom: ${p => `${(p.bottom || 0) * 12}px`};
  margin-left: ${p => `${(p.left || 0) * 12}px`};
`;

const Layout = {
  Div,
  ContentContainer,
  SlimCodeViewer,
  LeftPanel,
  RightPanel,
  TextLine ,
  FullWidthPanel,
  BigCodeViewer,
  ModalLayout,
  Dims,
  halfPanelOffset,
  ThemePage,
  FullScreen
};
export default Layout;