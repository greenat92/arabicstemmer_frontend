import React from 'react';
import { createDevTools } from 'redux-devtools'; // eslint-disable-line import/no-extraneous-dependencies
import LogMonitor from 'redux-devtools-log-monitor'; // eslint-disable-line import/no-extraneous-dependencies
import DockMonitor from 'redux-devtools-log-monitor' // eslint-disable-line import/no-extraneous-dependencies

export default createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-w"
  >
    <LogMonitor />
    <DockMonitor />
);
