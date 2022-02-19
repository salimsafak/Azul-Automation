$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "As a user, I should be able to send appreciation by clicking on the Appreciation subheading",
  "description": "  from \"More\" tab under Activity Stream",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User should be able to go to appreciation by clicking on the Appreciation subheading",
  "description": "  from \"More\" tab under Activity Stream",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user go to the page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.azul.stepdefnitions.LoginPageStepDefs.user_go_to_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters as a user",
  "keyword": "When "
});
formatter.match({
  "location": "com.azul.stepdefnitions.LoginPageStepDefs.the_user_enters_as_a_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click the Appreciation button under the More tab on the Activity Stream",
  "keyword": "And "
});
formatter.match({
  "location": "com.azul.stepdefnitions.LoginPageStepDefs.the_user_click_the_Appreciation_button_under_the_More_tab_on_the_Activity_Stream()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat com.azul.stepdefnitions.LoginPageStepDefs.the_user_click_the_Appreciation_button_under_the_More_tab_on_the_Activity_Stream(LoginPageStepDefs.java:61)\r\n\tat ✽.the user click the Appreciation button under the More tab on the Activity Stream(file:///C:/Users/salim/IdeaProjects/Azul-Automation/src/test/resources/features/Login.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User should be able to click on the upload files icon to upload files and pictures from local disks.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.azul.stepdefnitions.LoginPageStepDefs.user_should_be_able_to_click_on_the_upload_files_icon_to_upload_files_and_pictures_from_local_disks()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});