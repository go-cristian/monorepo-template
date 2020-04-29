import React from 'react'
import { addParameters, addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/shared/global';
import {
  INITIAL_VIEWPORTS,
} from '@storybook/addon-viewport';
import { withConsole } from '@storybook/addon-console';
import { setConsoleOptions } from '@storybook/addon-console';

setConsoleOptions({
  panelExclude: [],
});

const customViewports = {
  desktop: {
    name: 'Desktop Design',
    styles: {
      width: '1440px',
      height: '836px',
    },
  },
  bigDsktop: {
    name: 'Big Desktop Design',
    styles: {
      width: '2000px',
      height: '836px',
    },
  },
};

addParameters({
  viewport: {
    viewports: {
      ...customViewports,
      ...INITIAL_VIEWPORTS,
    },
  },
});

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
