DROP DATABASE coverSongCompiler_db;

CREATE DATABASE coverSongCompiler_db;

USE coverSongCompiler_db;

CREATE TABLE songs(
    id NOT NULL AUTO_INCREMENT,
    songTitle VARCHAR(45) NULL,
    songArtist VARCHAR(45) NULL,
    songGenre VARCHAR(45) NULL,
    PRIMARY KEY (id)
);