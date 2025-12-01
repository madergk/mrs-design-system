/**
 * Typography Stories
 *
 * Storybook stories for the Typography component.
 * Displays all variants from Figma design with and without gutterBottom.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';
import { Box, Stack } from '@mui/material';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Material UI Typography component customized with design tokens. Supports all typography variants: h1-h6, body1, body2, subtitle1, subtitle2, caption, and overline.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'body1',
        'body2',
        'subtitle1',
        'subtitle2',
        'caption',
        'overline',
      ],
      description: 'The typography variant',
    },
    gutterBottom: {
      control: 'boolean',
      description: 'If true, the text will have a bottom margin',
    },
    children: {
      control: 'text',
      description: 'The content of the typography',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

// Default story
export const Default: Story = {
  args: {
    children: 'Typography',
    variant: 'body1',
    gutterBottom: false,
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <Box sx={{ p: 4, maxWidth: 800 }}>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h1" gutterBottom>
            Typography
          </Typography>
          <Typography variant="h1">Typography</Typography>
        </Box>
        <Box>
          <Typography variant="h2" gutterBottom>
            Typography
          </Typography>
          <Typography variant="h2">Typography</Typography>
        </Box>
        <Box>
          <Typography variant="h3" gutterBottom>
            Typography
          </Typography>
          <Typography variant="h3">Typography</Typography>
        </Box>
        <Box>
          <Typography variant="h4" gutterBottom>
            Typography
          </Typography>
          <Typography variant="h4">Typography</Typography>
        </Box>
        <Box>
          <Typography variant="h5" gutterBottom>
            Typography
          </Typography>
          <Typography variant="h5">Typography</Typography>
        </Box>
        <Box>
          <Typography variant="h6" gutterBottom>
            Typography
          </Typography>
          <Typography variant="h6">Typography</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1" gutterBottom>
            Typography
          </Typography>
          <Typography variant="subtitle1">Typography</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Typography
          </Typography>
          <Typography variant="subtitle2">Typography</Typography>
        </Box>
        <Box>
          <Typography variant="body1" gutterBottom>
            Typography
          </Typography>
          <Typography variant="body1">Typography</Typography>
        </Box>
        <Box>
          <Typography variant="body2" gutterBottom>
            Typography
          </Typography>
          <Typography variant="body2">Typography</Typography>
        </Box>
        <Box>
          <Typography variant="caption" gutterBottom>
            Typography
          </Typography>
          <Typography variant="caption">Typography</Typography>
        </Box>
        <Box>
          <Typography variant="overline" gutterBottom>
            Typography
          </Typography>
          <Typography variant="overline">Typography</Typography>
        </Box>
      </Stack>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

// Headings showcase
export const Headings: Story = {
  args: {
    variant: 'h3',
    gutterBottom: true,
    children: 'hola\n',
  },

  render: () => (
    <Stack spacing={2}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
    </Stack>
  ),
};

// Body text showcase
export const BodyText: Story = {
  render: () => (
    <Stack spacing={2} sx={{ maxWidth: 600 }}>
      <Typography variant="body1">
        Body 1: This is the primary body text style. It&apos;s used for most content and provides
        good readability with a comfortable line height.
      </Typography>
      <Typography variant="body2">
        Body 2: This is a smaller body text style, typically used for secondary content or when
        space is limited.
      </Typography>
    </Stack>
  ),
};

// Subtitles showcase
export const Subtitles: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="subtitle1">
        Subtitle 1: This is a subtitle style, often used for section headings or emphasized text.
      </Typography>
      <Typography variant="subtitle2">
        Subtitle 2: This is a smaller subtitle style, used for less prominent headings.
      </Typography>
    </Stack>
  ),
};

// Small text showcase
export const SmallText: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="caption">
        Caption: This is caption text, typically used for labels, timestamps, or small annotations.
      </Typography>
      <Typography variant="overline">
        Overline: This is overline text, displayed in uppercase and often used for labels or
        categories.
      </Typography>
    </Stack>
  ),
};

// Gutter bottom comparison
export const GutterBottom: Story = {
  render: () => (
    <Box sx={{ p: 4, maxWidth: 600 }}>
      <Stack spacing={4}>
        <Box>
          <Typography variant="body1" sx={{ mb: 2, fontWeight: 'medium' }}>
            With gutterBottom (default margin bottom)
          </Typography>
          <Typography variant="body1" gutterBottom>
            This paragraph has gutterBottom enabled, creating space below it.
          </Typography>
          <Typography variant="body1" gutterBottom>
            This is another paragraph with gutterBottom.
          </Typography>
          <Typography variant="body1" gutterBottom>
            And one more with gutterBottom.
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" sx={{ mb: 2, fontWeight: 'medium' }}>
            Without gutterBottom (no margin bottom)
          </Typography>
          <Typography variant="body1">
            This paragraph has no gutterBottom, so it&apos;s closer to the next one.
          </Typography>
          <Typography variant="body1">This is another paragraph without gutterBottom.</Typography>
          <Typography variant="body1">And one more without gutterBottom.</Typography>
        </Box>
      </Stack>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

// Complete showcase matching Figma design
export const CompleteShowcase: Story = {
  render: () => (
    <Box sx={{ p: 4, maxWidth: 1200 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Typography Component Showcase
      </Typography>

      <Stack spacing={6}>
        {/* Headings */}
        <Box>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Headings
          </Typography>
          <Stack spacing={2}>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                H1 - Gutter Bottom
              </Typography>
              <Typography variant="h1" gutterBottom>
                Typography
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                H1 - No Gutter Bottom
              </Typography>
              <Typography variant="h1">Typography</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                H2 - Gutter Bottom
              </Typography>
              <Typography variant="h2" gutterBottom>
                Typography
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                H2 - No Gutter Bottom
              </Typography>
              <Typography variant="h2">Typography</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                H3 - Gutter Bottom
              </Typography>
              <Typography variant="h3" gutterBottom>
                Typography
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                H3 - No Gutter Bottom
              </Typography>
              <Typography variant="h3">Typography</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                H4 - Gutter Bottom
              </Typography>
              <Typography variant="h4" gutterBottom>
                Typography
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                H4 - No Gutter Bottom
              </Typography>
              <Typography variant="h4">Typography</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                H5 - Gutter Bottom
              </Typography>
              <Typography variant="h5" gutterBottom>
                Typography
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                H5 - No Gutter Bottom
              </Typography>
              <Typography variant="h5">Typography</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                H6 - Gutter Bottom
              </Typography>
              <Typography variant="h6" gutterBottom>
                Typography
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                H6 - No Gutter Bottom
              </Typography>
              <Typography variant="h6">Typography</Typography>
            </Box>
          </Stack>
        </Box>

        {/* Body and Subtitles */}
        <Box>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Body and Subtitles
          </Typography>
          <Stack spacing={2}>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                Subtitle 1 - Gutter Bottom
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Typography
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                Subtitle 1 - No Gutter Bottom
              </Typography>
              <Typography variant="subtitle1">Typography</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                Subtitle 2 - Gutter Bottom
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Typography
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                Subtitle 2 - No Gutter Bottom
              </Typography>
              <Typography variant="subtitle2">Typography</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                Body 1 - Gutter Bottom
              </Typography>
              <Typography variant="body1" gutterBottom>
                Typography
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                Body 1 - No Gutter Bottom
              </Typography>
              <Typography variant="body1">Typography</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                Body 2 - Gutter Bottom
              </Typography>
              <Typography variant="body2" gutterBottom>
                Typography
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                Body 2 - No Gutter Bottom
              </Typography>
              <Typography variant="body2">Typography</Typography>
            </Box>
          </Stack>
        </Box>

        {/* Small Text */}
        <Box>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Small Text
          </Typography>
          <Stack spacing={2}>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                Caption - Gutter Bottom
              </Typography>
              <Typography variant="caption" gutterBottom>
                Typography
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                Caption - No Gutter Bottom
              </Typography>
              <Typography variant="caption">Typography</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                Overline - Gutter Bottom
              </Typography>
              <Typography variant="overline" gutterBottom>
                Typography
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                Overline - No Gutter Bottom
              </Typography>
              <Typography variant="overline">Typography</Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
