package oslomet.uni;

import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class uniController {
    @Autowired
    private uniRepository rep;

    @Autowired
    private HttpSession session;

    @GetMapping("/fjernFag")
    public void fjernFag(String id, String studid) {
        rep.fjernFag(id, studid);
    }

    @PostMapping("/leggtilFag")
    public void leggtilFag(String id, String studid) {
        rep.leggtilFag(id, studid);
    }

    @GetMapping("/hentEnStudent")
    public Student hentEnStudent(String studid) {
        return rep.hentEnStudent(studid);

    }

    @GetMapping("/inloggetBruker")
    public String inloggetbruker() {
        return (String) session.getAttribute("user");
    }

    @PostMapping("/endreStudent")
    public void endreStudent(Student student) {
        rep.endreStudent(student);
    }

    @GetMapping("/hentValgtefag")
    public List<Fag> valgtefag(String studid) {
        return rep.hentValgtefag(studid);
    }

    @GetMapping("/hentAndrefag")
    public List<Fag> andrefag(String studid) {
        return rep.hentAndrefag(studid);

    }

    @GetMapping("/loggInn")

    public boolean loggInn(Bruker student) {
        if (rep.loggInn(student)) {
            session.setAttribute("innlogget", true);
            session.setAttribute("user", student.getStudid());
            return true;
        } else {
            return false;
        }
    }

    @PostMapping("/lagreBruker")
    public void lagreBruker(@RequestBody Bruker student){
        rep.lagreBruker(student);
    }
}


