package oslomet.uni;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class uniController {
    @Autowired
    private uniRepository rep;

    @GetMapping("/fjernFag")
    public void fjernFag(String id,String studid) {
        rep.fjernFag(id, studid);
    }
    @PostMapping("/leggtilFag")
    public void leggtilFag(String id,String studid){
        rep.leggtilFag(id,studid);
    }

    @GetMapping("/hentEnStudent")
    public Student hentEnStudent(String studid) {
        return rep.hentEnStudent(studid);

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

}}
