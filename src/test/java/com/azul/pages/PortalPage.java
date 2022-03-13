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

    @FindBy(xpath = "//input[@name='bxu_files[]']")
    public WebElement choosefile;



    @FindBy(id = "bx-grat-tag")
    public WebElement AddEmployesButton;

    @FindBy(className = "bx-finder-company-department-employee-info")
    public WebElement isim1;

    @FindBy(className = "bx-finder-company-department-employee-avatar")
    public WebElement isim2;

    @FindBy(xpath = "//*[@class='bxhtmled-top-bar-btn bxhtmled-button-link']")
    public WebElement link;
    @FindBy(id = "linkidPostFormLHE_blogPostForm-href")
    public WebElement linkUrl;


    @FindBy(id = "undefined")
    public WebElement save;

    @FindBy(xpath = "//*[@class='bxhtmled-top-bar-btn bxhtmled-button-video']")
    public WebElement videoIcon;

    @FindBy(id = "video_idPostFormLHE_blogPostForm-source")
    public WebElement videoUrl;

    @FindBy(id = "undefined")
    public WebElement savevideoIcon;

    @FindBy(xpath = "feed-add-post-text")
    public WebElement body;



        }
