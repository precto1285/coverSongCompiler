module.exports = function (sequelize, DataTypes) {
    var Songs = sequelize.define("Song", {
        songTitle: DataType.STRING,
        songArtist: DataType.STRING,
        songGenre: DataType.STRING
    });
    return Songs;
};