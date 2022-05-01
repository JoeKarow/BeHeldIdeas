window.CMS_MANUAL_INIT = true
// Import NetlifyCMS library
import CMS, { init } from 'netlify-cms-app'
import config from './config'
// import 'netlify-cms/dist/cms.css';
// import 'netlify-cms-app/dist/cms.css'
const { CMS, initCMS: init } = window
window.CMS_CONFIGURATION = config
CMS.init({ config })

// Import custom editor component from cms/editor-components.js
// import myCustomEditorComponent from './editor-components';
// Import NetlifyCMS JS configuration object from cms/config/index.js

// Disable loading of the configuration from the default config.yml file
// Initialize NetlifyCMS with the JS configuration objext
// Register the custom editor component
// CMS.registerEditorComponent(myCustomEditorComponent);
