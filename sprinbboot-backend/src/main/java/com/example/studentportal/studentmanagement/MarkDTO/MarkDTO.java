package com.example.studentportal.studentmanagement.MarkDTO;

public class MarkDTO {
    private String reg;
    private String sub_code;
    private String sub_name;
    private String sub_mark;
    private String grade;
    private String result;

    public MarkDTO(String reg, String sub_code, String sub_name, String sub_mark, String grade,String result ) {
        this.reg = reg;
        this.sub_code = sub_code;
        this.sub_name = sub_name;
        this.sub_mark = sub_mark;
        this.grade = grade;
        this.result = result;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public String getReg() {
        return reg;
    }

    public void setReg(String reg) {
        this.reg = reg;
    }

    public String getSub_code() {
        return sub_code;
    }

    public void setSub_code(String sub_code) {
        this.sub_code = sub_code;
    }

    public String getSub_name() {
        return sub_name;
    }

    public void setSub_name(String sub_name) {
        this.sub_name = sub_name;
    }

    public String getSub_mark() {
        return sub_mark;
    }

    public void setSub_mark(String sub_mark) {
        this.sub_mark = sub_mark;
    }

    public MarkDTO() {

    }
}
