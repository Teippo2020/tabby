import { configure } from '@storybook/react';

import
const req = require.context('../src/stories', true, /.stories.jsx$/);

function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
