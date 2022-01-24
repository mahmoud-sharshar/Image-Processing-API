# Image Processing API

- The first project of Advanced web development Nanodegree.
- This is the simple API that offers image resizing feature.

### Stack

- Nodejs
- Express
- Jasmine
- Sharp

### Running API locally

- clone this repo.
- run `npm i`
- run `npm start`.

### Running test suite

- run `npm run test`

### Testing the image resizing locally

I added some images for testing purposes, try the following requests:

- `http://localhost:4000/images/resize?width=300&height=500&filename=encenadaport.jpg`
- `http://localhost:4000/images/resize?width=300&height=200&filename=fjord.jpg`

### Available scripts

- `npm start`: start the server locally.
- `npm run test`: build and run test suites.
- `npm run build`: build the API
- `npm run lint`: lint the codebase using ESlint.
- `npm run format`: format the codebase using prettier.
- `npm run jasmine`: run test suites using jasmine framework.
