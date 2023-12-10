// Learn more: https://docs.expo.dev/guides/monorepos/
const { getDefaultConfig } = require("@expo/metro-config");

const path = require("path");

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, "..");

// Create the default Metro config
const config = getDefaultConfig(projectRoot, { isCSSEnabled: true });

if (config.resolver) {
  // 1. Watch all files within the monorepo
  config.watchFolders = [
    workspaceRoot,
    path.resolve(workspaceRoot, "node_modules"),
  ];
  // 2. Let Metro know where to resolve packages and in what order
  config.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, "node_modules"),
    path.resolve(workspaceRoot, "node_modules"),
  ];
  // 3. Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
  config.resolver.disableHierarchicalLookup = true;

  config.resolver.extraNodeModules = [
    path.resolve(workspaceRoot, "node_modules"),
  ];
}

module.exports = config;