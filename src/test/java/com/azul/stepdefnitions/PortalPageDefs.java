package com.azul.stepdefnitions;

import com.azul.pages.PortalPage;
import com.azul.utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import org.openqa.selenium.WebElement;

public class PortalPageDefs {

    @Then("User should be able to click on the upload files icon to upload files and pictures from local disks.")
    public void user_should_be_able_to_click_on_the_upload_files_icon_to_upload_files_and_pictures_from_local_disks() {

        PortalPage portalPage=new PortalPage();
        portalPage.uploadButton.click();
        BrowserUtils.waitFor(3);
        portalPage.choosefile.sendKeys("\"C:\\Users\\salim\\OneDrive\\Desktop\\foto.png\"");



    }
}
