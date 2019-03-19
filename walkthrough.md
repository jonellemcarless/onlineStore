# Code Walkthrough

Express server


## NPM packages used

- axios: Promise based HTTP client for the browser and node.js
- babel: Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.
- babel-loader
- classnames: A simple JavaScript utility for conditionally joining classNames together.
- eslint: an open source JavaScript linting utility that help you overcome developer errors as JavaScript is loosely-typed language.
- eslint-loader
- jwt-decode
- mysql
- passport jwt
- prop-types: PropTypes exports a range of validators that can be used to make sure the data you receive is valid.
- react
- react-dom:
- react-error-overlay
- react-redux:
- react-router-dom:
- react-scripts
- redux
- redux-thunk
- typescript
- validator: A library of string validators and sanitizers (Input sanitization describes cleansing and scrubbing user input to prevent it from jumping the fence and exploiting security holes.)
- webpack

- bcryptjs: used to hash passwords before we store them in our database
- body-parser: used to parse incoming request bodies in a middleware
concurrently: allows us to run our backend and frontend concurrently and on different ports
- express: sits on top of Node to make the routing, request handling, and responding easier to write
- is-empty: global function that will come in handy when we use validator
- jsonwebtoken: used for authorization
mongoose: used to interact with MongoDB
passport: used to authenticate requests, which it does through an extensible set of plugins known as strategies
- passport-jwt: passport strategy for authenticating with a JSON Web Token (JWT); lets you authenticate endpoints using a JWT
- validator: used to validate inputs (e.g. check for valid email format, confirming passwords match)

- axios: promise based HTTP client for making requests to our backend
classnames: used for conditional classes in our JSX
- jwt-decode: used to decode our jwt so we can get user data from it
- react-redux: allows us to use Redux with React
react-router-dom: used for routing purposes
- redux: used to manage state between components (can be used with React or any other view library)
- redux-thunk: middleware for Redux that allows us to directly access the dispatch method to make asynchronous calls from our actions