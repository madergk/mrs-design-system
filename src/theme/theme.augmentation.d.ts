/**
 * Material UI Theme Augmentation
 *
 * This file extends Material UI's theme types with custom properties
 */

import '@mui/material/styles';

declare module '@mui/material/styles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Theme {
    // Custom theme properties can be added here
    // Example:
    // customShadows: {
    //   card: string;
    //   dialog: string;
    // };
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface ThemeOptions {
    // Custom theme options can be added here
    // Example:
    // customShadows?: {
    //   card?: string;
    //   dialog?: string;
    // };
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Palette {
    // Custom palette properties
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface PaletteOptions {
    // Custom palette options
  }
}

declare module '@mui/material/Button' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface ButtonPropsColorOverrides {
    // Disable unused color variants if needed
    // warning: false;
    // info: false;
    // success: false;
  }
}
