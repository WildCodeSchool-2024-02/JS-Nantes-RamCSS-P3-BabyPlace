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


-- Insertion des données dans la table favorite
INSERT INTO `favorite` (`nursery_id`, `parent_id`)
VALUES
(1, 1),
(2, 2);
