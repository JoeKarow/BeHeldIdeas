"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGatsbyRoot = exports.shouldSkipFunctions = exports.mutateConfig = exports.checkConfig = exports.spliceConfig = void 0;
/* eslint-disable max-lines */
const os_1 = require("os");
const path_1 = __importDefault(require("path"));
const process_1 = __importDefault(require("process"));
const common_tags_1 = require("common-tags");
const fs_extra_1 = __importStar(require("fs-extra"));
const files_1 = require("./files");
async function spliceConfig({ startMarker, endMarker, contents, fileName, }) {
    await fs_extra_1.default.ensureFile(fileName);
    const data = await fs_extra_1.default.readFile(fileName, 'utf8');
    const [initial = '', rest = ''] = data.split(startMarker);
    const [, final = ''] = rest.split(endMarker);
    const out = [
        initial === os_1.EOL ? '' : initial,
        initial.endsWith(os_1.EOL) ? '' : os_1.EOL,
        startMarker,
        os_1.EOL,
        contents,
        os_1.EOL,
        endMarker,
        final.startsWith(os_1.EOL) ? '' : os_1.EOL,
        final === os_1.EOL ? '' : final,
    ]
        .filter(Boolean)
        .join('');
    return fs_extra_1.default.writeFile(fileName, out);
}
exports.spliceConfig = spliceConfig;
function loadGatsbyConfig({ gatsbyRoot, utils }) {
    const gatsbyConfigFile = path_1.default.resolve(gatsbyRoot, 'gatsby-config.js');
    if (!(0, fs_extra_1.existsSync)(gatsbyConfigFile)) {
        return {};
    }
    try {
        // eslint-disable-next-line node/global-require, @typescript-eslint/no-var-requires, import/no-dynamic-require
        return require(gatsbyConfigFile);
    }
    catch (error) {
        utils.build.failBuild('Could not load gatsby-config.js', { error });
    }
}
function hasPlugin(plugins, pluginName) {
    return plugins === null || plugins === void 0 ? void 0 : plugins.some((plugin) => plugin &&
        (typeof plugin === 'string'
            ? plugin === pluginName
            : plugin.resolve === pluginName));
}
async function checkConfig({ utils, netlifyConfig }) {
    const gatsbyRoot = getGatsbyRoot(netlifyConfig.build.publish);
    // warn if gatsby-plugin-netlify is missing
    const gatsbyConfig = loadGatsbyConfig({
        utils,
        gatsbyRoot,
    });
    if (hasPlugin(gatsbyConfig.plugins, 'gatsby-plugin-netlify')) {
        if (!(await (0, files_1.checkPackageVersion)(gatsbyRoot, 'gatsby-plugin-netlify', '>=4.2.0'))) {
            console.error('The plugin `gatsby-plugin-netlify` does not support DSG, please update to >=4.2.0');
        }
    }
    else {
        console.error('Please install `gatsby-plugin-netlify` and enable it in your gatsby-config.js. https://www.gatsbyjs.com/plugins/gatsby-plugin-netlify/');
    }
    if (hasPlugin(gatsbyConfig.plugins, 'gatsby-plugin-netlify-cache')) {
        console.error("The plugin 'gatsby-plugin-netlify-cache' is not compatible with the Gatsby build plugin");
        console.error('Please uninstall gatsby-plugin-netlify-cache and remove it from your gatsby-config.js');
        utils.build.failBuild('Incompatible Gatsby plugin installed');
    }
    if (netlifyConfig.plugins.some((plugin) => plugin && plugin.package === 'netlify-plugin-gatsby-cache')) {
        console.warn("The plugin 'netlify-plugin-gatsby-cache' is no longer required and should be removed.");
    }
}
exports.checkConfig = checkConfig;
function mutateConfig({ netlifyConfig, compiledFunctionsDir, cacheDir, }) {
    /* eslint-disable no-underscore-dangle, no-param-reassign */
    netlifyConfig.functions.__api = {
        included_files: [path_1.default.posix.join(compiledFunctionsDir, '**')],
        external_node_modules: ['msgpackr-extract'],
    };
    netlifyConfig.functions.__dsg = {
        included_files: [
            'public/404.html',
            'public/500.html',
            path_1.default.posix.join(cacheDir, 'data', '**'),
            path_1.default.posix.join(cacheDir, 'query-engine', '**'),
            path_1.default.posix.join(cacheDir, 'page-ssr', '**'),
            '!**/*.js.map',
        ],
        external_node_modules: ['msgpackr-extract'],
        node_bundler: 'esbuild',
    };
    netlifyConfig.functions.__ssr = { ...netlifyConfig.functions.__dsg };
    /* eslint-enable no-underscore-dangle, no-param-reassign */
}
exports.mutateConfig = mutateConfig;
function shouldSkipFunctions(cacheDir) {
    if (process_1.default.env.NETLIFY_SKIP_GATSBY_FUNCTIONS === 'true' ||
        process_1.default.env.NETLIFY_SKIP_GATSBY_FUNCTIONS === '1') {
        console.log('Skipping Gatsby Functions and SSR/DSG support because the environment variable NETLIFY_SKIP_GATSBY_FUNCTIONS is set to true');
        return true;
    }
    if (!(0, fs_extra_1.existsSync)(path_1.default.join(cacheDir, 'functions'))) {
        console.log(`Skipping Gatsby Functions and SSR/DSG support because the site's Gatsby version does not support them`);
        return true;
    }
    const skipFile = path_1.default.join(cacheDir, '.nf-skip-gatsby-functions');
    if ((0, fs_extra_1.existsSync)(skipFile)) {
        console.log((0, common_tags_1.stripIndent) `
      Skipping Gatsby Functions and SSR/DSG support because gatsby-plugin-netlify reported that this site does not use them. 
      If this is incorrect, remove the file "${skipFile}" and try again.`);
        return true;
    }
    return false;
}
exports.shouldSkipFunctions = shouldSkipFunctions;
function getGatsbyRoot(publish) {
    return path_1.default.resolve(path_1.default.dirname(publish));
}
exports.getGatsbyRoot = getGatsbyRoot;
/* eslint-enable max-lines */
