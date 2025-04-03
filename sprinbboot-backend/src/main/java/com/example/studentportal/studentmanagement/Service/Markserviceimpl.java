package com.example.studentportal.studentmanagement.Service;

import com.example.studentportal.studentmanagement.Entity.MarkEntity;
import com.example.studentportal.studentmanagement.Entity.StudentEntity;
import com.example.studentportal.studentmanagement.MarkDTO.MarkDTO;
import com.example.studentportal.studentmanagement.Repository.MarkRepository;
import com.example.studentportal.studentmanagement.Repository.StudentRepository;
import com.example.studentportal.studentmanagement.StudentDTO.StudentDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class Markserviceimpl  implements MarkService{
    @Autowired
    private MarkRepository markRepository;


    @Override
    public String Addmark(MarkDTO markDTO) {
        MarkEntity markEntity = new MarkEntity(markDTO.getReg(),markDTO.getSub_code(),markDTO.getSub_name(),markDTO.getSub_mark(),markDTO.getGrade(),markDTO.getResult());
        MarkEntity save = markRepository.save(markEntity);
        return String.valueOf(save.getId());
    }

    @Override
    public List<MarkDTO> Displaylogic(String reg) {
        List<MarkEntity> getdata = markRepository.findByReg(reg);//4001
        List<MarkDTO> transfer = new ArrayList<>();
        for(MarkEntity getdatas:getdata)
        {
            MarkDTO setdatas = new MarkDTO();
            setdatas.setReg(getdatas.getReg());
            setdatas.setSub_code(getdatas.getSub_code());
            setdatas.setSub_name(getdatas.getSub_name());
            setdatas.setSub_mark(getdatas.getSub_mark());
            setdatas.setGrade(getdatas.getGrade());
            setdatas.setResult(getdatas.getResult());


            transfer.add(setdatas);

        }
        return transfer;

    }
}
