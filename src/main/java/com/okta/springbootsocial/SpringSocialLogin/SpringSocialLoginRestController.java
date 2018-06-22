package com.okta.springbootsocial.SpringSocialLogin;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;

@RestController
@EnableOAuth2Sso
class SpringSocialLoginRestController {

    @RequestMapping("/")
    String home(java.security.Principal user) {
        return user.getName();
    }
}