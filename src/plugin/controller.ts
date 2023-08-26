import { createRectangles } from './utils';

figma.showUI(__html__, { width: 290, height: 410, themeColors: false });

figma.ui.onmessage = (msg) => {
  if (msg.type === 'create-rectangles') {
    createRectangles(msg.count);
  }

  figma.closePlugin();
};
