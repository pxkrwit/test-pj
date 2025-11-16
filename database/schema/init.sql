CREATE DATABASE project_database;
use project_database;
CREATE TABLE study_plans (
    id INT(10) AUTO_INCREMENT PRIMARY KEY,
    planCode VARCHAR(2) UNIQUE CHECK (planCode REGEXP '^[A-Za-z]{2}$'),
    nameEng VARCHAR(60)  NOT NULL CHECK (nameEng <> ''),
    nameTh VARCHAR(100) NOT NULL Check (nameTh <> '')
)CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

CREATE TABLE declared_plans (
	studentId CHAR(11) CHECK (studentId REGEXP '^[0-9]{11}$') PRIMARY KEY,
    planId INT NOT NULL,
    createdAt DATETIME,
    updatedAt DATETIME,
    FOREIGN KEY (planId) REFERENCES study_plans(id)
)CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;