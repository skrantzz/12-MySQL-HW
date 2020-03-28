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