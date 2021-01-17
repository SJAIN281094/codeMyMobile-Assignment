CREATE DATABASE `codemymobile`;

CREATE TABLE `users` (
  `id` varchar(255) PRIMARY KEY NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `avatar` varchar(255),
  `createdAt` datetime  Default NOW(),
  `updatedAt` datetime  Default NOW()
);

CREATE TABLE `friends` (
  `id`INT(11) AUTO_INCREMENT PRIMARY KEY,
  `userOneId` varchar(255) NOT NULL,
  `userTwoId` varchar(255) NOT NULL,
  `createdAt` datetime  Default NOW(),
  `updatedAt` datetime  Default NOW()
);

ALTER TABLE `friends` ADD FOREIGN KEY (`userOneId`) REFERENCES `users` (`id`);
ALTER TABLE `friends` ADD FOREIGN KEY (`userTwoId`) REFERENCES `users` (`id`);

CREATE INDEX `friendsOne` ON `friends` (userOneId);
CREATE INDEX `friendsTwo` ON `friends` (userTwoId);


/*
* Data Entries
*/

-- function uuidv4() {
--   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
--     var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
--     return v.toString(16);
--   });
-- }

INSERT INTO users(id, firstName, lastName, avatar) VALUES  ('52def640-4599-4a6f-b298-858040aa162','Rahul', 'Singh', 'https://gravatar.com/avatar/91dce9407f96eadf9f6bb20d97905c57?s=400&d=robohash&r=x');
INSERT INTO users(id, firstName, lastName, avatar) VALUES  ('efd0612f-9d2a-413a-bcd0-2bf37eed84b6', 'Karan', 'Mehta', 'https://gravatar.com/avatar/6d9624c9e73382c59fa2c94e3073ece7?s=400&d=robohash&r=x');
INSERT INTO users(id, firstName, lastName, avatar) VALUES  ('3d2771a8-3379-4d51-8d27-d83e4f3af656', 'Abhishek', 'Mishra', 'https://gravatar.com/avatar/49d47f58c17dedae1601a3ce7cc7ee9d?s=400&d=robohash&r=x');
INSERT INTO users(id, firstName, lastName, avatar) VALUES  ('f1e700b2-01b6-4465-b1eb-0f63ac8c1b14', 'Yogi', 'Sharma',  'https://gravatar.com/avatar/31e656e669bc83da9148dc57b36d419c?s=400&d=robohash&r=x');
INSERT INTO users(id, firstName, lastName, avatar) VALUES  ('e47fdd07-05e5-475a-88e7-9ec1ffee8688', 'Shubham', 'Jain', 'https://gravatar.com/avatar/1c8e8a6e8d1fe52b782b280909abeb38?s=400&d=robohash&r=x');
INSERT INTO users(id, firstName, lastName, avatar) VALUES  ('5c2dfc8e-97a4-4495-ad78-d5caba9050a8', 'Aman', 'Sharma', 'https://gravatar.com/avatar/9f8d5825d134995cd783d140f72ec9f0?s=400&d=robohash&r=x');
INSERT INTO users(id, firstName, lastName, avatar) VALUES  ('7e223f07-eda8-43d9-984d-e84c0b710406', 'Neha', 'kulkarni', 'https://robohash.org/4c3a2b4cfdbf19335a85214316d89cce?set=set4&bgset=&size=400x400');
INSERT INTO users(id, firstName, lastName, avatar) VALUES  ('a446f86f-faca-4ec9-befd-b9983336ef0b', 'Pooja', 'Gupta', 'https://robohash.org/1c8e8a6e8d1fe52b782b280909abeb38?set=set4&bgset=&size=400x400');
INSERT INTO users(id, firstName, lastName, avatar) VALUES  ('2ff66cb8-7d0f-45be-80be-a7cf2ede9466', 'Deepika', 'Singh', 'https://robohash.org/8d0f9ee68dd437392e80723fcefcd42b?set=set4&bgset=&size=400x400');
INSERT INTO users(id, firstName, lastName, avatar) VALUES  ('c26cb3cb-d15c-49ec-8004-3e967d39727a', 'Yogita', 'Kapoor', 'https://robohash.org/22a386ce316d518c91a13dff55f39832?set=set4&bgset=&size=400x400');


INSERT INTO friends(userOneId, userTwoId) VALUES  ('52def640-4599-4a6f-b298-858040aa162', 'efd0612f-9d2a-413a-bcd0-2bf37eed84b6');
INSERT INTO friends(userOneId, userTwoId) VALUES  ('52def640-4599-4a6f-b298-858040aa162', 'e47fdd07-05e5-475a-88e7-9ec1ffee8688');
INSERT INTO friends(userOneId, userTwoId) VALUES  ('52def640-4599-4a6f-b298-858040aa162', '7e223f07-eda8-43d9-984d-e84c0b710406');
INSERT INTO friends(userOneId, userTwoId) VALUES  ('52def640-4599-4a6f-b298-858040aa162', '2ff66cb8-7d0f-45be-80be-a7cf2ede9466');
INSERT INTO friends(userOneId, userTwoId) VALUES  ('52def640-4599-4a6f-b298-858040aa162', 'a446f86f-faca-4ec9-befd-b9983336ef0b');
INSERT INTO friends(userOneId, userTwoId) VALUES  ('52def640-4599-4a6f-b298-858040aa162', 'c26cb3cb-d15c-49ec-8004-3e967d39727a');

INSERT INTO friends(userOneId, userTwoId) VALUES  ('efd0612f-9d2a-413a-bcd0-2bf37eed84b6', '3d2771a8-3379-4d51-8d27-d83e4f3af656');
INSERT INTO friends(userOneId, userTwoId) VALUES  ('efd0612f-9d2a-413a-bcd0-2bf37eed84b6', 'e47fdd07-05e5-475a-88e7-9ec1ffee8688');
INSERT INTO friends(userOneId, userTwoId) VALUES  ('efd0612f-9d2a-413a-bcd0-2bf37eed84b6', '7e223f07-eda8-43d9-984d-e84c0b710406');
INSERT INTO friends(userOneId, userTwoId) VALUES  ('efd0612f-9d2a-413a-bcd0-2bf37eed84b6', '2ff66cb8-7d0f-45be-80be-a7cf2ede9466');

INSERT INTO friends(userOneId, userTwoId) VALUES  ('e47fdd07-05e5-475a-88e7-9ec1ffee8688', 'a446f86f-faca-4ec9-befd-b9983336ef0b');
INSERT INTO friends(userOneId, userTwoId) VALUES  ('e47fdd07-05e5-475a-88e7-9ec1ffee8688', 'f1e700b2-01b6-4465-b1eb-0f63ac8c1b14');
INSERT INTO friends(userOneId, userTwoId) VALUES  ('e47fdd07-05e5-475a-88e7-9ec1ffee8688', '2ff66cb8-7d0f-45be-80be-a7cf2ede9466');
INSERT INTO friends(userOneId, userTwoId) VALUES  ('e47fdd07-05e5-475a-88e7-9ec1ffee8688', 'c26cb3cb-d15c-49ec-8004-3e967d39727a');

INSERT INTO friends(userOneId, userTwoId) VALUES  ('a446f86f-faca-4ec9-befd-b9983336ef0b', '2ff66cb8-7d0f-45be-80be-a7cf2ede9466');
INSERT INTO friends(userOneId, userTwoId) VALUES  ('a446f86f-faca-4ec9-befd-b9983336ef0b', 'c26cb3cb-d15c-49ec-8004-3e967d39727a');