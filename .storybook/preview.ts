import '../src/app/globals.css';
import '@fontsource/montserrat/latin.css';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
} as const;

export default preview;
