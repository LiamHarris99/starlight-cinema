import { createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';
import { image } from '../../../utils/constants';
import globalTheme from '../../../theme';

const MuiCssBaseLine = {
  styleOverrides: {
    footer: {
      width: '100%',
      color: globalTheme.otherColors.white,
      fontSize: '0.7rem',
      background: `url(${image.bgs2.url})`
    }
  }
};

const MuiStack = {
  defaultProps: {
    direction: 'row',
    justifyContent: 'space-around'
  },
  variants: [
    {
      props: {
        variant: 'footer-content'
      },
      style: {
        padding: '3rem 0'
      }
    }
  ]
};

const MuiTypography = {
  variants: [
    {
      props: {
        variant: 'underline'
      },
      style: {
        textDecoration: 'underline',
        cursor: 'pointer',
        marginLeft: '0.5rem'
      }
    },
    {
      props: {
        variant: 'title-list'
      },
      style: {
        textTransform: 'uppercase',
        fontWeight: 300,
        marginBottom: '0.5rem',
        fontSize: '1rem',
        color: globalTheme.palette.primary.main
      }
    },

    {
      props: {
        variant: 'copyright'
      },
      style: {
        color: globalTheme.palette.primary.main,
        fontSize: 'inherit'
      }
    }
  ]
};

const MuiLink = {
  variants: [
    {
      props: {
        variant: 'footer-links'
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        columnGap: '0.2rem',
        fontSize: 'inherit',
        color: 'inherit',

        '&:hover': {
          color: globalTheme.palette.primary.main
        }
      }
    },
    {
      props: {
        variant: 'logo'
      },
      style: {
        display: 'block',
        marginBottom: '0.5rem'
      }
    }
  ]
};

const MuiButtonGroup = {
  styleOverrides: {
    root: {
      width: '100%',
      columnGap: '1rem',
      marginTop: '1rem'
    }
  }
};

const MuiListItemIcon = {
  styleOverrides: {
    root: {
      minWidth: 'auto',
      color: globalTheme.otherColors.black
    }
  }
};

const MuiListItemButton = {
  styleOverrides: {
    root: {
      columnGap: '0.5rem'
    }
  }
};

const footerTheme = createTheme(globalTheme, {
  components: {
    MuiCssBaseline: { ...MuiCssBaseLine },
    MuiStack: { ...MuiStack },
    MuiTypography: { ...MuiTypography },
    MuiLink: { ...MuiLink },
    MuiButtonGroup: { ...MuiButtonGroup },
    MuiListItemButton: { ...MuiListItemButton },
    MuiListItemIcon: { ...MuiListItemIcon }
  },
  typography: {
    body1: {
      fontSize: '0.6rem'
    }
  }
});

export default footerTheme;
