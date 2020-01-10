# Button game
Button game is a simple game where you have to click the button to gain points. Each time you click the button you lose point but you have a chance to win more, depending on how many times the button has been clicked. If your points drop down to 0 you lose.

Application frontend is made with React and backend with node.js. Player points and button clicks are saved in mongodb.

## Heroku
Application runs in heroku and database is in Atlas mongoDb cloud.

[Heroku link](https://button-game-koodijahti.herokuapp.com/)


## How to install
1. Clone the repository
```
git clone https://github.com/tulma95/button-game
```

2. Move to repository, install dependencies and build project
```
cd button-game
npm install
npm run build
```

3. Make .env file
```
touch .env
```

Open .env with your favorite text editor and add these configurations. If you don't add PORT the app uses default port 3003
```
MONGODB_URI=
PORT=       //optional
```
Example of .env
```
MONGODB_URI=mongodb+srv://<user>:<password>@mongodb.net/db
```

5. Start application
```
npm start
```

With your browser navigate to http://localhost:3003/


