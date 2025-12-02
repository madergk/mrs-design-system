/**
 * Color Utilities Tests
 *
 * Tests for color utility functions
 */

import { describe, it, expect } from 'vitest';
import { hexToRgba, opacityValues } from './colorUtils';

describe('hexToRgba', () => {
  it('should convert hex color to rgba with opacity', () => {
    const result = hexToRgba('#00686f', 0.16);
    expect(result).toBe('rgba(0, 104, 111, 0.16)');
  });

  it('should handle hex color without # prefix', () => {
    const result = hexToRgba('00686f', 0.5);
    expect(result).toBe('rgba(0, 104, 111, 0.5)');
  });

  it('should handle hex color with # prefix', () => {
    const result = hexToRgba('#ff0000', 1);
    expect(result).toBe('rgba(255, 0, 0, 1)');
  });

  it('should handle different opacity values', () => {
    expect(hexToRgba('#000000', 0)).toBe('rgba(0, 0, 0, 0)');
    expect(hexToRgba('#ffffff', 0.5)).toBe('rgba(255, 255, 255, 0.5)');
    expect(hexToRgba('#123456', 0.87)).toBe('rgba(18, 52, 86, 0.87)');
  });

  it('should handle uppercase hex colors', () => {
    const result = hexToRgba('#ABCDEF', 0.6);
    expect(result).toBe('rgba(171, 205, 239, 0.6)');
  });

  it('should handle lowercase hex colors', () => {
    const result = hexToRgba('#abcdef', 0.6);
    expect(result).toBe('rgba(171, 205, 239, 0.6)');
  });
});

describe('opacityValues', () => {
  it('should export all opacity values', () => {
    expect(opacityValues.full).toBe(1);
    expect(opacityValues.highEmphasis).toBe(0.87);
    expect(opacityValues.mediumEmphasis).toBe(0.6);
    expect(opacityValues.disabled).toBe(0.38);
    expect(opacityValues.divider).toBe(0.12);
    expect(opacityValues.hover).toBe(0.16);
    expect(opacityValues.selected).toBe(0.12);
    expect(opacityValues.focus).toBe(0.12);
    expect(opacityValues.active).toBe(0.56);
    expect(opacityValues.filledInput).toBe(0.06);
    expect(opacityValues.outlinedBorder).toBe(0.23);
    expect(opacityValues.standardUnderline).toBe(0.42);
  });

  it('should have all values between 0 and 1', () => {
    Object.values(opacityValues).forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThanOrEqual(1);
    });
  });
});

