# NASA's Mars Rover Photos API Wrapper
You can use MarsRoverPhotos API to access photos from NASA's Curiosity, Opportunity, and Spirit rovers on Mars.
# Installation
This API requires node.js to be installed on your local machine first. After installing Node on your computer run the following command to set up your Dev enviroment.
```
npm init
```
`npm` will ask you to give your project a name. You can call it `MarsRoverPhotos`. The rest you can leave as default.

In your `package.json` file which will be located at the root of your project after creating it you will need to add `"type": "module"` to the top level of this JSON file.
### Example
```
{
  "type": "module",
  "dependencies": {
    "express": "^4.17.2",
    "node-fetch": "^3.2.0"
  }
}
```
Next you will need to install a module for Node called `node-fetch`
```
npm install node-fetch
```
Then you are going to need to download the myapp.js file and place it in the root of your project folder.

That's it, your done installing.
# Run your server
Before you can access the API you will need to run the server. Open a terminal or CMD and you can start the server with the following command.
```
cd MarsRoverPhotos
node myapp.js
```
# Paths
| Location  | End Point |
| --------  | --------- |
| Root Path | `http://localhost:8080/api/v1/<--api_key-->/` |

If you have not already created your API key for NASA you can do that [here](https://api.nasa.gov/), this is required.
## HTTP request and query methods
| Method  | End Point | Description | Examples |
| ------  | --------- | ----------- | -------- |
| `GET` | `http://localhost:8080/api/v1/<--api_key-->/<-- date-->` | This will return all images from the Rover from the date you specify. Date much be in the format of YYYY-MM-DD | `/api/v1/<--api_key-->/2015-06-03` |
