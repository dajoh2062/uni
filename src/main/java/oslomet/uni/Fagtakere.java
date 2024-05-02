package oslomet.uni;

public class Fagtakere {
    private String studid;
    private String id;

    public Fagtakere() {
        // Default constructor
    }

    public Fagtakere(String studid, String id) {
        this.studid = studid;
        this.id = id;
    }

    public String getStudid() {
        return studid;
    }

    public void setStudid(String studid) {
        this.studid = studid;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Fagtakere{" +
                "studid='" + studid + '\'' +
                ", id='" + id + '\'' +
                '}';
    }
}
