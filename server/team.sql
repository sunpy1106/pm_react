create table if not exists `Team` (
  `teamId` varchar(10),
  `teamName` varchar(100),
  `superTeamId` varchar(10),
  `createTime` timestamp,
  `createUserId` varchar(10),
  primary key(`teamId`)
)ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO `team` (`teamId`, `teamName`,`superTeamId`,`createTime`) VALUES
('10000','笑傲江湖','',now()),
('10001', '计算机系','10000', now()),
('10002', '电子系','10000', now()),
('10003', '中文系', '10000',now()),
('10004', '外文系', '10000',now()),
('10005', '化学系', '10000',now()),
('10006','天龙八部','',now());
