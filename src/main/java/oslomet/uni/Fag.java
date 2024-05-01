package oslomet.uni;


public class Fag {
    private String id;
    private String navn;
    private String ansvar;
    private String eksamensdato;

    // Constructors
    public Fag() {
    }

    public Fag(String id, String navn, String ansvar, String eksamensdato) {
        this.id = id;
        this.navn = navn;
        this.ansvar = ansvar;
        this.eksamensdato = eksamensdato;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNavn() {
        return navn;
    }

    public void setNavn(String navn) {
        this.navn = navn;
    }

    public String getAnsvar() {
        return ansvar;
    }

    public void setAnsvar(String ansvar) {
        this.ansvar = ansvar;
    }

    public String getEksamensdato() {
        return eksamensdato;
    }

    public void setEksamensdato(String eksamensdato) {
        this.eksamensdato = eksamensdato;
    }

    // toString method
    @Override
    public String toString() {
        return "Fag{" +
                "id='" + id + '\'' +
                ", navn='" + navn + '\'' +
                ", ansvar='" + ansvar + '\'' +
                ", eksamensdato='" + eksamensdato + '\'' +
                '}';
    }
}
