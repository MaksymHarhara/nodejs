DROP DATABASE users;
CREATE DATABASE users;
\c users;
create TABLE users (
   id PRIMARY KEY NOT NULL auto_increment,
   login VARCHAR(255) NOT NULL,
   password VARCHAR(255) NOT NULL,
   age INTEGER NOT NULL,
   isdeleted BOOLEAN DEFAULT FALSE
);

CREATE TYPE roleType AS ENUM ('READ', 'WRITE', 'DELETE', 'SHARE', 'UPLOAD_FILES');

 CREATE TABLE groups (
    id PRIMARY KEY NOT NULL,
    group_name varchar(255) UNIQUE,
    roles roleType[]
);

CREATE TABLE user_group (
  id INTEGER,
  user_id INTEGER REFERENCES users (id) ON UPDATE CASCADE ON DELETE CASCADE,
  group_id INTEGER REFERENCES groups (id) ON UPDATE CASCADE ON DELETE CASCADE,
  PRIMARY KEY (user_id, group_id)
);

INSERT INTO USERS (ID, LOGIN, PASSWORD, AGE) VALUES (1, 'Tony', 'pw1', 25);
INSERT INTO USERS (ID, LOGIN, PASSWORD, AGE) VALUES (2, 'Tom', 'pw2', 29);
INSERT INTO USERS (ID, LOGIN, PASSWORD, AGE) VALUES (3, 'Tod', 'pw3', 35);
INSERT INTO USERS (ID, LOGIN, PASSWORD, AGE) VALUES (4, 'Jack', 'pw4', 30);
INSERT INTO USERS (ID, LOGIN, PASSWORD, AGE) VALUES (5, 'Jason', 'pw5', 31);
INSERT INTO USERS (ID, LOGIN, PASSWORD, AGE) VALUES (6, 'Justin', 'pw6', 33);

INSERT INTO groups (id, group_name, roles) VALUES
    (1, 'ADMIN', '{"READ", "WRITE", "DELETE", "SHARE", "UPLOAD_FILES"}'),
    (2, 'USER', '{"READ", "WRITE"}'),
    (3, 'GUEST', '{"READ", "SHARE"}');

INSERT INTO user_group (id, user_id, group_id) VALUES
    (1, 1, 1),
    (2, 1, 2),
    (3, 2, 1);
