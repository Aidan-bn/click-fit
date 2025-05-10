CREATE TABLE users (
    ID INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL,
    password VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL,
    type VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL,
    active TINYINT DEFAULT 1,
    PRIMARY KEY (ID),
    UNIQUE (email)
) ENGINE = innoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- //procedure(stored query)

CREATE PROCEDURE addUser
INSERT INTO users ( email, password, type) VALUES ("aidan@me.com", "pass123", "admin");
AS
GO;

EXEC addUser;