# CAPSTONE TEAM BACKEND DEVELOPMENT (NODEJS)_GROUP_12
## members names and id 
1. ADAMU MUHAMMAD MUHAMMAD (SH-IT-0026011)
2. 
3. --------------
4. -------------

## Routing
The server should fulfill the below routes

/ : Home route
/about : About route
/sys : System route
1. When hitting the home route, the server should serve back the index.html page with the status code set to 200 and the content type to text/html

2. When hitting the about route, the server should serve back the about.html page with the status code set to 200 and the content type to text/html

3. When hitting the system route, the server should save information about the os in a file named osinfo.json with the status code set to 201, the content type to text/plain with the message "Your OS info has been saved successfully!" written back to the user. The osinfo.json file should contain the following attributes:

hostname: the os host name,
platform: the os platform,
architecture: the os architecture,
numberOfCPUS: the os number of cores,
networkInterfaces: os network interfaces,
uptime: os uptime


4. Hitting any other route which is not known by our server, we should be able to serve back the 404.html page with the status code set to 404

5. The logic should be under server.js

Note: Make use of the right modules and packages
