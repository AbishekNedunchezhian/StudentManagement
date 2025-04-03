package com.example.studentportal.studentmanagement.Controller;

import com.example.studentportal.studentmanagement.MarkDTO.MarkDTO;
import com.example.studentportal.studentmanagement.Service.MarkService;
import com.example.studentportal.studentmanagement.Service.Studentservice;
import com.example.studentportal.studentmanagement.StudentDTO.StudentDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.yaml.snakeyaml.error.Mark;

import java.util.List;

@RestController
@RequestMapping("api/v2/student")
@CrossOrigin("http://localhost:3000")

public class MarkController {
    @Autowired
    private MarkService markservice;

    @PostMapping(path = "/addmark")
    public String AddMark(@RequestBody MarkDTO markDTO)
    {
        return markservice.Addmark(markDTO);
    }
    @GetMapping(path = "/markdisplay/{reg}")
    public List<MarkDTO> Display(@PathVariable(name = "reg") String reg)
    {
        return markservice.Displaylogic(reg);

    }
}
