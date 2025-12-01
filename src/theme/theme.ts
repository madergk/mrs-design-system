/**
 * Material UI Theme Configuration
 *
 * This file creates a Material UI theme using the design tokens from Figma.
 * The theme is structured to match Material UI's theme API and can be used
 * with ThemeProvider to style all components.
 */

import type { ThemeOptions } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import {
  semanticColors,
  typographyVariants,
  primitiveTypography,
  primitiveRadius,
  primitiveBreakpoints,
  primitiveZIndex,
  primitiveTransitions,
  componentTokens,
} from './designTokens';

/**
 * Theme configuration options
 * Maps design tokens to Material UI theme structure
 */
const themeOptions: ThemeOptions = {
  // ============================================================================
  // PALETTE (Colors)
  // ============================================================================
  palette: {
    primary: {
      main: semanticColors.primary.main,
      dark: semanticColors.primary.dark,
      contrastText: semanticColors.primary.contrastText,
      // Note: light will be calculated automatically by MUI
    },
    secondary: {
      main: semanticColors.secondary.main,
      contrastText: semanticColors.secondary.contrastText,
    },
    error: {
      main: semanticColors.error.main,
      contrastText: semanticColors.error.contrastText,
    },
    warning: {
      main: semanticColors.warning.main,
    },
    info: {
      main: semanticColors.info.main,
      contrastText: semanticColors.info.contrastText,
    },
    success: {
      main: semanticColors.success.main,
      contrastText: semanticColors.success.contrastText,
    },
    background: {
      default: semanticColors.background.default,
      paper: semanticColors.background.paper.elevation0,
    },
    text: {
      primary: semanticColors.text.primary,
      secondary: semanticColors.text.secondary,
    },
    action: {
      active: semanticColors.action.active,
      selected: semanticColors.action.selected,
    },
    divider: semanticColors.divider,
  },

  // ============================================================================
  // TYPOGRAPHY
  // ============================================================================
  typography: {
    fontFamily: [
      primitiveTypography.fontFamily.base,
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    fontSize: 14, // Base font size (used for rem calculations)
    htmlFontSize: 16, // Default browser html font size

    // Typography variants - Headings
    h1: {
      fontFamily: typographyVariants.h1.fontFamily,
      fontSize: `${typographyVariants.h1.fontSize}rem`,
      fontWeight: typographyVariants.h1.fontWeight,
      lineHeight: typographyVariants.h1.lineHeight,
    },
    h2: {
      fontFamily: typographyVariants.h2.fontFamily,
      fontSize: `${typographyVariants.h2.fontSize}rem`,
      fontWeight: typographyVariants.h2.fontWeight,
      lineHeight: typographyVariants.h2.lineHeight,
    },
    h3: {
      fontFamily: typographyVariants.h3.fontFamily,
      fontSize: `${typographyVariants.h3.fontSize}rem`,
      fontWeight: typographyVariants.h3.fontWeight,
      lineHeight: typographyVariants.h3.lineHeight,
    },
    h4: {
      fontFamily: typographyVariants.h4.fontFamily,
      fontSize: `${typographyVariants.h4.fontSize}rem`,
      fontWeight: typographyVariants.h4.fontWeight,
      lineHeight: typographyVariants.h4.lineHeight,
    },
    h5: {
      fontFamily: typographyVariants.h5.fontFamily,
      fontSize: `${typographyVariants.h5.fontSize}rem`,
      fontWeight: typographyVariants.h5.fontWeight,
      lineHeight: typographyVariants.h5.lineHeight,
    },
    h6: {
      fontFamily: typographyVariants.h6.fontFamily,
      fontSize: `${typographyVariants.h6.fontSize}rem`,
      fontWeight: typographyVariants.h6.fontWeight,
      lineHeight: typographyVariants.h6.lineHeight,
    },
    // Typography variants - Subtitles
    subtitle1: {
      fontFamily: typographyVariants.subtitle1.fontFamily,
      fontSize: `${typographyVariants.subtitle1.fontSize}rem`,
      fontWeight: typographyVariants.subtitle1.fontWeight,
      lineHeight: typographyVariants.subtitle1.lineHeight,
    },
    subtitle2: {
      fontFamily: typographyVariants.subtitle2.fontFamily,
      fontSize: `${typographyVariants.subtitle2.fontSize}rem`,
      fontWeight: typographyVariants.subtitle2.fontWeight,
      lineHeight: typographyVariants.subtitle2.lineHeight,
    },
    // Typography variants - Body
    body1: {
      fontFamily: typographyVariants.body1.fontFamily,
      fontSize: `${typographyVariants.body1.fontSize}rem`,
      fontWeight: typographyVariants.body1.fontWeight,
      lineHeight: typographyVariants.body1.lineHeight,
    },
    body2: {
      fontFamily: typographyVariants.body2.fontFamily,
      fontSize: `${typographyVariants.body2.fontSize}rem`,
      fontWeight: typographyVariants.body2.fontWeight,
      lineHeight: typographyVariants.body2.lineHeight,
    },
    caption: {
      fontFamily: typographyVariants.caption.fontFamily,
      fontSize: `${typographyVariants.caption.fontSize}rem`,
      fontWeight: typographyVariants.caption.fontWeight,
      lineHeight: typographyVariants.caption.lineHeight,
    },
    button: {
      fontFamily: typographyVariants.button.medium.fontFamily,
      fontSize: `${typographyVariants.button.medium.fontSize}rem`,
      fontWeight: typographyVariants.button.medium.fontWeight,
      lineHeight: typographyVariants.button.medium.lineHeight,
      textTransform: 'none', // Material UI default is uppercase, but can be customized
    },
    // Typography variants - Other
    overline: {
      fontFamily: typographyVariants.overline.fontFamily,
      fontSize: `${typographyVariants.overline.fontSize}rem`,
      fontWeight: typographyVariants.overline.fontWeight,
      lineHeight: typographyVariants.overline.lineHeight,
      textTransform: typographyVariants.overline.textTransform,
    },
  },

  // ============================================================================
  // SPACING
  // ============================================================================
  spacing: 8, // Base spacing unit (8px) - matches primitiveSpacing[1]

  // ============================================================================
  // BREAKPOINTS
  // ============================================================================
  breakpoints: {
    values: {
      xs: primitiveBreakpoints.xs,
      sm: primitiveBreakpoints.sm,
      md: 900, // MUI default, not in Figma tokens
      lg: 1200, // MUI default, not in Figma tokens
      xl: 1536, // MUI default, not in Figma tokens
    },
  },

  // ============================================================================
  // SHAPE (Border Radius)
  // ============================================================================
  shape: {
    borderRadius: primitiveRadius.md, // Default border radius
  },

  // ============================================================================
  // Z-INDEX (Component Layering)
  // ============================================================================
  zIndex: {
    mobileStepper: primitiveZIndex.mobileStepper,
    speedDial: primitiveZIndex.speedDial,
    appBar: primitiveZIndex.appBar,
    drawer: primitiveZIndex.drawer,
    modal: primitiveZIndex.modal,
    snackbar: primitiveZIndex.snackbar,
    tooltip: primitiveZIndex.tooltip,
  },

  // ============================================================================
  // TRANSITIONS (Animations)
  // ============================================================================
  transitions: {
    duration: primitiveTransitions.duration,
    easing: primitiveTransitions.easing,
    // Note: createTheme() automatically provides theme.transitions.create() helper
  },

  // ============================================================================
  // COMPONENTS
  // ============================================================================
  components: {
    // Button component customization
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: typographyVariants.button.medium.fontFamily,
          fontSize: `${typographyVariants.button.medium.fontSize}rem`,
          fontWeight: typographyVariants.button.medium.fontWeight,
          lineHeight: typographyVariants.button.medium.lineHeight,
        },
        sizeSmall: {
          fontSize: `${typographyVariants.button.small.fontSize}rem`,
        },
        sizeLarge: {
          fontSize: `${typographyVariants.button.large.fontSize}rem`,
        },
      },
    },

    // Chip component customization
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: typographyVariants.chip.label.fontFamily,
          fontSize: `${typographyVariants.chip.label.fontSize}rem`,
          fontWeight: typographyVariants.chip.label.fontWeight,
          lineHeight: typographyVariants.chip.label.lineHeight,
        },
        deleteIcon: {
          color: componentTokens.chip.defaultCloseFill,
        },
      },
    },

    // TextField/Input component customization
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: typographyVariants.input.label.fontFamily,
          fontSize: `${typographyVariants.input.label.fontSize}rem`,
          fontWeight: typographyVariants.input.label.fontWeight,
          lineHeight: typographyVariants.input.label.lineHeight,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: typographyVariants.input.value.fontFamily,
          fontSize: `${typographyVariants.input.value.fontSize}rem`,
          fontWeight: typographyVariants.input.value.fontWeight,
          lineHeight: typographyVariants.input.value.lineHeight,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: typographyVariants.input.helper.fontFamily,
          fontSize: `${typographyVariants.input.helper.fontSize}rem`,
          fontWeight: typographyVariants.input.helper.fontWeight,
          lineHeight: typographyVariants.input.helper.lineHeight,
        },
      },
    },

    // Table component customization
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-head': {
            fontFamily: typographyVariants.table.header.fontFamily,
            fontSize: `${typographyVariants.table.header.fontSize}rem`,
            fontWeight: typographyVariants.table.header.fontWeight,
            lineHeight: typographyVariants.table.header.lineHeight,
          },
        },
      },
    },

    // Alert component customization
    MuiAlert: {
      styleOverrides: {
        root: {
          '& .MuiAlertTitle-root': {
            fontFamily: typographyVariants.alert.title.fontFamily,
            fontSize: `${typographyVariants.alert.title.fontSize}rem`,
            fontWeight: typographyVariants.alert.title.fontWeight,
            lineHeight: typographyVariants.alert.title.lineHeight,
          },
        },
        message: {
          fontFamily: typographyVariants.alert.description.fontFamily,
          fontSize: `${typographyVariants.alert.description.fontSize}rem`,
          fontWeight: typographyVariants.alert.description.fontWeight,
          lineHeight: typographyVariants.alert.description.lineHeight,
        },
      },
    },

    // Avatar component customization
    MuiAvatar: {
      styleOverrides: {
        root: {
          '& .MuiAvatar-fallback': {
            fontFamily: typographyVariants.avatar.initialsMd.fontFamily,
            fontSize: `${typographyVariants.avatar.initialsMd.fontSize}rem`,
            fontWeight: typographyVariants.avatar.initialsMd.fontWeight,
            lineHeight: typographyVariants.avatar.initialsMd.lineHeight,
          },
        },
      },
    },

    // Rating component customization
    MuiRating: {
      styleOverrides: {
        iconFilled: {
          color: componentTokens.rating.activeFill,
        },
        iconEmpty: {
          color: componentTokens.rating.enabledBorder,
        },
      },
    },
  },
};

/**
 * Create and export the Material UI theme
 */
export const theme = createTheme(themeOptions);

/**
 * Type export for theme
 */
export type AppTheme = typeof theme;
