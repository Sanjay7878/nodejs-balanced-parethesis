define({ "api": [
  {
    "type": "post",
    "url": "http://localhost:3000/balanced",
    "title": "API to find balanced parenthesis and save the data",
    "version": "0.0.1",
    "group": "Parenthesis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>userName of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parenthesis",
            "description": "<p>parenthesis data</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"message\": \"string\",\n            \"attempts\": number,\n            \"_id\": \"string\",\n            \"userName\": \"string\",\n            \"__v\": 0\n         }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"userName\": \"string\",\n            \"message\": \"string\",\n            \"attempts\": number\n         }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "Parenthesis",
    "name": "PostHttpLocalhost3000Balanced"
  },
  {
    "type": "get",
    "url": "http://localhost:3000/api/v1/user/get/all",
    "title": "Get All Users",
    "version": "0.0.1",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the admin user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"All User Details Found\",\n\"status\": 200,\n\"data\": {\n                  \"firstName\": \"string\",\n                  \"lastName\": \"string\",\n                  \"country\": \"string\",\n                  \"countryCode\": \"string\",\n                  \"mobileNumber\": number,\n                  \"createdOn\": \"date\"\n                  \"userId\": \"string\",\n                  \"email\": \"string\",\n                  \"friends\": []\n            }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\"error\": true,\n\"message\": \"No Users Found\",\n\"status\": 404,\n\"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "Users",
    "name": "GetHttpLocalhost3000ApiV1UserGetAll"
  },
  {
    "type": "get",
    "url": "http://localhost:3000/api/v1/user/get/user",
    "title": "Get Single User Info",
    "version": "0.0.1",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user whose info is needed</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"User Found\",\n\"status\": 200,\n\"data\": {\n                  \"firstName\": \"string\",\n                  \"lastName\": \"string\",\n                  \"country\": \"string\",\n                  \"countryCode\": \"string\",\n                  \"mobileNumber\": number,\n                  \"createdOn\": \"date\"\n                  \"userId\": \"string\",\n                  \"email\": \"string\",\n                  \"friends\": []\n            }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\"error\": true,\n\"message\": \"No User Found\",\n\"status\": 404,\n\"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "Users",
    "name": "GetHttpLocalhost3000ApiV1UserGetUser"
  },
  {
    "type": "post",
    "url": "http://localhost:3000/api/v1/user/delete/user",
    "title": "Api to delete user details",
    "version": "0.0.1",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user whose info is needed</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the admin user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"Deleted the user successfully\",\n\"status\": 200,\n\"data\": { \n      \"n\": 1,\n                \"ok\": 1,\n                \"deletedCount\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\"error\": true,\n\"message\": \"No user Found\",\n\"status\": 404,\n\"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "Users",
    "name": "PostHttpLocalhost3000ApiV1UserDeleteUser"
  },
  {
    "type": "post",
    "url": "http://localhost:3000/api/v1/user/login",
    "title": "Api for user login",
    "version": "0.0.1",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"Login Successful\",\n\"status\": 200,\n\"data\": {\n          \"authToken\": \"string\",\n                    \"userDetails\": {\n                                    \"firstName\": \"string\",\n                                    \"lastName\": \"string\",\n                                    \"country\": \"string\",\n                                    \"countryCode\": \"string\",\n                                    \"mobileNumber\": number,\n                                    \"userId\": \"string\",\n                                    \"email\": \"string\",\n                                    \"friends\": []\n                              }\n        }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\"error\": true,\n\"message\": \"No user Found\",\n\"status\": 404,\n\"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "Users",
    "name": "PostHttpLocalhost3000ApiV1UserLogin"
  },
  {
    "type": "post",
    "url": "http://localhost:3000/api/v1/user/logout",
    "title": "Api for Logout",
    "version": "0.0.1",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"error\": false,\n            \"message\": \"Logged out successfully\",\n            \"status\": 200,\n            \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\"error\": true,\n\"message\": \"Already Logged out or Invalid UserId\",\n\"status\": 404,\n\"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "Users",
    "name": "PostHttpLocalhost3000ApiV1UserLogout"
  },
  {
    "type": "post",
    "url": "http://localhost:3000/api/v1/user/signup",
    "title": "Api for user to singup",
    "version": "0.0.1",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>first name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>last name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>userName of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "dob",
            "description": "<p>dob of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"User Created Succesfully\",\n\"status\": 200,\n\"data\": {\n               \"firstName\": \"string\",\n               \"lastName\": \"string\",\n               \"country\": \"string\",\n               \"countryCode\": \"string\",\n               \"mobileNumber\": number,\n               \"createdOn\": \"date\",\n               \"_id\": \"string\",\n               \"userId\": \"string\",\n               \"email\": \"string\",\n               \"friends\": [],\n               \"__v\": 0\n            }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\"error\": true,\n\"message\": \"Failed to Create User\",\n\"status\": 500,\n\"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "Users",
    "name": "PostHttpLocalhost3000ApiV1UserSignup"
  },
  {
    "type": "post",
    "url": "http://localhost:3000/api/v1/user/:userId/reset-password",
    "title": "Api for forgot-password",
    "version": "0.0.1",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>new password of the user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"Password Reset Successful\",\n\"status\": 200,\n\"data\": {\n               \"n\": 1,\n               \"nModified\": 1,\n               \"ok\": 1\n            }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\"error\": true,\n\"message\": \"Failed To Reset The Password\",\n\"status\": 500,\n\"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "Users",
    "name": "PostHttpLocalhost3000ApiV1UserUseridResetPassword"
  },
  {
    "type": "put",
    "url": "http://localhost:3000/api/v1/user/edit/userId",
    "title": "Api to edit user details",
    "version": "0.0.1",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user whose info is needed</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the admin user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"User Details Edited successfully\",\n\"status\": 200,\n\"data\": {\n          \"n\": 1,\n                    \"nModified\": 1,\n                    \"ok\": 1\n        }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\"error\": true,\n\"message\": \"No user Found\",\n\"status\": 404,\n\"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "Users",
    "name": "PutHttpLocalhost3000ApiV1UserEditUserid"
  }
] });
