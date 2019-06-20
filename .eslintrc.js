module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
    },
    "extends": [
        "airbnb-base",
        "plugin:node/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    parser: "babel-eslint",
    "plugins": [
        "react"
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "rules": {
        "max-len": [1, 70, 2, {ignoreComments: true}]
    },
};