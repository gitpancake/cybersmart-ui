/* jshint esversion: 6*/
import React from 'react';
import { Label, Menu, Tab } from 'semantic-ui-react'

import { InfoAccordian } from '../../components/Exports';

const panes = [
  {
    menuItem: { key: 'Guide', icon: 'file', content: 'Guide' },
    render: () => <Tab.Pane>Coming soon!</Tab.Pane>,
  },
  {
    menuItem: { key: 'FAQ', icon: 'question circle', content: 'FAQ' },
    render: () => <Tab.Pane>Coming soon!</Tab.Pane>,
  },
  {
    menuItem: { key: 'Contact', icon: 'talk', content: 'Contact us' },
    render: () =>
    <Tab.Pane>
    CyberSmart Team <br/>
    <br/>
    Dean Lingard - Github: deanolingardo <br/>
    Henry Pye - Github: signal-fire <br/>
    Brandon Parkinson - Github: brandonjamesparkinson <br/>
    George Clayton - Github: jafoolly
    </Tab.Pane>,
  },
]

const HelpTabs = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)

export default HelpTabs