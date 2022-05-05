"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizedCacheDir = exports.restoreCache = exports.saveCache = void 0;
const path_1 = __importDefault(require("path"));
const fs_extra_1 = require("fs-extra");
const config_1 = require("./config");
function getCacheDirs(publish) {
    return [publish, normalizedCacheDir(publish)];
}
async function saveCache({ publish, utils }) {
    const cacheDirs = getCacheDirs(publish);
    if (await utils.cache.save(cacheDirs)) {
        utils.status.show({
            title: 'Essential Gatsby Build Plugin ran successfully',
            summary: 'Stored the Gatsby cache to speed up future builds. 🔥',
        });
    }
    else {
        console.log('No Gatsby build found.');
    }
}
exports.saveCache = saveCache;
async function restoreCache({ publish, utils }) {
    const cacheDirs = getCacheDirs(publish);
    if (await utils.cache.restore(cacheDirs)) {
        console.log('Found a Gatsby cache. We’re about to go FAST. ⚡️');
    }
    else {
        console.log('No Gatsby cache found. Building fresh.');
    }
    cacheDirs.forEach((dir) => {
        if (!(0, fs_extra_1.existsSync)(dir)) {
            return;
        }
        const dirInfo = (0, fs_extra_1.readdirSync)(dir);
        console.log(dir, dirInfo);
    });
}
exports.restoreCache = restoreCache;
function normalizedCacheDir(publish) {
    return path_1.default.join((0, config_1.getGatsbyRoot)(publish), `.cache`);
}
exports.normalizedCacheDir = normalizedCacheDir;
