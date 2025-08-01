package com.example.docker_spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.docker_spring.service.MemberService;
import com.example.docker_spring.vo.MemberVO;


@RestController
public class AppController {

    @Autowired
    private MemberService service;
    
    @GetMapping("/")
    public String getMethodName() {
        return "안되고있는데...!!";
    }

    @GetMapping("/members")
    public List<MemberVO> selectListMembers() {
        return service.selectAllMembers();
    }
    
    
}
