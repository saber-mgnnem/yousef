-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : sam. 13 avr. 2024 à 19:19
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `pfeyousef`
--

-- --------------------------------------------------------

--
-- Structure de la table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_03_15_231230_add_expires_at_column_to_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Structure de la table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) NOT NULL,
  `token` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(191) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`, `expires_at`) VALUES
(2, 'App\\Models\\User', 2, 'sabermgannem@gmail.com_token', 'd12fab93831bbe44bec62274a82e467838a7bf1ec64c1f5036529e2b7837b12d', '[\"*\"]', '2024-04-09 21:08:12', '2024-04-09 21:06:26', '2024-04-09 21:08:12', NULL),
(5, 'App\\Models\\User', 1, 'admin@gmail.com_AdminToken', '94d994a11a195bcac25450c6fbc5986b0caad073755210422c8ca666aa9092d4', '[\"server:admin\"]', '2024-04-13 11:34:51', '2024-04-13 11:17:32', '2024-04-13 11:34:51', NULL),
(6, 'App\\Models\\User', 1, 'admin@gmail.com_AdminToken', '5ad23d411f50fab8dc0614815b8268c9dc44e9f481612e9454e0628366b9e3cd', '[\"server:admin\"]', '2024-04-13 11:44:55', '2024-04-13 11:37:08', '2024-04-13 11:44:55', NULL),
(7, 'App\\Models\\User', 1, 'admin@gmail.com_AdminToken', 'dbceb5b3f230e7d4fa938bdffa12e2c83427d565c8bb6af03854a402a91a8f2f', '[\"server:admin\"]', '2024-04-13 12:32:29', '2024-04-13 11:51:27', '2024-04-13 12:32:29', NULL),
(9, 'App\\Models\\User', 3, 'rahma@gmail.com_EnseignantToken', 'c3282a19d1823495fa4fde329727c0bb71cbba2e4d0050fb33f3c4c7a06dbf09', '[\"server:enseignant\"]', NULL, '2024-04-13 13:03:53', '2024-04-13 13:03:53', NULL),
(10, 'App\\Models\\User', 3, 'rahma@gmail.com_EnseignantToken', '5194363faabcfb5d60f061bb6847f1cdc10e0ff398e542d5e3cef7ff2fa90275', '[\"server:enseignant\"]', NULL, '2024-04-13 13:04:23', '2024-04-13 13:04:23', NULL),
(11, 'App\\Models\\User', 3, 'rahma@gmail.com_EnseignantToken', '308cfc1af1ee301332f4f6f8c023dbf8564d373cb01afd4d759b65a1dddc438b', '[\"server:enseignant\"]', '2024-04-13 14:32:04', '2024-04-13 13:07:57', '2024-04-13 14:32:04', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `fisrtname` varchar(191) NOT NULL,
  `lastname` varchar(191) NOT NULL,
  `phone` varchar(191) NOT NULL,
  `role` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) NOT NULL,
  `address` varchar(191) DEFAULT NULL,
  `country` varchar(191) DEFAULT NULL,
  `image` varchar(191) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `fisrtname`, `lastname`, `phone`, `role`, `email`, `email_verified_at`, `password`, `address`, `country`, `image`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'MasterAdmin', '76453876', 'Admin', 'admin@gmail.com', NULL, '$2y$10$IS2W3eKfdqGU8klCDwEOxucPkdAymAMK1A8AIOWRRW9Vmby6IDjdG', NULL, NULL, NULL, NULL, '2024-04-09 20:58:19', '2024-04-09 20:58:19'),
(2, 'Saber', 'Mgannem', '64557456', 'Etudiant', 'sabermgannem@gmail.com', NULL, '$2y$10$cNoT9rVG4622oMUTZvCIvubE3O9TP2Rl7FL4HJIaVKETRfYl3l2/.', NULL, NULL, NULL, NULL, '2024-04-09 21:06:26', '2024-04-09 21:06:26'),
(3, 'Rahma', 'Magannem', '55672898', 'Enseignant', 'rahma@gmail.com', NULL, '$2y$10$crqJwFBOqtVssyxebM2lx.CBsBJYYL4U6btNvDKcY8Of7f.S08IZe', NULL, NULL, NULL, NULL, '2024-04-13 12:34:25', '2024-04-13 12:34:25');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Index pour la table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Index pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
