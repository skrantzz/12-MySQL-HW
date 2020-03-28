DROP DATABASE IF EXISTS employeeTracker_db;
create database employeeTracker_db;

use employeeTracker_db;

CREATE TABLE department
(
    id int AUTO_INCREMENT,
    name varchar(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE role (
    id int AUTO_INCREMENT,
    title varchar(30) NOT NULL,
    salary DECIMAL,
    department_id int not null,
    constraint fk_department foreign key (department_id) references department(id) on delete cascade,
    PRIMARY KEY(id)
);

CREATE TABLE employee (
    id int AUTO_INCREMENT,
    first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
    role_id int not null,
    constraint fk_role foreign key (role_id) references role(id) on delete cascade,
    manager_id int,
    constraint fk_manager foreign key (manager_id) references employee(id) on delete set null,
    PRIMARY KEY(id)
);
-- primary key = you want to make sure something unique  is the primary key , so ID is best. foreign key = dept_id number is going to link back to department, bc its foreign key
-- constraint, foreign key(what the name is in your table, so role_id),) references(primary key inside table referenced)
-- seed file is the info youre putting in
-- db folder with scheme and seeds.sql
-- server file inqurier etc. in sep file
-- insert into/create in /functions in their own sep file, and import them from server separate files or folder (db_queries or something)
-- look at act 14
-- join tables inside functions when you need info from both tables
-- you need constraint for query to join


