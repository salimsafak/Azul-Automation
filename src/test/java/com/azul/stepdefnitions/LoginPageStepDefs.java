package com.azul.stepdefnitions;

import com.azul.pages.LoginPage;
import com.azul.pages.PortalPage;
import com.azul.utilities.BrowserUtils;
import com.azul.utilities.ConfigurationReader;
import com.azul.utilities.Driver;
import io.cucumber.java.bs.A;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class LoginPageStepDefs {

    @Given("the user go to the page")
    public void user_go_to_the_page() {
        String url = ConfigurationReader.get("url");
        Driver.get().get(url);

    }
    @When("the user enters as a user")
    public void the_user_enters_as_a_user() {
        String username = ConfigurationReader.get("user");
        String password = ConfigurationReader.get("password");

        LoginPage loginPage = new LoginPage();
        loginPage.Login(username,password);

    }
    @Then("the user should able to login the page")
    public void the_user_should_able_to_login_the_page() {

        BrowserUtils.waitFor(3);
        String actualTitle = Driver.get().getTitle();
        Assert.assertEquals("Portal", actualTitle);

    }
    @When("the user click the Appreciation button under the More tab on the Activity Stream")
    public void the_user_click_the_Appreciation_button_under_the_More_tab_on_the_Activity_Stream() {

//        WebElement morebutton = Driver.get().findElement(By.id("feed-add-post-form-link-text"));
//        morebutton.click();
//
//        WebElement DropdownOption = Driver.get().findElement(By.xpath("//*[@id=\"popup-window-content-menu-popup-feed-add-post-form-popup\"]/div/div/span[2]/span[2]"));
//        DropdownOption.click();
        PortalPage portalPage = new PortalPage();

        portalPage.morebutton.click();
        BrowserUtils.waitFor(3);
        portalPage.appreciationButton.click();

    }


    }





















