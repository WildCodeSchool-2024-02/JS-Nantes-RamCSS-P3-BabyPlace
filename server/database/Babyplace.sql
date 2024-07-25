-- Création de la table parent
CREATE TABLE `parent` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `firstname` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `lastname` VARCHAR(100) NULL,
    `job` VARCHAR(100) NULL,
    `phone` VARCHAR(15) NULL,
    `email` VARCHAR(320) UNIQUE NOT NULL,
    `address` VARCHAR(150) NULL,
    `identity_card` BOOL NULL,
    `photo` VARCHAR(20) NULL,
    `social_security_number` INT NULL,
    `caf_number` INT NULL,
    `proof_of_income` BOOL NULL,
    `taxe_filling` BOOL NULL,
    `proof_of_adress` BOOL NULL,
    `proof_of_professional_status` BOOL NULL,
    `rib` INT NULL,
    `photo_and_video_authorization` BOOL NULL,
    `exit_permit` BOOL NULL,
    `copy_of_family_record_book` BOOL NULL,
    `copy_of_divorce_judgment` BOOL NULL,
    `conditions_of_use` BOOL NULL
);

-- Création de la table child
CREATE TABLE `child` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `firstname` VARCHAR(100) NOT NULL,
    `lastname` VARCHAR(100) NOT NULL,
    `birthday` DATE NOT NULL,
    `is_walker` BOOL NOT NULL,
    `is_disabled` BOOL NOT NULL,
    `allergies` VARCHAR(100) NOT NULL,
    `insurance_certificate` BOOL NULL,
    `health_book` BOOL NOT NULL,
    `birth_certificate` BOOL NULL,
    `name_doctor` VARCHAR(50) NOT NULL,
    `care_authorization` BOOL NOT NULL,
    `parent_id` INT NOT NULL,
    FOREIGN KEY (`parent_id`) REFERENCES `parent`(`id`)
    
);

-- Création de la table nursery
CREATE TABLE `nursery` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50) NULL,
    `email` VARCHAR(320) UNIQUE NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `siret` VARCHAR(50) NULL,
    `address` VARCHAR(150) NULL,
    `postcode` INT NULL,
    `city` VARCHAR(100) NULL,
    `phone` VARCHAR(15) NULL,
    `type_of_nursery` VARCHAR(150) NULL,
    `capacity` INT NULL,
    `opening_hours` TIME NULL,
    `closing_time` TIME NULL,
    `hourly_price` DECIMAL NULL,
    `agrement` INT NULL,
    `photo_1` VARCHAR(20) NULL,
    `photo_2` VARCHAR(20) NULL,
    `photo_3` VARCHAR(20) NULL,
    `description_nursery` VARCHAR(1500) NULL,
    `disabled_children` BOOL NULL,
    `outdoor_space` BOOL NULL,
    `presence_of_animals` BOOL NULL,
    `meal` BOOL NULL,
    `hygiene_product` BOOL NULL,
    `music_workshop` BOOL NULL,
    `artistic_activities` BOOL NULL,
    `bilingual_international` BOOL NULL,
    `child_transport` BOOL NULL,
    `code_of_conduct` BOOL NULL
);

-- Création de la table reservation
CREATE TABLE `reservation` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `reservation_date` DATE NOT NULL,
    `reservation_status` INT NOT NULL,
    `status_date` DATE NOT NULL,
    `arriving_date` DATE NOT NULL,
    `exit_date` DATE NOT NULL,
    `price` DECIMAL NOT NULL,
    `nursery_id` INT NOT NULL,
    `child_id` INT NOT NULL,
    FOREIGN KEY (`nursery_id`) REFERENCES `nursery`(`id`),
    FOREIGN KEY (`child_id`) REFERENCES `child`(`id`) ON DELETE CASCADE
);

-- Création de la table favorite
CREATE TABLE `favorite` (
    `nursery_id` INT NOT NULL,
    `parent_id` INT NOT NULL,
    PRIMARY KEY (`nursery_id`, `parent_id`),
    FOREIGN KEY (`parent_id`) REFERENCES `parent`(`id`),
    FOREIGN KEY (`nursery_id`) REFERENCES `nursery`(`id`)
);


--

-- Insertion des données dans la table parent
INSERT INTO `parent` ( `firstname`, `lastname`, `password`, `job`, `phone`, `email`, `address`, `identity_card`, `photo`, `social_security_number`, `caf_number`, `proof_of_income`, `taxe_filling`, `proof_of_adress`, `proof_of_professional_status`, `rib`, `photo_and_video_authorization`, `exit_permit`, `copy_of_family_record_book`, `copy_of_divorce_judgment`, `conditions_of_use`)
VALUES
( 'John', 'Doe', 'password', 'Engineer', 1234567890, 'john.doe@example.com', '123 Main St', TRUE, 'photo1.jpg', 123456789, 987654321, TRUE, TRUE, TRUE, TRUE, 12345678, TRUE, TRUE, TRUE, FALSE, TRUE),
('Jane', 'Smith', 'password', 'Doctor', 2345678901, 'jane.smith@example.com', '456 Elm St', TRUE, 'photo2.jpg', 234567890, 876543210, TRUE, TRUE, TRUE, TRUE, 23456789, TRUE, TRUE, TRUE, FALSE, TRUE);

-- Insertion des données dans la table child
INSERT INTO `child` (`id`, `firstname`, `lastname`, `birthday`, `is_walker`, `is_disabled`, `allergies`, `insurance_certificate`, `health_book`, `birth_certificate`, `name_doctor`, `care_authorization`, `parent_id`)
VALUES
(1, 'Alice', 'Doe', '2015-06-15', TRUE, FALSE, 'None', TRUE, TRUE, TRUE, 'Dr. Brown', TRUE, 1),
(2, 'Bob', 'Smith', '2017-09-23', FALSE, FALSE, 'Peanuts', TRUE, TRUE, TRUE, 'Dr. Green', TRUE, 2);

-- Insertion des données dans la table nursery
INSERT INTO `nursery` (`id`,`name`, `email`, `password`, `siret`,  `address`, `postcode`, `city`, `phone`, `type_of_nursery`, `capacity`, `opening_hours`, `closing_time`, `hourly_price`, `agrement`, `photo_1`, `photo_2`, `photo_3`, `description_nursery`, `disabled_children`, `outdoor_space`, `presence_of_animals`, `meal`, `hygiene_product`, `music_workshop`, `artistic_activities`, `bilingual_international`, `child_transport`, `code_of_conduct`)
VALUES
(1, 'Happy Kids', 'contact@happykids.com', 'COUCOU LES LOULOUS', 123456789, '789 Pine St', 12345, 'Cityville', 3456789012, 'Private', 50, '08:00:00', '18:00:00', 10.5, 1234, 'nursery1_1.jpg', 'nursery1_2.jpg', 'nursery1_3.jpg', 'A wonderful place for kids', TRUE, TRUE, FALSE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE),
(2, 'Little Stars', 'info@littlestars.com', 'COUCOU LES LOULOUS', 987654321, '321 Oak St', 67890, 'Townsville', 4567890123, 'Public', 30, '07:00:00', '17:00:00', 9.5, 5678, 'nursery2_1.jpg', 'nursery2_2.jpg', 'nursery2_3.jpg', 'A nurturing environment for children', TRUE, FALSE, TRUE, TRUE, TRUE, TRUE, TRUE, FALSE, TRUE, TRUE);

-- Insertion des données dans la table reservation
INSERT INTO `reservation` (`id`, `reservation_date`, `reservation_status`, `status_date`, `arriving_date`, `exit_date`, `price`, `nursery_id`, `child_id`)
VALUES
(1, '2024-01-01', 1, '2024-01-01', '2024-01-15', '2024-06-15', 500.00, 1, 1),
(2, '2024-02-01', 2, '2024-02-01', '2024-02-15', '2024-07-15', 450.00, 2, 2);

-- Insertion des données dans la table favorite
INSERT INTO `favorite` (`nursery_id`, `parent_id`)
VALUES
(1, 1),
(2, 2);
