CREATE DATABASE project_database;
use project_database;
CREATE TABLE study_plans (
    id int(10) AUTO_INCREMEN PRIMARY KEY,
    plan_code VARCHAR(2) UNIQUE CHECK (plan_code REGEXP '^[A-Za-z]{2}$'),
    name_eng VARCHAR(60)  NOT NULL CHECK (name_eng <> ''),
    name_th VARCHAR(100) NOT NULL Check (name_th <> '')
)CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

CREATE TABLE declared_plans (
	student_id INT(11) NOT NULL,
    plan_id INT NOT NULL,
    created_at DATETIME,
    updated_at DATETIME,
    PRIMARY KEY (student_id, plan_id),
    FOREIGN KEY (plan_id) REFERENCES study_plans(id)
)CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;