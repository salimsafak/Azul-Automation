package com.azul.stepdefnitions;

import com.azul.pages.LoginPage;
import com.azul.pages.PortalPage;
import com.azul.utilities.BrowserUtils;
import com.azul.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.awt.*;

public class PortalPageDefs {

    @Then("User should be able to click on the upload files icon to upload files and pictures from local disks.")
    public void user_should_be_able_to_click_on_the_upload_files_icon_to_upload_files_and_pictures_from_local_disks() {

        PortalPage portalPage = new PortalPage();
        portalPage.uploadButton.click();
        BrowserUtils.waitFor(3);
        // portalPage.choosefile.click();
        portalPage.choosefile.sendKeys("C:\\Users\\salim\\OneDrive\\Desktop\\foto.png");


    }

    @Then("User should be able to add users  from Employess and Departments contact lists")
    public void user_should_be_able_to_add_users_from_Employess_and_Departments_contact_lists() {
        PortalPage portalPage = new PortalPage();
        portalPage.AddEmployesButton.click();
        portalPage.isim1.click();
        // portalPage.isim2.click();

    }

    @Then("User can attach a link by clicking on the Link icon and save it")
    public void user_can_attach_alink_by_clicking_on_the_Link_icon() {
        PortalPage portalPage = new PortalPage();
        portalPage.link.click();
        portalPage.linkUrl.sendKeys("https://www.youtube.com/watch?v=iAqdafcxLRI");
        portalPage.save.click();


    }

    @Then("User should go to the insert videos by clicking on the video icon and enters the video url")
    public void user_should_go_to_the_insert_videos_by_clicking_on_the_video_icon_and_enters_the_video_url() {
        PortalPage portalPage=new PortalPage();
        portalPage.videoIcon.click();
        portalPage.videoUrl.sendKeys("https://www.youtube.com/watch?v=BRzlyGXx13Q");
        BrowserUtils.waitFor(3);
       // portalPage.savevideoIcon.click();
//        Driver.get().switchTo().frame(1);
//        BrowserUtils.waitFor(1);
        portalPage.videoUrl.getText();
        String Messageboxexpected="https://www.youtube.com/watch?v=BRzlyGXx13Q";
        Assert.assertEquals(Messageboxexpected,portalPage.videoUrl.getText());



    }
}
