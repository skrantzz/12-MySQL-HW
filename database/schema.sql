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



-- drop database school;
-- create database school;
-- use school;

-- create table class(
-- id int not null auto_increment primary key, 
-- name varchar(100) not null, 
-- textbook_id int not null, constraint fk_textbook foreign key (textbook_id) references textbook(id)
-- );

-- create table textbook(
-- id int not null auto_increment primary key, 
-- title varchar(100) not null, 
-- publisher varchar(100) not null, 
-- year int not null);

-- create table student(
-- id int not null auto_increment primary key, 
-- name varchar(100) not null, 
-- homeroom_id int not null, constraint fk_homeroom foreign key (homeroom_id) references homeroom(id)
-- );

-- create table homeroom(
-- id int not null auto_increment primary key, 
-- room int not null
-- );

-- insert into textbook (title, publisher, year) values ('Algebra Fundamentals', 'Pearson', 2007), ('Biology: Made Easy', 'McGrath', 2017);
-- insert into class (name, textbook_id) values ('Algebra 101', 1), ('Intro to Biology', 2);
-- insert into homeroom (room) values (207), (111), (4), (25);
-- insert into student (name, homeroom_id) values ('Kevin', 1), ('Stacey', 2), ('Gwen', 1), ('Fred', 3), ('Jason', 4);
-- create table class_schedule (
-- id int not null auto_increment primary key, 
-- student_id int not null, constraint fk_student foreign key (student_id) references student(id), 
-- period_1 int not null, constraint fk_period_1 foreign key (period_1) references class(id), 
-- period_2 int not null, constraint fk_period_2 foreign key (period_2) references class(id)
-- );
-- insert into class_schedule (student_id, period_1, period_2) values (1, 1, 2), (2, 2, 1), (3, 1, 2);