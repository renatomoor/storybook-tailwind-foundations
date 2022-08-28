const prettier = require("prettier");
const findCacheDir = require("find-cache-dir");
const resolveConfig = require("tailwindcss/resolveConfig");
const fs = require("fs");
const path = require("path");

const pckJson = require("../../package.json");

/**
 * Name and extension of the file generated in the cache
 * @type {string}
 */
const GENERATED_FILE_NAME = "theme.json"

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
function getCacheDir() {
  return `${findCacheDir({name: pckJson.name, create: true})}/`;
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
		path.resolve(getCacheDir(), GENERATED_FILE_NAME),
		prettier.format(json, {parser: 'json'}))
  } catch (err) {
	console.error(err.message);
  }
}

/**
 * Core function to generate the config file
 * @param tailwindConfigPath
 */
module.exports.initialize = function (tailwindConfigPath = '../../tailwind.config.js') {
  generateConfig(tailwindConfigPath);
}

/**
 * Will return the either all the generated json
 * or the json for the given property key
 * or if an array of properties, only them
 * @param key
 * @returns {{}|*}
 */
module.exports.getConfig = function(key = null) {
  try {
	const file = require(`${getCacheDir()}/${GENERATED_FILE_NAME}`);
	if(key) {
	  if(typeof key === "string") {
		return file[key];
	  } else if(typeof key === "object" && key?.length > 0) {
		const result = {};
		key.forEach(key => {
		  result[key] = file[key];
		});
		return result;
	  }
	}
	return file
  } catch (err) {
	throw new Error("Could not find config file.");
  }
}


/**
 * Core function to generate the config file
 * @param tailwindConfigPath
 */
module.exports.initialize = function (tailwindConfigPath = '../../tailwind.config.js') {
  generateConfig(tailwindConfigPath);
}

