/* eslint-disable no-undef */
// Import NetlifyCMS library
import CMS from "netlify-cms-app";
import config from "./config";

// const { CMS, initCMS: init } = window
window.CMS_MANUAL_INIT = true;
window.CMS_CONFIGURATION = config;
CMS.init({ config });
