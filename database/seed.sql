USE employeeTracker_db;


INSERT INTO department
    (name)
VALUES
    ("Sales"),
    ("Engineering"),
    ("Design"),
    ("Legal");

INSERT INTO role
    (department_id, title, salary)
VALUES
    (1, "Jr Salesperson", 70000),
    (1, "Sr Salesperson", 100000),
    (2, "Software Engineer", 90000),
    (2, "Lead Engineer", 100000),
    (3, "Jr Designer", 60000),
    (3, "Sr Designer", 100000),
    (4, "HR Manager", 100000),
    (4, "Accountant", 100000);


INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Sydney", "Krantz", 1, NULL),
    ("Bob", "Smith", 4, NULL),
    ("Mary", "Jane", 6, NULL),
    ("Dick", "Brick", 8, NULL),
    ("Moses", "Israel", 2, NULL);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Sally", "Smelly", 3, 1),
    ("John", "Jacob", 5, 2),
    ("Ugg", "Lee", 7, 3);