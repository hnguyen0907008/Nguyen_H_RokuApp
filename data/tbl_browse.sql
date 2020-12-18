-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 18, 2020 at 02:38 PM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `db_roku`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_browse`
--

CREATE TABLE `tbl_browse` (
  `id` int(20) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `rating` varchar(10) DEFAULT NULL,
  `genre` varchar(50) DEFAULT NULL,
  `year` varchar(10) DEFAULT NULL,
  `stars` varchar(50) DEFAULT NULL,
  `poster` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_browse`
--

INSERT INTO `tbl_browse` (`id`, `name`, `rating`, `genre`, `year`, `stars`, `poster`) VALUES
(1, 'IT', '6/10', 'Horror', '1990', 'Tim Curry', 'it.jpg'),
(2, 'THE GOOD THE BAD THE UGLY', '9/10', 'Action', '1966', 'Clint Eastwood', 'thegood.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_browse`
--
ALTER TABLE `tbl_browse`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_browse`
--
ALTER TABLE `tbl_browse`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
