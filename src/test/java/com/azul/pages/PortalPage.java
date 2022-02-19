package com.azul.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class PortalPage extends BasePage {

    @FindBy(id = "feed-add-post-form-link-text")
    public WebElement morebutton;

    @FindBy(xpath = "//*[@id=\"popup-window-content-menu-popup-feed-add-post-form-popup\"]/div/div/span[2]/span[2]")
    public WebElement appreciationButton;








    @FindBy(id = "bx-b-uploadfile-blogPostForm")
    public WebElement uploadButton;




}
