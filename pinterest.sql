CREATE DATABASE IF NOT EXISTS pinterest;

USE pinterest;

CREATE TABLE IF NOT EXISTS users(
      id INT NOT NULL,
      email VARCHAR(100) NOT NULL,
      `password` VARCHAR(100) NOT NULL,
      firebase_id VARCHAR(255),
      created_at TIMESTAMP,
      updated_at TIMESTAMP,
      deleted_at TIMESTAMP
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS pins (
      id INT NOT NULL,
      user_id INT NOT NULL,
      url VARCHAR(255) NOT NULL,
      created_at TIMESTAMP,
      updated_at TIMESTAMP,
      deleted_at TIMESTAMP
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS tag(
     id INT NOT NULL,
     `name` VARCHAR(100) NOT NULL
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS pins_tag(
     id INT NOT NULL,
     tag_id INT NOT NULL,
     pin_id INT NOT NULL
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS votes(
  id INT NOT NULL,
  pin_id INT NOT NULL,
  user_id INT NOT NULL
)ENGINE=INNODB








