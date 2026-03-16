package com.onlinebookstore.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="http://localhost:5173")
public class LoginController {

@PostMapping("/login")
public String login(@RequestBody Map<String,String> data){

String username = data.get("username");
String password = data.get("password");

if(username.equals("admin") && password.equals("1234")){
return "success";
}

return "fail";
}

}