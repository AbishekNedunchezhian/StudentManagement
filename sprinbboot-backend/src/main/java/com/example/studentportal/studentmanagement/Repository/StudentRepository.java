package com.example.studentportal.studentmanagement.Repository;

import com.example.studentportal.studentmanagement.Entity.StudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface StudentRepository extends JpaRepository<StudentEntity,Long> {
        //this line to find a match or empty reg,password
        Optional<StudentEntity> findByRegAndPassword(String reg,String password);
        List<StudentEntity> findByReg(String reg);

}
