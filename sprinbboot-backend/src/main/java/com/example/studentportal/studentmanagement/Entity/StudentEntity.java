package com.example.studentportal.studentmanagement.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "student_data")
public class StudentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;
    @Column(name="student_name")
    private String name;
    @Column(name="student_reg")
    private String reg;
    @Column(name="student_password")
    private String password;
    @Column(name="student_age")
    private String age;
    @Column(name="student_year")
    private String year;
    @Column(name="student_clg")
    private String clg;

    public StudentEntity(String name, String reg, String password, String age, String year, String clg) {
        this.name = name;
        this.reg = reg;
        this.password = password;
        this.age = age;
        this.year = year;
        this.clg = clg;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getReg() {
        return reg;
    }

    public void setReg(String reg) {
        this.reg = reg;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getClg() {
        return clg;
    }

    public void setClg(String clg) {
        this.clg = clg;
    }
    public StudentEntity()
    {

    }

}
