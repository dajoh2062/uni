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
    eksamensdato VARCHAR(20)
);

CREATE TABLE Bruker(
                       passord VARCHAR(100) NOT NULL,
                       studid VARCHAR(10),
                       FOREIGN KEY (studid) REFERENCES Student(studid),
                       UNIQUE (studid)
);

CREATE TABLE Admin(
    id VARCHAR(10) PRIMARY KEY UNIQUE,
    FOREIGN KEY (id) REFERENCES Student(studid)
);
CREATE TABLE Fagtakere (
    studid VARCHAR(10),
    id VARCHAR(10),
    FOREIGN KEY (id) REFERENCES Fag(id),
    FOREIGN KEY (studid) REFERENCES Student(studid),
    PRIMARY KEY (studid, id)

);