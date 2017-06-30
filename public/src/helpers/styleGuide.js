export const COLOR_FILL = '#FFFFFF';
export const COLOR_WARNING = '#F96A5C';
export const COLOR_LIGHT_WHITE = 'rgba(255, 255, 255, 0.5)';
export const COLOR_LIGHT_BLACK = 'rgba(0, 0, 0, .5)';
export const COLOR_LIGHT_GRAY = '#EEEEEE';

export const SPACING_MEDIUM = '1rem';
export const SPACING_SMALL = '0.7rem';
export const SPACING_XSMALL = '0.4rem';
export const FONT_SIZE_MEDIUM = '1rem';
export const FONT_SIZE_LARGE = '1.5rem';
export const BORDER_RADIUS_MEDIUM = '7px';

const colorPallete = {
    mainBg: '#7982ec', // Soft Blue
    acceptedBg: '##82ec79', // soft lime-green
    rejectedBg: '#ec7982', // soft red 
    altBg: '#79ece3' // atlernatve / nav background soft cyan
}

export const wrapper = {
  background: colorPallete.mainBg,
  minHeight: '100vh',
  fontFamily: 'Cabin',
  display: 'flex',
  flexDirection: 'column'
};

export const container = {
  padding: SPACING_MEDIUM,
  flex: 1
};

export const cushion = {
  marginBottom: SPACING_MEDIUM
};

export const rounded = {
  borderRadius: BORDER_RADIUS_MEDIUM
};

export const verticalAlignmentFix = {
  verticalAlign: 'middle'
};

export const input = {
  border: '0',
  width: '100%',
  maxWidth: '100%',
  padding: `${SPACING_SMALL} ${SPACING_MEDIUM}`,
  fontSize: FONT_SIZE_MEDIUM,
  ...rounded,
  ...verticalAlignmentFix
};

export const button = {
  background: COLOR_LIGHT_WHITE,
  color: COLOR_LIGHT_BLACK,
  padding: `${SPACING_SMALL} ${SPACING_MEDIUM}`,
  display: 'block',
  textAlign: 'center',
  ...rounded
};

export const emphasis = {
  fontStyle: 'italic'
};

export const subtle = {
  color: COLOR_LIGHT_BLACK
};

export const alignRight = {
  textAlign: 'right'
};

export const centerSpaced = {
  display: 'flex',
  alignItems: 'center'
};

export const spaceBetween = {
  display: 'flex',
  justifyContent: 'space-between'
};

export const corner = {
  position: 'fixed',
  bottom: SPACING_MEDIUM,
  right: SPACING_MEDIUM
};

export const listItem = {
   display: 'flex',
    flexDirection: 'column',
    width: '90%',
    background: 'white',
    padding: '1em',
    margin: '1em'
}
export const centerText = {
  textAlign: 'center'
}

export const userDetailsFlexbox = {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '400px',
    alignItems: 'center',
}

export const profileDiv = {
  backgroundColor: 'yellow'
}
export const divPadding = {
  padding: '1.125em'
}