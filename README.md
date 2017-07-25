# templated-config
An configuration tool that combines structured JSON files with environment variables by leveraging template string. It loads configuration from JSON files from a `<app_root>/config` directory. The `NODE_ENV` environment variable determines which configuration file is loaded.

The basic configuration file is a plain JSON file.

```javascript
{
  "database": {
    "connectionString": "someConnectionString"
    "port": 666
  },
  "externalService": {
    "primaryUrl": "http://someAdress",
    "secondaryUrl": "http://anotherAdress"
  }
}
```

To combine JSON with values from environment variables. You can do something like this.

```javascript
{
  "database": {
    "connectionString": "${process.env.ENV_CONNECTION_STRING}"
  }
}
```

This is the base structure used.
```
.
├── config <-- Configuration files goes here
|   ├── development.json <-- used during local development, loaded if NODE_ENV is unset
|   └── production.json <-- used in production by setting NODE_ENV to production
└── app.js <-- the app
```
If you want to change the directory where the config files are loaded from you can set the environment variable CONFIG_BASE_PATH to the desired path.

### Good things to know
The code uses eval. Could be a potential security problem. It's loaded from the start and not in runtime so it should not pose a risk. It needs further investigation.

Using ' for strings in the config files won't work.

Use at your own risk. You have been warned.
