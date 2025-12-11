/**
 * Theme Factory
 *
 * Creates theme instances for light and dark modes
 */

import type { ThemeOptions, PaletteMode } from '@mui/material/styles';
import { createTheme as createMuiTheme } from '@mui/material/styles';
import {
  semanticColors,
  typographyVariants,
  primitiveTypography,
  primitiveRadius,
  primitiveBreakpoints,
  primitiveZIndex,
  primitiveTransitions,
  componentTokens,
  primitiveColors,
} from './designTokens';
import { hexToRgba, opacityValues } from './colorUtils';

/**
 * Get palette configuration for a given mode
 */
function getPaletteForMode(mode: PaletteMode): NonNullable<ThemeOptions['palette']> {
  if (mode === 'dark') {
    // Dark mode palette
    return {
      mode: 'dark',
      primary: {
        main: semanticColors.primary.main,
        dark: semanticColors.primary.dark,
        contrastText: primitiveColors.white,
      },
      secondary: {
        main: semanticColors.secondary.main,
        contrastText: hexToRgba(primitiveColors.white, opacityValues.highEmphasis),
      },
      error: {
        main: semanticColors.error.main,
        contrastText: primitiveColors.white,
      },
      warning: {
        main: semanticColors.warning.main,
      },
      info: {
        main: semanticColors.info.main,
        contrastText: primitiveColors.white,
      },
      success: {
        main: semanticColors.success.main,
        contrastText: primitiveColors.white,
      },
      background: {
        default: '#121212',
        paper: '#1e1e1e',
      },
      text: {
        primary: hexToRgba(primitiveColors.white, opacityValues.highEmphasis),
        secondary: hexToRgba(primitiveColors.white, opacityValues.mediumEmphasis),
      },
      action: {
        active: hexToRgba(primitiveColors.white, opacityValues.active),
        selected: hexToRgba(primitiveColors.white, opacityValues.divider),
      },
      divider: hexToRgba(primitiveColors.white, opacityValues.divider),
    };
  }

  // Light mode palette (default)
  return {
    mode: 'light',
    primary: {
      main: semanticColors.primary.main,
      dark: semanticColors.primary.dark,
      contrastText: semanticColors.primary.contrastText,
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
  };
}

/**
 * Create a theme for the given mode
 */
export function createAppTheme(mode: PaletteMode = 'light') {
  const themeOptions: ThemeOptions = {
    palette: getPaletteForMode(mode),
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
      fontSize: 14,
      htmlFontSize: 16,

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
        textTransform: 'none',
      },
      overline: {
        fontFamily: typographyVariants.overline.fontFamily,
        fontSize: `${typographyVariants.overline.fontSize}rem`,
        fontWeight: typographyVariants.overline.fontWeight,
        lineHeight: typographyVariants.overline.lineHeight,
        textTransform: typographyVariants.overline.textTransform,
      },
    },
    spacing: 8,
    breakpoints: {
      values: {
        xs: primitiveBreakpoints.xs,
        sm: primitiveBreakpoints.sm,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    shape: {
      borderRadius: primitiveRadius.md,
    },
    zIndex: {
      mobileStepper: primitiveZIndex.mobileStepper,
      speedDial: primitiveZIndex.speedDial,
      appBar: primitiveZIndex.appBar,
      drawer: primitiveZIndex.drawer,
      modal: primitiveZIndex.modal,
      snackbar: primitiveZIndex.snackbar,
      tooltip: primitiveZIndex.tooltip,
    },
    transitions: {
      duration: primitiveTransitions.duration,
      easing: primitiveTransitions.easing,
    },
    components: {
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
      MuiSelect: {
        styleOverrides: {
          root: {
            fontFamily: typographyVariants.input.value.fontFamily,
            fontSize: `${typographyVariants.input.value.fontSize}rem`,
            fontWeight: typographyVariants.input.value.fontWeight,
            lineHeight: typographyVariants.input.value.lineHeight,
          },
          icon: {
            color: semanticColors.text.primary,
            fontSize: 24,
          },
          // Disabled state
          disabled: {
            opacity: opacityValues.disabled,
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: `${primitiveRadius.md}px`,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: componentTokens.input.outlined.enabledBorder,
            },
            '&:hover:not(.Mui-disabled) .MuiOutlinedInput-notchedOutline': {
              borderColor: semanticColors.text.primary,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: semanticColors.primary.main,
              borderWidth: 2,
            },
            '&.Mui-error .MuiOutlinedInput-notchedOutline': {
              borderColor: semanticColors.error.main,
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            backgroundColor: componentTokens.input.filled.enabledFill,
            borderRadius: `${primitiveRadius.md}px ${primitiveRadius.md}px 0 0`,
            '&:hover:not(.Mui-disabled)': {
              backgroundColor: hexToRgba(primitiveColors.black, opacityValues.hover),
            },
            '&.Mui-focused': {
              backgroundColor: componentTokens.input.filled.enabledFill,
            },
            '&.Mui-error': {
              backgroundColor: hexToRgba(semanticColors.error.main, 0.04),
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&::before': {
              borderBottomColor: componentTokens.input.standard.enabledBorder,
            },
            '&:hover:not(.Mui-disabled)::before': {
              borderBottomColor: semanticColors.text.primary,
            },
            '&.Mui-focused::after': {
              borderBottomColor: semanticColors.primary.main,
            },
            '&.Mui-error::before': {
              borderBottomColor: semanticColors.error.main,
            },
            '&.Mui-error::after': {
              borderBottomColor: semanticColors.error.main,
            },
          },
        },
      },
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
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontFamily: typographyVariants.tooltip.label.fontFamily,
            fontSize: `${typographyVariants.tooltip.label.fontSize}rem`, // 0.625rem (10px)
            fontWeight: typographyVariants.tooltip.label.fontWeight,
            lineHeight: `${typographyVariants.tooltip.label.lineHeight}px`, // 14px
            backgroundColor: semanticColors.text.primary, // rgba(0,0,0,0.87) - dark background
            color: semanticColors.background.default, // white text
            padding: '4px 8px',
            borderRadius: '4px',
          },
          arrow: {
            color: semanticColors.text.primary, // Match tooltip background
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            // Medium size (default): 40px button, 24px icon, 8px padding
            width: 40,
            height: 40,
            padding: 8,
            borderRadius: primitiveRadius.rounded, // Fully rounded (999px)
            '& .MuiSvgIcon-root': {
              fontSize: 24, // Icon size is always 24px
            },
            // Enabled state: no background
            backgroundColor: 'transparent',
            // Hover state
            '&:hover': {
              backgroundColor: hexToRgba(primitiveColors.black, opacityValues.hover), // rgba(0,0,0,0.08)
              padding: 4,
            },
            // Focus state
            '&:focus-visible': {
              backgroundColor: hexToRgba(primitiveColors.black, opacityValues.focus), // rgba(0,0,0,0.08)
              padding: 4,
            },
            // Disabled state
            '&.Mui-disabled': {
              '& .MuiSvgIcon-root': {
                opacity: opacityValues.disabled, // 38% opacity
                color: primitiveColors.black,
              },
            },
          },
          // Color variants
          colorPrimary: {
            '& .MuiSvgIcon-root': {
              color: semanticColors.primary.main, // #00686f
            },
            '&:hover': {
              backgroundColor: semanticColors.primary.states.hover, // rgba(0,153,153,0.12) = #0099991f
            },
            '&:focus-visible': {
              backgroundColor: semanticColors.primary.states.hover, // rgba(0,153,153,0.12) = #0099991f
            },
            '&.Mui-disabled': {
              '& .MuiSvgIcon-root': {
                color: primitiveColors.black,
              },
            },
          },
          colorError: {
            '& .MuiSvgIcon-root': {
              color: semanticColors.error.main, // #ab1a1a
            },
            '&:hover': {
              backgroundColor: hexToRgba(semanticColors.error.main, 0.04), // rgba(211,47,47,0.04)
            },
            '&:focus-visible': {
              backgroundColor: hexToRgba(semanticColors.error.main, 0.3), // rgba(211,47,47,0.3)
            },
            '&.Mui-disabled': {
              '& .MuiSvgIcon-root': {
                color: primitiveColors.black,
              },
            },
          },
          colorInherit: {
            '& .MuiSvgIcon-root': {
              color: '#212121', // Dark gray for inherit
            },
            '&:hover': {
              backgroundColor: hexToRgba('#212121', 0.04), // rgba(33,33,33,0.04)
            },
            '&:focus-visible': {
              backgroundColor: hexToRgba('#212121', 0.3), // rgba(33,33,33,0.3)
            },
            '&.Mui-disabled': {
              '& .MuiSvgIcon-root': {
                color: primitiveColors.black,
              },
            },
          },
          // Size variants
          sizeSmall: {
            // Small size: 32px button, 24px icon
            width: 32,
            height: 32,
            padding: 0, // No padding for enabled state
            '&:hover': {
              padding: 4,
            },
            '&:focus-visible': {
              padding: 4,
            },
            '&:active': {
              // Pressed state
              padding: 0,
            },
          },
          sizeMedium: {
            // Medium size: 40px button, 24px icon, 8px padding
            width: 40,
            height: 40,
            padding: 8,
            '&:hover': {
              padding: 4,
            },
            '&:focus-visible': {
              padding: 4,
            },
            '&:active': {
              // Pressed state
              padding: 0,
            },
          },
          sizeLarge: {
            // Large size: 48px button, 24px icon, 8px padding
            width: 48,
            height: 48,
            padding: 8,
            '&:hover': {
              padding: 4,
            },
            '&:focus-visible': {
              padding: 4,
            },
            '&:active': {
              // Pressed state
              padding: 0,
            },
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            // Medium size (default): 38px height, 58px width
            width: 58,
            height: 38,
            padding: 0,
          },
          switchBase: {
            padding: 0,
            '&.Mui-checked': {
              transform: 'translateX(20px)', // 58px - 38px = 20px offset for medium
              '& + .MuiSwitch-track': {
                opacity: 0.5,
              },
            },
            '&.Mui-disabled': {
              '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.12)',
              },
            },
            '&.Mui-checked.Mui-disabled': {
              '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.12)',
              },
            },
          },
          thumb: {
            // Medium size thumb: 38px x 38px
            width: 38,
            height: 38,
            boxShadow: 'none',
          },
          track: {
            // Medium size track: 14px height, 34px width
            height: 14,
            width: 34,
            borderRadius: 100,
            opacity: 0.38,
            backgroundColor: primitiveColors.black,
            // Note: Checked state styling is handled in switchBase section using '&.Mui-checked + .MuiSwitch-track'
          },
          sizeSmall: {
            // Small size: 24px height, 40px width
            width: 40,
            height: 24,
            '& .MuiSwitch-switchBase': {
              '&.Mui-checked': {
                transform: 'translateX(16px)', // 40px - 24px = 16px offset for small
                '& + .MuiSwitch-track': {
                  opacity: 0.5,
                },
              },
              '&.Mui-disabled': {
                '& + .MuiSwitch-track': {
                  opacity: 1,
                  backgroundColor: 'rgba(0, 0, 0, 0.12)',
                },
              },
              '&.Mui-checked.Mui-disabled': {
                '& + .MuiSwitch-track': {
                  opacity: 1,
                  backgroundColor: 'rgba(0, 0, 0, 0.12)',
                },
              },
            },
            '& .MuiSwitch-thumb': {
              // Small size thumb: 24px x 24px
              width: 24,
              height: 24,
            },
            '& .MuiSwitch-track': {
              // Small size track: 10px height, 26px width
              height: 10,
              width: 26,
            },
          },
        },
      },
    },
  };

  return createMuiTheme(themeOptions);
}
