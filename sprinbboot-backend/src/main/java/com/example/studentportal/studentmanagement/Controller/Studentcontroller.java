package com.example.studentportal.studentmanagement.Controller;

import com.example.studentportal.studentmanagement.Service.Studentservice;
import com.example.studentportal.studentmanagement.StudentDTO.StudentDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/student")
@CrossOrigin("http://localhost:3000")
public class Studentcontroller {
    @Autowired
    private Studentservice studentservice;

    @PostMapping(path = "/reg")
    public String Register(@RequestBody StudentDTO studentDTO)
    {
        return studentservice.Registerlogic(studentDTO);
    }
    @PostMapping(path = "/log")
    public ResponseEntity<String> Login(@RequestBody StudentDTO studentDTO)
    {
        if(studentservice.Loginlogic(studentDTO.getReg(),studentDTO.getPassword()))
        {
            return ResponseEntity.ok("Login Sucessfully");
        }
        return ResponseEntity.ok("Data not present in the database");
    }
    @GetMapping(path = "/display/{reg}")
    public List<StudentDTO> Display(@PathVariable(name = "reg") String reg)
    {
        return studentservice.Displaylogic(reg);

    }
    @PutMapping(path = "/update")
    public ResponseEntity<String> update(@RequestBody StudentDTO studentDTO)
    {

      String response = studentservice.Update(studentDTO);
      if(response.equals("updated sucessfully")){
         return ResponseEntity.ok("Your data updated sucessfully");
      }
      else {
          return ResponseEntity.ok("your data not present in the data base");

      }

    }
}
