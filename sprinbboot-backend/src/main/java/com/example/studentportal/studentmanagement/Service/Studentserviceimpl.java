package com.example.studentportal.studentmanagement.Service;

import com.example.studentportal.studentmanagement.Entity.StudentEntity;
import com.example.studentportal.studentmanagement.Repository.StudentRepository;
import com.example.studentportal.studentmanagement.StudentDTO.StudentDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class Studentserviceimpl implements Studentservice{
    @Autowired
    private StudentRepository studentRepository;

    @Override
    public String Registerlogic(StudentDTO studentDTO){
        StudentEntity studentEntity = new StudentEntity(studentDTO.getName(),studentDTO.getReg(),studentDTO.getPassword(),studentDTO.getAge(),studentDTO.getYear(),studentDTO.getClg());
       StudentEntity save =studentRepository.save(studentEntity);
        return String.valueOf(save.getId());

    }
    @Override
    public boolean Loginlogic(String reg,String password)
    {
         Optional<StudentEntity> check  = studentRepository.findByRegAndPassword(reg,password);
         return check.isPresent() && check.get().getPassword().equals(password);
    }
@Override
    public List<StudentDTO> Displaylogic(String reg){
        List<StudentEntity> getdata = studentRepository.findByReg(reg);
        List<StudentDTO> transfer = new ArrayList<>();
        for(StudentEntity getdatas:getdata)
        {
            StudentDTO setdatas = new StudentDTO();
            setdatas.setName(getdatas.getName());
            setdatas.setReg(getdatas.getReg());
            setdatas.setAge(getdatas.getAge());
            setdatas.setYear(getdatas.getYear());
            setdatas.setClg(getdatas.getClg());

            transfer.add(setdatas);

        }
        return transfer;
    }
    @Override
    public String Update(StudentDTO studentDTO)
    {
        List<StudentEntity> update = studentRepository.findByReg(studentDTO.getReg());
        if(!update.isEmpty())
        {
            StudentEntity setdatas=update.get(0);
          // StudentEntity studentEntity = new StudentEntity();
            setdatas.setName(studentDTO.getName());
            setdatas.setPassword(studentDTO.getPassword());
            setdatas.setAge(studentDTO.getAge());
            setdatas.setYear(setdatas.getYear());
            setdatas.setClg(setdatas.getClg());
            studentRepository.save(setdatas);
            return "updated sucessfully";
        }
        else {
            return "Your data not present in the database";
        }


    }


}
