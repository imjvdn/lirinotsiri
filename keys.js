console.log('~ACTIVATED~');

var spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET,
};
module.exports = { spotify: spotify };
