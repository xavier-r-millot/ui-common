export const theme = {
  colors: {
    primaryColor: "#233142",
    primaryFont: "#5c6070",
    primaryFontMuted: "#FFFFFF48",
    primaryFontLess: "#5c6070",
    contrastColor: '#FFFFFF',
    contrastFont: "#FFFFFF",
    contrastLessFont: "#acb2c1",
    secondaryColor: "#455D7A",
    contentBackgroundColor: "#e1e3e8",
    itemBackgroundColor: "white",
    lineColor: "#455D7A",
    pleasant: "#535b77",
    success: "#326342",
    fail: "darkred",
    warn: "tomato",
    warn2: "orange",
    warnSoft: "#F6AE2D",
    disabled: "#cecece"
  },

  dims: {
    topBarHeight: "0px",
    sideBarWidth: "220px",
    tableBorderWidth: "1.5px",

  },

  ali: (name) => {
    name = (name || '').toLowerCase();
    if(name === 'success') return 'success';
    if(name === 'good') return 'success';
    if(name === 'connected') return "success";
    if(name === 'running') return "success";
    if(name === 'true') return "success";
    if(name === 'fail') return 'fail';
    if(name === 'failure') return 'fail';
    if(name === 'error') return 'fail';
    if(name === 'terminating') return 'fail';
    if(name === 'terminated') return 'fail';
    if(name === 'failed') return 'fail';
    if(name === 'unknown') return 'primaryFontMuted';
    if(name === 'idle') return 'primaryFontLess';
    if(name === 'pending') return 'secondaryColor';
    return 'primaryColor';
  },
};

export function colored(name){
  if(name){
    if(theme.colors[name]) return theme.colors[name];
    const color = theme.ali(name);
    return theme.colors[color];
  } else return theme.colors.primaryColor;
}

export function colorContrast(name){
  const useName = theme.colors[name] ? name : theme.ali(name);
  if(['contrastFont', 'contentBackgroundColor'].includes(useName)){
    return colored("primaryColor");
  } else return colored("contrastFont");
}

