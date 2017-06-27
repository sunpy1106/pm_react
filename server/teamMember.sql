create table if not exists `teamMember`(
  `teamId` varchar(10),
  `userId` varchar(10),
  `role` varchar(4),
  `createTime` timestamp,
  primary key(`teamId`,`userId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO `teamMember` (`teamId`, `userId`, `role`, `createTime`) VALUES
('10000', '20000','1',now()),
('10000', '20001', '1',now()),
('10000', '20002', '1',now()),
('10000', '20003', '1',now()),
('10001', '20000','1',now()),
('10001', '20001', '1',now()),
('10001', '20002', '1',now()),
('10001', '20003', '1',now())
