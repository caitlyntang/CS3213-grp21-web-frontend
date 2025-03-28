import get_config from './utils/config.js';


const app_config = get_config()
const server_url = app_config.server_url

export async function get_all_reports() {
    try {
        console.log(`Fetching from: ${server_url}`);

        const response = await fetch(`${server_url}all_reports`);

        const text = await response.text(); // Read response as text to inspect it
        console.log("Raw Response:", text); // Log raw response to check if it's JSON or HTML

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        return JSON.parse(text); // Parse JSON only if response is valid
    } catch (error) {
        console.error("Error in get_all_reports:", error.message);
    }
}

export async function get_report_by_id(id) {
    try {
        const response = await fetch(`${server_url}report_by_id/${id}`);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        const json = await response.json();
        return json;
      } catch (error) {
        console.error(error.message);
      }
}