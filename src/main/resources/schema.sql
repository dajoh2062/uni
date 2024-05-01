CREATE TABLE Student (
    studid VARCHAR(10)  PRIMARY KEY UNIQUE,
    navn VARCHAR(50) NOT NULL,
    telefon VARCHAR(15) NOT NULL,
    studienavn VARCHAR(50) NOT NULL
);

CREATE TABLE Fag (
    id VARCHAR(10) PRIMARY KEY UNIQUE,
    navn VARCHAR(50) NOT NULL,
    ansvar VARCHAR(50),
    eksamensdato DATE
);

CREATE TABLE Bruker(
    passord VARCHAR(50) NOT NULL,
    studid VARCHAR(10),
    FOREIGN KEY (studid) REFERENCES Student(studid)
);
CREATE TABLE Admin(
    id VARCHAR(10) PRIMARY KEY UNIQUE,
    FOREIGN KEY (Admin) REFERENCES Student(studid)
);