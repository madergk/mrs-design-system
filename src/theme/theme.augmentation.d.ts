/**
 * Material UI Theme Augmentation
 *
 * This file extends Material UI's theme types with custom properties
 */

import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    // Custom theme properties can be added here
    // Example:
    // customShadows: {
    //   card: string;
    //   dialog: string;
    // };
  }

  interface ThemeOptions {
    // Custom theme options can be added here
    // Example:
    // customShadows?: {
    //   card?: string;
    //   dialog?: string;
    // };
  }

  interface Palette {
    // Custom palette properties
  }

  interface PaletteOptions {
    // Custom palette options
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    // Disable unused color variants if needed
    // warning: false;
    // info: false;
    // success: false;
  }
}
