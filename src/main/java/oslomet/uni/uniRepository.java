package oslomet.uni;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class uniRepository {
    @Autowired
    private JdbcTemplate db;


    public Student hentEnStudent(String studid){
        Object[] param = new Object[1];
        param[0]=studid;
        String sql = "select * from Student where studid = ?";
        Student student=db.queryForObject(sql, param, BeanPropertyRowMapper.newInstance(Student.class));
        return student;

    }
    public void endreStudent(Student student){
        String sql = "UPDATE Student SET navn=?, telefon=?, studienavn=? WHERE studid = ?";
        db.update(sql, student.getNavn(),student.getTelefon(),student.getStudienavn(), student.getStudid());

    }
    public List<Fag> hentValgtefag(String studid){
        Object[] param = new Object[1];
        param[0]=studid;
        String sql="SELECT * FROM FAG where id in(SELECT id FROM Fagtakere WHERE studid = ?)";
        List <Fag> fagene = db.query(sql,param,new BeanPropertyRowMapper(Fag.class));
        return fagene;
    }
    public List<Fag> hentAndrefag(String studid){
        Object[] param = new Object[1];
        param[0]=studid;
        String sql="SELECT * FROM FAG where id not in(SELECT id FROM Fagtakere WHERE studid = ?)";
        List <Fag> fagene = db.query(sql,param,new BeanPropertyRowMapper(Fag.class));
        return fagene;
    }
}


