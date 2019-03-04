# liri-node-app
LIRI - Language Interpretation and Recognition Interface. 

LIRI will be a command line node app that takes in parameters and gives you back data.

LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

* To send requests I'll be using the acios package. APIs and Node packages that'll be used will be:
    * Node-Spotify-API
    * AXIOS
    * OMDB API
    * Bands in Town API
    * Moment
    * DotEnv

1. Users:
    1. When entering the terminal *npm install* to make sure you get the updated package.json information
    2. After doing so remember the commands or jot them down somewhere
        1. *concert-this*, *spotify-this-song*, *movie-this*
    3. Example using commands that'll display the requested information are so:
        1. *node liri concert-this "name of band/artist"*
        2. *node liri spotify-this-song "name of song"*
        3. *node liri movie-this "name of movie"*

**Friendly reminder to double-check the spelling. Trust me :) It'll save you time and headaches**