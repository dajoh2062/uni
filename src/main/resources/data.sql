INSERT INTO Student (studid, navn, telefon, studienavn)
VALUES ('s383075', 'Meg', '48474930', 'Computer Science');

INSERT INTO Fag (id, navn, ansvar, eksamensdato)
VALUES
    ('1700', 'Webprogrammering', 'Cosmin', '25 mai'),
    ('1500', 'Databaser', 'Tor', '27. mai'),
    ('1000', 'Matte', 'Martin', '11. juni');

INSERT INTO Fagtakere (studid, id)
VALUES
    ('s383075', '1500'),
    ('s383075', '1000');

INSERT INTO Bruker (passord,studid)
VALUES ('p','s383075');