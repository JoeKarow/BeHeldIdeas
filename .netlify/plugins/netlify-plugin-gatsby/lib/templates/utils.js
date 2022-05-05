"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorResponse = exports.getGraphQLEngine = exports.getPagePathFromPageDataPath = exports.reverseFixedPagePath = exports.prepareFilesystem = exports.TEMP_CACHE_DIR = void 0;
const fs_1 = __importDefault(require("fs"));
const os_1 = __importDefault(require("os"));
const path_1 = require("path");
const process_1 = __importDefault(require("process"));
const etag_1 = __importDefault(require("etag"));
const fs_extra_1 = require("fs-extra");
const linkfs_1 = require("linkfs");
// Alias in the temp directory so it's writable
exports.TEMP_CACHE_DIR = (0, path_1.join)(os_1.default.tmpdir(), 'gatsby', '.cache');
/**
 * Hacks to deal with the fact that functions execute on a readonly filesystem
 */
function prepareFilesystem(cacheDir) {
    console.log('Preparing Gatsby filesystem');
    const rewrites = [
        [(0, path_1.join)(cacheDir, 'caches'), (0, path_1.join)(exports.TEMP_CACHE_DIR, 'caches')],
        [(0, path_1.join)(cacheDir, 'caches-lmdb'), (0, path_1.join)(exports.TEMP_CACHE_DIR, 'caches-lmdb')],
        [(0, path_1.join)(cacheDir, 'data'), (0, path_1.join)(exports.TEMP_CACHE_DIR, 'data')],
    ];
    // Alias the cache dir paths to the temp dir
    const lfs = (0, linkfs_1.link)(fs_1.default, rewrites);
    // linkfs doesn't pass across the `native` prop, which graceful-fs needs
    for (const key in lfs) {
        if (Object.hasOwnProperty.call(fs_1.default[key], 'native')) {
            lfs[key].native = fs_1.default[key].native;
        }
    }
    // Gatsby uses this instead of fs if present
    // eslint-disable-next-line no-underscore-dangle
    global._fsWrapper = lfs;
    const dir = 'data';
    if (!process_1.default.env.NETLIFY_LOCAL && (0, fs_extra_1.existsSync)((0, path_1.join)(exports.TEMP_CACHE_DIR, dir))) {
        console.log('directory already exists');
        return;
    }
    console.log(`Start copying ${dir}`);
    (0, fs_extra_1.copySync)((0, path_1.join)(cacheDir, dir), (0, path_1.join)(exports.TEMP_CACHE_DIR, dir));
    console.log(`End copying ${dir}`);
}
exports.prepareFilesystem = prepareFilesystem;
// Inlined from gatsby-core-utils
function reverseFixedPagePath(pageDataRequestPath) {
    return pageDataRequestPath === `index` ? `/` : pageDataRequestPath;
}
exports.reverseFixedPagePath = reverseFixedPagePath;
function getPagePathFromPageDataPath(pageDataPath) {
    const matches = pageDataPath.matchAll(/^\/?page-data\/(.+)\/page-data.json$/gm);
    // Not sure why Gatsby does this!
    // eslint-disable-next-line no-unreachable-loop
    for (const [, requestedPagePath] of matches) {
        return reverseFixedPagePath(requestedPagePath);
    }
    return null;
}
exports.getPagePathFromPageDataPath = getPagePathFromPageDataPath;
/**
 * Loads the bundled GraphQL engine from the Gatsby cache directory
 */
function getGraphQLEngine(cacheDir) {
    const { GraphQLEngine: GQE } = require((0, path_1.join)(cacheDir, 'query-engine'));
    const dbPath = (0, path_1.join)(exports.TEMP_CACHE_DIR, 'data', 'datastore');
    return new GQE({
        dbPath,
    });
}
exports.getGraphQLEngine = getGraphQLEngine;
/**
 * Gets an error page to return from a function
 */
function getErrorResponse({ statusCode = 500, error, renderMode, }) {
    let body = `<html><body><h1>${statusCode}</h1><p>${statusCode === 404 ? 'Not found' : 'Internal Server Error'}</p></body></html>`;
    if (error) {
        console.error(error);
    }
    if (statusCode === 500 || statusCode === 404) {
        const filename = (0, path_1.join)(process_1.default.cwd(), 'public', `${statusCode}.html`);
        if ((0, fs_extra_1.existsSync)(filename)) {
            body = (0, fs_extra_1.readFileSync)(filename, 'utf8');
        }
    }
    return {
        statusCode,
        body,
        headers: {
            Tag: (0, etag_1.default)(body),
            'Content-Type': 'text/html; charset=utf-8',
            'X-Render-Mode': renderMode,
        },
    };
}
exports.getErrorResponse = getErrorResponse;
