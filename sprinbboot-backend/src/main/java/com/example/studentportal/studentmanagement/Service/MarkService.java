package com.example.studentportal.studentmanagement.Service;

import com.example.studentportal.studentmanagement.MarkDTO.MarkDTO;
import com.example.studentportal.studentmanagement.StudentDTO.StudentDTO;

import java.util.List;

public interface MarkService {


    String Addmark(MarkDTO markDTO);

    List<MarkDTO> Displaylogic(String reg);
}

