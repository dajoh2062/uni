CREATE TABLE Student (
    id INTEGER AUTO_INCREMENT NOT NULL,
    navn VARCHAR(25) NOT NULL,
    telefon VARCHAR(10) NOT NULL,
    studienavn VARCHAR(50) NOT NULL,
    PRIMARY KEY (ID)
)
CREATE TABLE Fag (
    id VARCHAR(10) NOT NULL,
    navn VARCHAR(15) NOT NULL,
    ansvar VARCHAR(25),
    eksamensdato VARCHAR(10),
    primary key (id)
)

