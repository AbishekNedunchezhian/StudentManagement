package com.example.studentportal.studentmanagement.Service;

import com.example.studentportal.studentmanagement.StudentDTO.StudentDTO;

import java.util.List;

public interface Studentservice {
    String Registerlogic(StudentDTO studentDTO);

    boolean Loginlogic(String reg, String password);

    List<StudentDTO> Displaylogic(String reg);

    String Update(StudentDTO studentDTO);
}
