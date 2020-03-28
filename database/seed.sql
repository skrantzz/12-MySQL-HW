USE employeeTracker_db;

INSERT INTO department
    (name)
VALUES
    ("Legal");

INSERT INTO role
    (title, salary, department_id)
VALUES
    ("HR", 67000, 1);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Bob", "Smith", 1, null);
    
    USE employeeTracker_db;

INSERT INTO department
    (name)
VALUES
    ("Sales");

INSERT INTO role
    (title, salary, department_id)
VALUES
    ("Sales Leas", 99000, 2);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Sydney", "Krantz", 1, null);





--     INSERT INTO department
--     (id, name)
-- VALUES
--     (NULL, "Sales"),
--     (NULL, "Engineering"),
--     (NULL, "Design"),
--     (NULL, "Legal");

-- INSERT INTO role
--     (id, department_id, title, salary)
-- VALUES
--     (NULL, 1, "Jr Salesperson", 70000),
--     (NULL, 1, "Sr Salesperson", 100000),
--     (NULL, 2, "Software Engineer", 90000),
--     (NULL, 2, "Lead Engineer", 100000),
--     (NULL, 3, "Jr Designer", 60000),
--     (NULL, 3, "Sr Designer", 100000),
--     (NULL, 4, "HR Manager", 100000),
--     (NULL, 4, "Accountant", 100000);
    

-- INSERT INTO employee
--     (id, first_name, last_name, role_id, manager_id)
-- VALUES
-- 	(NULL, "Sydney", "Krantz", 11, NULL),
--     (NULL, "Bob", "Smith", 1, NULL),
--     (NULL, "Sally", "Smelly", 2, 3),
--     (NULL, "John", "Jacob", 4, 9),
--     (NULL, "Mary", "Jane", 12, NULL),
--     (NULL, "Ugg", "Lee", 5, 7),
--     (NULL, "Dick", "Brick", 9, NULL),
--     (NULL, "Moses", "Israel", 6, NULL);