package oslomet.uni;


// Student.java
public class Student {
    private String studid;
    private String navn;
    private String telefon;
    private String studienavn;

    // Constructors
    public Student() {
    }

    public Student(String studid, String navn, String telefon, String studienavn) {
        this.studid = studid;
        this.navn = navn;
        this.telefon = telefon;
        this.studienavn = studienavn;
    }

    // Getters and Setters
    public String getStudid() {
        return studid;
    }

    public void setStudid(String studid) {
        this.studid = studid;
    }

    public String getNavn() {
        return navn;
    }

    public void setNavn(String navn) {
        this.navn = navn;
    }

    public String getTelefon() {
        return telefon;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }

    public String getStudienavn() {
        return studienavn;
    }

    public void setStudienavn(String studienavn) {
        this.studienavn = studienavn;
    }

    // toString method
    @Override
    public String toString() {
        return "Student{" +
                "id=" + studid +
                ", navn='" + navn + '\'' +
                ", telefon='" + telefon + '\'' +
                ", studienavn='" + studienavn + '\'' +
                '}';
    }
}
