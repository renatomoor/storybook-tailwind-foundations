const findNodeModulesDir = require('./findNodeModulesDir');
const resolveConfig = require("tailwindcss/resolveConfig");
const fs = require("fs");
const path = require("path");

/**
 * Name and extension of the file generated in the cache
 * @type {string}
 */
const GENERATED_FILE_NAME = "theme.json"
const PACKAGE_NAME = "storybook-tailwind-foundations";

/**
 * Currently supported property keys
 * Each property has a functionality/component that display it
 * Will be extended in the future
 * @type {string[]}
 */
const supportedPropertyKeys = ['screens', 'colors', 'spacing']

/**
 * Get the path of the cache directory in node_modules
 * @returns {string}
 */
function getPackageDir() {
  return `${findNodeModulesDir()}/${PACKAGE_NAME}`;
}

/**
 * Generate the json file that contains the tailwind config properties
 * With only the supported properties and any additional properties added as parameters
 * @param tailwindConfigPath
 * @param additionalPropertyKeys
 */
function generateConfig(tailwindConfigPath, additionalPropertyKeys = []) {
  const tailwindConfig = require(tailwindConfigPath) // replace with your own config file location
  const fullConfig = resolveConfig(tailwindConfig)

  let generatedConfig = {};

  // merge arrays and push key/values in the generated config variable
  [...supportedPropertyKeys, ...additionalPropertyKeys].forEach(key => {
	generatedConfig[key] = fullConfig.theme[key];
  })

  const json = JSON.stringify(generatedConfig);

  try {
		fs.writeFileSync(
			path.resolve(getPackageDir(), GENERATED_FILE_NAME),
			json
		);
  } catch (err) {
		console.error(err.message);
  }
}

/**
 * Core function to generate the config file
 * @param tailwindConfigPath
 */
module.exports.default = function (tailwindConfigPath = '../../tailwind.config.js') {
  generateConfig(tailwindConfigPath);
}
