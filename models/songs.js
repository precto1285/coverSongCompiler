module.exports = function (sequelize, DataTypes) {
    var Songs = sequelize.define("Song", {
        songTitle: {
            type: DataType.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        songArtist: {
            type: DataType.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        songGenre: {
            type: DataType.STRING,
            allowNull: true,
            defaultValue: "Rock"
            }
        }
    });
    return Songs;
};