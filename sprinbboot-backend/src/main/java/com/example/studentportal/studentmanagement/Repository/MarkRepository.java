package com.example.studentportal.studentmanagement.Repository;

import com.example.studentportal.studentmanagement.Entity.MarkEntity;
import com.example.studentportal.studentmanagement.Entity.StudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface MarkRepository extends JpaRepository<MarkEntity,Long> {


    List<MarkEntity> findByReg(String reg);
}
