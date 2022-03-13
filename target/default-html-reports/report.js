$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Portal.feature");
formatter.feature({
  "name": "As a user, I should be able to send appreciation by clicking on the Appreciation subheading",
  "description": "  from \"More\" tab under Activity Stream",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "name": "the user should able to login the page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.azul.stepdefnitions.LoginPageStepDefs.the_user_should_able_to_login_the_page()"
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
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to insert videos by clicking on the video icon and entering the video URL.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "User should go to the insert videos by clicking on the video icon and enters the video url",
  "keyword": "Then "
});
formatter.match({
  "location": "com.azul.stepdefnitions.PortalPageDefs.user_should_go_to_the_insert_videos_by_clicking_on_the_video_icon_and_enters_the_video_url()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[https://www.youtube.com/watch?v\u003dBRzlyGXx13Q]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.azul.stepdefnitions.PortalPageDefs.user_should_go_to_the_insert_videos_by_clicking_on_the_video_icon_and_enters_the_video_url(PortalPageDefs.java:58)\r\n\tat ✽.User should go to the insert videos by clicking on the video icon and enters the video url(file:///C:/Users/salim/IdeaProjects/Azul-Automation/src/test/resources/features/Portal.feature:20)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});