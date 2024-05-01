package oslomet.uni;

public class Bruker {
    private String passord;
    private String studid;

    public Bruker() {
        // Default constructor
    }

    public Bruker(String passord, String studid) {
        this.passord = passord;
        this.studid = studid;
    }

    public String getPassord() {
        return passord;
    }

    public void setPassord(String passord) {
        this.passord = passord;
    }

    public String getStudid() {
        return studid;
    }

    public void setStudid(String studid) {
        this.studid = studid;
    }

    @Override
    public String toString() {
        return "Brukere{" +
                "passord='" + passord + '\'' +
                ", studid='" + studid + '\'' +
                '}';
    }
}
