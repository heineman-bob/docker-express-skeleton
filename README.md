# Express Skeleton

This repo is used for quick setup of a docker node js app that has an api and a front end built in.  This does not employ any security practices as it is just for testing or as a base

This skeleton utilizes the following:

* Docker
* Node.js
* Express.js
* Sequelize.js
* Jade templates

# Setup

1. Create vars.env file in root directory and set the following
    ```
    db=
    user=
    pw=
    host=
    dialect=

    ```
2. ```docker-compose build; docker-compose up```
3. Navigate to {docker machine ip}

# Options

* Change access port in docker-compose.yml under web service.
