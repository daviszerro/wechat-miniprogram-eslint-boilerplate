module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true
    },
    "globals": {
        "App": true,
        "event": true,
        "getApp": true,
        "getCurrentPages": true,
        "Page": true,
        "res": true,
        "wx": true
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-unused-vars": ["error", { 
            "varsIgnorePattern": "regeneratorRuntime" }]
    },
};
