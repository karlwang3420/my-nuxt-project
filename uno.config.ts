// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      ggwGray: '#585757',
      primary: {
        1: '#A6C9ED',
        2: '#74A3E3',
        3: '#4F82D1',
        4: '#305EB8',
        DEFAULT: '#1B55B2',
        5: '#1B55B2',
        6: '#1652A7',
        7: '#1C3366',
        light: '#90CDEC',
        tint: '#D2F0FF',
      },
      secondary: {
        //
        2: '#F0FDFD',
        4: '#D7FCFA',
        DEFAULT: '#D7FCFA',
      },
      'ftl-dark-red': '#880D0D',
      'ftl-orange': '#D3835D',
      ggwHeader: '#FFC702',
    },
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },

  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
