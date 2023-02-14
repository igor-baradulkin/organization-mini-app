-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Фев 14 2023 г., 08:42
-- Версия сервера: 10.4.25-MariaDB
-- Версия PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `organization`
--

-- --------------------------------------------------------

--
-- Структура таблицы `departments`
--

CREATE TABLE `departments` (
  `DepartentId` int(11) NOT NULL,
  `ParentDepartmentId` int(11) DEFAULT NULL,
  `DepartmentName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Структура таблицы `files`
--

CREATE TABLE `files` (
  `FileName` varchar(255) DEFAULT NULL,
  `LoadDate` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `UserId` int(11) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `SecondName` varchar(255) NOT NULL,
  `DepartamentId` int(11) NOT NULL,
  `WorkPosition` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `MobilePhone` varchar(255) DEFAULT NULL,
  `Phone` varchar(255) DEFAULT NULL,
  `Login` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


--
-- Индексы таблицы `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`DepartentId`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserId`),
  ADD KEY `DepartamentId` (`DepartamentId`);
