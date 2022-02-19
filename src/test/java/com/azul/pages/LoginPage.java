package com.azul.pages;

import com.azul.utilities.ConfigurationReader;
import com.azul.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
    public LoginPage(){
        PageFactory.initElements(Driver.get(),this);
    }

    @FindBy(name = "USER_LOGIN")
    public WebElement LoginButton;


    @FindBy(name = "USER_PASSWORD")
    public WebElement PasswordButton;

    @FindBy(className = "login-btn")
    public WebElement submit;

    public void Login(String username,String password){
        LoginButton.sendKeys(username);
        PasswordButton.sendKeys(password);
        submit.click();
    }



}
