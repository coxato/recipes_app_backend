-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-11-2023 a las 21:48:44
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `recipes_app`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ingredients`
--

CREATE TABLE `ingredients` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `ingredients`
--

INSERT INTO `ingredients` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
('1', 'cheese', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('2', 'tomato', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('3', 'rice', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('4', 'milk', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('5', 'pasta', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('6', 'flour', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recipes`
--

CREATE TABLE `recipes` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(2555) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `recipes`
--

INSERT INTO `recipes` (`id`, `name`, `description`, `image`, `createdAt`, `updatedAt`) VALUES
('1', 'pizza', 'italian food', 'https://png.pngtree.com/png-vector/20191019/ourmid/pngtree-plate-and-cutlery-icon-black-monochrome-style-png-image_1831171.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('2', 'tomato salad', 'healthy salad', 'https://png.pngtree.com/png-vector/20191019/ourmid/pngtree-plate-and-cutlery-icon-black-monochrome-style-png-image_1831171.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('3', 'Mararoni with cheese', 'a lot of cheese', 'https://png.pngtree.com/png-vector/20191019/ourmid/pngtree-plate-and-cutlery-icon-black-monochrome-style-png-image_1831171.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('4', 'rice pudding', 'sugar and rice', 'https://png.pngtree.com/png-vector/20191019/ourmid/pngtree-plate-and-cutlery-icon-black-monochrome-style-png-image_1831171.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recipe_ingredients`
--

CREATE TABLE `recipe_ingredients` (
  `id_recipe` varchar(21) NOT NULL,
  `id_ingredient` varchar(21) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `recipe_ingredients`
--

INSERT INTO `recipe_ingredients` (`id_recipe`, `id_ingredient`, `createdAt`, `updatedAt`) VALUES
('1', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('1', '6', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('2', '2', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('3', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('3', '5', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('4', '3', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('4', '4', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
('0422dd82-3cff-4398-986b-818423f21986', 'carlos', 'eduardo', 'carlos3@gmail.com', '$2a$10$n7GtM7Q3vaInB/FGfWWXhOIIc/Ds7yBqIV.h2uYR9F71OV8gWfjzK', '2023-11-04 19:40:56', '2023-11-04 19:40:56'),
('4b83d512-156e-4f52-8295-5e4af6f40759', 'carlos', 'eduardo', 'carlos4@gmail.com', '$2a$10$1sfYgXx01WmqijYnJ5bcJe0X1s9YrEKQZlklY/CqeLYEAJn9BaH72', '2023-11-04 19:41:40', '2023-11-04 19:41:40'),
('a19c81a8-b413-4306-a00a-549f629cccc9', 'carlos', 'eduardo', 'carlos@gmail.com', '$2a$10$VHRT9NFIxUJIY4AsaW0HvOVMcx.3/dXeRgcwE03nPwk4zeZ.CgO/a', '2023-11-04 19:36:54', '2023-11-04 19:36:54'),
('c0c2ea5e-dcf0-4a5f-8fd8-3f533a827988', 'carlos', 'eduardo', 'test@mail.com', '$2a$10$BlQE/cAhXQjkPfXT6Fvd5u8V0QLG74u/C65M9i02nk4xbJbWNSoh.', '2023-11-05 03:39:52', '2023-11-05 03:39:52');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ingredients`
--
ALTER TABLE `ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `recipe_ingredients`
--
ALTER TABLE `recipe_ingredients`
  ADD PRIMARY KEY (`id_recipe`,`id_ingredient`),
  ADD KEY `id_ingredient` (`id_ingredient`) USING BTREE,
  ADD KEY `id_recipe` (`id_recipe`) USING BTREE;

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `recipe_ingredients`
--
ALTER TABLE `recipe_ingredients`
  ADD CONSTRAINT `recipe_ingredients_ibfk_1` FOREIGN KEY (`id_recipe`) REFERENCES `recipes` (`id`),
  ADD CONSTRAINT `recipe_ingredients_ibfk_2` FOREIGN KEY (`id_ingredient`) REFERENCES `ingredients` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
