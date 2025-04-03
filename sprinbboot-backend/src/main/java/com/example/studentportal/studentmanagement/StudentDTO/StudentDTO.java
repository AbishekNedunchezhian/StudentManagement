package com.example.studentportal.studentmanagement.StudentDTO;

public class StudentDTO {
    private String name;
    private String reg;

    private String password;
    private String age;
    private String year;

    private String clg;

    public StudentDTO(String name, String reg, String password, String age, String year, String clg) {
        this.name = name;
        this.reg = reg;
        this.password = password;
        this.age = age;
        this.year = year;
        this.clg = clg;
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
    public StudentDTO()
    {

    }
}
