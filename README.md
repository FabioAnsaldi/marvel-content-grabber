# marvel-content-grabber
A Marvel API content grabber

## Table of contents
- [Local Setup](#local-setup)
- [Installation](#installation)
- [Testing](#testing)
- [Contributing](#contributing)

### Local Setup
To preview the website locally you have to install on your local machine the listed softwares below:
1. Install [git](https://git-scm.com/) to manage Git repository.
2. Install [yarn](https://yarnpkg.com/lang/en/) to manage node packages and to run the web server or to run test service.
3. You also need to install [nodejs](https://nodejs.org/en/) on your local machine to execute the source code.
***You should use v8.14.0 version or higher of NodeJs!***
### Installation
Clone the git repository
```sh
$ git clone https://github.com/FabioAnsaldi/marvel-content-grabber.git
```
Go to the new folder directory and run the following commands:
```sh
$ cd marvel-content-grabber
$ yarn install
```
You will see listed the modules required and than installed in you local machine. 

Now the server is ready to be used
###### Custom settings (optional)
If you want to set a custom configuration for IP address or service port:

Go to ***/server/config*** directory and create or edit the ***custom_name.json*** configuration file and than 
insert your custom configuration for web server
```json
  "web": {
    "address": "LOCAL_IP_ADDRESS",
    "port": "LOCAL_PORT"
  },
```
You have to run the server with the optional parameter like below:
```sh
$ yarn run start custom_name.json
```
If the ***your_local_address_ip*** is 127.0.0.1 and the port is 8080, you will see something like below:
```sh
Server listening on http://127.0.0.1:8080/
```
### Testing
To test the application, you have to run the below command
```sh
$ yarn run test
```
### Contributing
Feel free to make changes to the template files and to the document files.

### References
[Dynamically load redux reducers with react router 4](https://stackoverflow.com/questions/49988229/dynamically-load-redux-reducers-with-react-router-4)

[react-boilerplate](https://github.com/react-boilerplate)