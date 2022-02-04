# MarsRoverPhotos
You can use MarsRoverPhotos API to access photos from NASA's Curiosity, Opportunity, and Spirit rovers on Mars.
# Installation
This API requires node.js to be installed on your local machine first.


# Paths
| Location  | End Point |
| --------  | --------- |
| Root Path | `http://localhost:8080/api/v1/<--api_key-->/` |

If you have not already created your API key for NASA you can do that [here](https://api.nasa.gov/), this is required.
## HTTP request and query methods
| Method  | End Point | Description | Examples |
| ------  | --------- | ----------- | -------- |
| `GET` | `http://localhost:8080/api/v1/<--api_key-->/<-- date-->` | This will return all images from the Rover from the date you specify. Date much be in the format of YYYY-MM-DD | `/api/v1/<--api_key-->/2015-06-03` |
