const config_util = require('./utils/config.js')
const app_config = config_util.get_config()
const server_url = app_config.server_url

exports.get_all_reports = async function() {
    try {
        const response = await fetch(server_url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        const json = await response.json();
        return json;
      } catch (error) {
        console.error(error.message);
      }
}

exports.get_report_by_id = async function(id) {
    try {
        const response = await fetch(`${server_url}${id}`);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        const json = await response.json();
        return json;
      } catch (error) {
        console.error(error.message);
      }
}