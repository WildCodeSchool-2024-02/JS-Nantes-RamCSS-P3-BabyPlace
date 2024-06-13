-- Création de la table Parent
CREATE TABLE `Parent` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `firstname` VARCHAR(100) NOT NULL,
    `lastname` VARCHAR(100) NOT NULL,
    `occupation` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(15) NOT NULL,
    `email` VARCHAR(320) NOT NULL,
    `address` VARCHAR(150) NOT NULL,
    `identity_card` BOOL NOT NULL,
    `photo` VARCHAR(20) NOT NULL,
    `social_security_number` INT NOT NULL,
    `caf_number` INT NOT NULL,
    `proof_of_income` BOOL NOT NULL,
    `taxe_filling` BOOL NOT NULL,
    `proof_of_adress` BOOL NOT NULL,
    `proof_of_professional_status` BOOL NOT NULL,
    `rib` INT NOT NULL,
    `photo_and_video_authorization` BOOL NOT NULL,
    `exit_permit` BOOL NOT NULL,
    `copy_of_family_record_book` BOOL NOT NULL,
    `copy_of_divorce_judgment` BOOL NOT NULL,
    `conditions_of_use` BOOL NOT NULL
);

-- Création de la table Child
CREATE TABLE `Child` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `firstname` VARCHAR(100) NOT NULL,
    `lastname` VARCHAR(100) NOT NULL,
    `birthday` DATE NOT NULL,
    `is_walker` BOOL NOT NULL,
    `is_disabled` BOOL NOT NULL,
    `allergies` VARCHAR(100) NOT NULL,
    `insurance_certificate` BOOL NOT NULL,
    `health_book` BOOL NOT NULL,
    `birth_certificate` BOOL NOT NULL,
    `name_doctor` VARCHAR(50) NOT NULL,
    `care_authorization` BOOL NOT NULL,
    `parent_id` INT NOT NULL,
    FOREIGN KEY (`parent_id`) REFERENCES `Parent`(`id`)
);

-- Création de la table Nursery
CREATE TABLE `Nursery` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `siret` INT NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `address` VARCHAR(150) NOT NULL,
    `postal_code` INT NOT NULL,
    `city` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(15) NOT NULL,
    `email` VARCHAR(320) NOT NULL,
    `type_of_nursery` VARCHAR(150) NOT NULL,
    `capacity` INT NOT NULL,
    `opening_hours` TIME NOT NULL,
    `closing_time` TIME NOT NULL,
    `hourly_price` DECIMAL NOT NULL,
    `agrement` INT NOT NULL,
    `photo_1` VARCHAR(20) NOT NULL,
    `photo_2` VARCHAR(20) NOT NULL,
    `photo_3` VARCHAR(20) NOT NULL,
    `description_nursery` VARCHAR(1500) NOT NULL,
    `disabled_children` BOOL NOT NULL,
    `outdoor_space` BOOL NOT NULL,
    `presence_of_animals` BOOL NOT NULL,
    `meal` BOOL NOT NULL,
    `hygiene_product` BOOL NOT NULL,
    `music_workshop` BOOL NOT NULL,
    `artistic_activities` BOOL NOT NULL,
    `bilingual_international` BOOL NOT NULL,
    `child_transport` BOOL NOT NULL,
    `code_of_conduct` BOOL NOT NULL
);

-- Création de la table Reservation
CREATE TABLE `Reservation` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `reservation_date` DATE NOT NULL,
    `reservation_status` INT NOT NULL,
    `status_date` DATE NOT NULL,
    `arriving_date` DATE NOT NULL,
    `exit_date` DATE NOT NULL,
    `price` DECIMAL NOT NULL,
    `nursery_id` INT NOT NULL,
    `child_id` INT NOT NULL,
    FOREIGN KEY (`nursery_id`) REFERENCES `Nursery`(`id`),
    FOREIGN KEY (`child_id`) REFERENCES `Child`(`id`)
);

-- Création de la table Favorite
CREATE TABLE `Favorite` (
    `nursery_id` INT NOT NULL,
    `parent_id` INT NOT NULL,
    PRIMARY KEY (`nursery_id`, `parent_id`),
    FOREIGN KEY (`parent_id`) REFERENCES `Parent`(`id`),
    FOREIGN KEY (`nursery_id`) REFERENCES `Nursery`(`id`)
);


--

-- Insertion des données dans la table Parent
INSERT INTO `Parent` ( `firstname`, `lastname`, `occupation`, `phone`, `email`, `address`, `identity_card`, `photo`, `social_security_number`, `caf_number`, `proof_of_income`, `taxe_filling`, `proof_of_adress`, `proof_of_professional_status`, `rib`, `photo_and_video_authorization`, `exit_permit`, `copy_of_family_record_book`, `copy_of_divorce_judgment`, `conditions_of_use`)
VALUES
( 'John', 'Doe', 'Engineer', 1234567890, 'john.doe@example.com', '123 Main St', TRUE, 'photo1.jpg', 123456789, 987654321, TRUE, TRUE, TRUE, TRUE, 12345678, TRUE, TRUE, TRUE, FALSE, TRUE),
('Jane', 'Smith', 'Doctor', 2345678901, 'jane.smith@example.com', '456 Elm St', TRUE, 'photo2.jpg', 234567890, 876543210, TRUE, TRUE, TRUE, TRUE, 23456789, TRUE, TRUE, TRUE, FALSE, TRUE);

-- Insertion des données dans la table Child
INSERT INTO `Child` (`id`, `firstname`, `lastname`, `birthday`, `is_walker`, `is_disabled`, `allergies`, `insurance_certificate`, `health_book`, `birth_certificate`, `name_doctor`, `care_authorization`, `parent_id`)
VALUES
(1, 'Alice', 'Doe', '2015-06-15', TRUE, FALSE, 'None', TRUE, TRUE, TRUE, 'Dr. Brown', TRUE, 1),
(2, 'Bob', 'Smith', '2017-09-23', FALSE, FALSE, 'Peanuts', TRUE, TRUE, TRUE, 'Dr. Green', TRUE, 2);

-- Insertion des données dans la table Nursery
INSERT INTO `Nursery` (`id`, `siret`, `name`, `address`, `postal_code`, `city`, `phone`, `email`, `type_of_nursery`, `capacity`, `opening_hours`, `closing_time`, `hourly_price`, `agrement`, `photo_1`, `photo_2`, `photo_3`, `description_nursery`, `disabled_children`, `outdoor_space`, `presence_of_animals`, `meal`, `hygiene_product`, `music_workshop`, `artistic_activities`, `bilingual_international`, `child_transport`, `code_of_conduct`)
VALUES
(1, 123456789, 'Happy Kids', '789 Pine St', 12345, 'Cityville', 3456789012, 'contact@happykids.com', 'Private', 50, '08:00:00', '18:00:00', 10.5, 1234, 'nursery1_1.jpg', 'nursery1_2.jpg', 'nursery1_3.jpg', 'A wonderful place for kids', TRUE, TRUE, FALSE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE),
(2, 987654321, 'Little Stars', '321 Oak St', 67890, 'Townsville', 4567890123, 'info@littlestars.com', 'Public', 30, '07:00:00', '17:00:00', 9.5, 5678, 'nursery2_1.jpg', 'nursery2_2.jpg', 'nursery2_3.jpg', 'A nurturing environment for children', TRUE, FALSE, TRUE, TRUE, TRUE, TRUE, TRUE, FALSE, TRUE, TRUE);

-- Insertion des données dans la table Reservation
INSERT INTO `Reservation` (`id`, `reservation_date`, `reservation_status`, `status_date`, `arriving_date`, `exit_date`, `price`, `nursery_id`, `child_id`)
VALUES
(1, '2024-01-01', 1, '2024-01-01', '2024-01-15', '2024-06-15', 500.00, 1, 1),
(2, '2024-02-01', 2, '2024-02-01', '2024-02-15', '2024-07-15', 450.00, 2, 2);

-- Insertion des données dans la table Favorite
INSERT INTO `Favorite` (`nursery_id`, `parent_id`)
VALUES
(1, 1),
(2, 2);
