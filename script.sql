DROP DATABASE IF EXISTS temperature_watcher;

CREATE DATABASE temperature_watcher;

USE temperature_watcher;

CREATE TABLE sensors (
  ID int not null auto_increment,
  temperature int not null,
  name varchar(20),

  primary key (ID)
);

INSERT INTO sensors (temperature) VALUES (20);
INSERT INTO sensors (temperature) VALUES (20);
INSERT INTO sensors (temperature) VALUES (20);
INSERT INTO sensors (temperature) VALUES (20);
INSERT INTO sensors (temperature) VALUES (20);
INSERT INTO sensors (temperature) VALUES (20);

CREATE TABLE active (
  ID int not null auto_increment,
  activate tinyint not null,
  ID_sensor int not null,
  
  primary key (ID),
  foreign key (ID_sensor) references sensors(ID)
);

INSERT INTO active (activate, ID_sensor) VALUES (0, 1);
INSERT INTO active (activate, ID_sensor) VALUES (0, 2);
INSERT INTO active (activate, ID_sensor) VALUES (0, 3);
INSERT INTO active (activate, ID_sensor) VALUES (0, 4);
INSERT INTO active (activate, ID_sensor) VALUES (0, 5);
INSERT INTO active (activate, ID_sensor) VALUES (0, 6);

CREATE TABLE max_temp (
  ID int not null auto_increment,
  temperature int not null,
  ID_sensor int not null,

  primary key (ID),
  foreign key (ID_sensor) references sensors(ID)
);

INSERT INTO max_temp (temperature, ID_sensor) VALUES (30, 1);
INSERT INTO max_temp (temperature, ID_sensor) VALUES (30, 2);
INSERT INTO max_temp (temperature, ID_sensor) VALUES (30, 3);
INSERT INTO max_temp (temperature, ID_sensor) VALUES (30, 4);
INSERT INTO max_temp (temperature, ID_sensor) VALUES (30, 5);
INSERT INTO max_temp (temperature, ID_sensor) VALUES (30, 6);

CREATE TABLE destinatary (
  ID int not null auto_increment,
  email varchar(60) not null,

  primary key (ID)  
);

INSERT INTO destinatary (email) VALUES ("temp@watcher.com");