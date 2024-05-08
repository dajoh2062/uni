package oslomet.uni;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class uniRepository {
    @Autowired
    private JdbcTemplate db;

    public void fjernFag(String id, String studid) {
        String sql = "DELETE FROM Fagtakere WHERE id=? and studid =?";
        db.update(sql, id, studid);
    }

    public void leggtilFag(String id, String studid) {
        String sql = "INSERT INTO Fagtakere (studid, id) VALUES (?,?)";
        db.update(sql, studid, id);
    }


    public Student hentEnStudent(String studid) {
        Object[] param = new Object[1];
        param[0] = studid;
        String sql = "select * from Student where studid = ?";
        Student student = db.queryForObject(sql, param, BeanPropertyRowMapper.newInstance(Student.class));
        return student;

    }

    public void endreStudent(Student student) {
        String sql = "UPDATE Student SET navn=?, telefon=?, studienavn=? WHERE studid = ?";
        db.update(sql, student.getNavn(), student.getTelefon(), student.getStudienavn(), student.getStudid());

    }

    public List<Fag> hentValgtefag(String studid) {
        Object[] param = new Object[1];
        param[0] = studid;
        String sql = "SELECT * FROM FAG where id in(SELECT id FROM Fagtakere WHERE studid = ?)";
        List<Fag> fagene = db.query(sql, param, new BeanPropertyRowMapper(Fag.class));
        return fagene;
    }

    public List<Fag> hentAndrefag(String studid) {
        Object[] param = new Object[1];
        param[0] = studid;
        String sql = "SELECT * FROM FAG where id not in(SELECT id FROM Fagtakere WHERE studid = ?)";
        List<Fag> fagene = db.query(sql, param, new BeanPropertyRowMapper(Fag.class));
        return fagene;
    }

/*
    public boolean loggInn(String studid, String passord){
        String sql= "SELECT count(*) from Bruker WHERE studid=? AND passord=?";
        int funnetBruker =db.queryForObject(sql, Integer.class, studid,passord);
        if(funnetBruker>0){
            return true;
        }
        else {
            return false;
        }
    }}

 */
    public boolean loggInn(Bruker student){
        String sql = "SELECT * FROM Bruker WHERE studid = ?";
        Bruker dbsStudent = db.queryForObject(sql,
                BeanPropertyRowMapper.newInstance(Bruker.class), student.getStudid());
        return sjekkPassord(dbsStudent.getPassord(),student.getPassord());

    }
    private String krypterPassord(String passord){
        BCryptPasswordEncoder bCrypt = new BCryptPasswordEncoder(5);
        String hashedPassord = bCrypt.encode(passord);
        return hashedPassord;
    }

    private boolean sjekkPassord(String passord, String hashedPassord){
        BCryptPasswordEncoder bCrypt = new BCryptPasswordEncoder();
        if(bCrypt.matches(hashedPassord,passord)){
            return true;
        }
        return false;
    }
    public void lagreBruker(Bruker student) {

        String hash =krypterPassord(student.getPassord());
        String sql = "INSERT INTO Bruker (passord, studid) VALUES(?,?)";
        db.update(sql,hash,student.getStudid());


    }
    public void lagreStudent(Student student){
        String sql="INSERT INTO Student (studid, navn, telefon, studienavn) VALUES(?,?,?,?)";
        db.update(sql, student.getStudid(), student.getNavn(), student.getTelefon(),student.getStudienavn());
    }



}
