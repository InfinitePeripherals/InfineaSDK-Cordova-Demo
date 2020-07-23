cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-infineasdk.InfineaSDKCordova",
      "file": "plugins/cordova-plugin-infineasdk/www/InfineaSDKCordova.js",
      "pluginId": "cordova-plugin-infineasdk",
      "clobbers": [
        "Infinea"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-infineasdk": "1.0.13"
  };
});