$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Portal.feature");
formatter.feature({
  "name": "As a user, I should be able to send appreciation by clicking on the Appreciation subheading",
  "description": "  from \"More\" tab under Activity Stream",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User should be able to click on the upload files icon to upload files and pictures from local disks.",
  "description": "",
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
formatter.step({
  "name": "User should be able to click on the upload files icon to upload files and pictures from local disks.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.azul.stepdefnitions.PortalPageDefs.user_should_be_able_to_click_on_the_upload_files_icon_to_upload_files_and_pictures_from_local_disks()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidArgumentException: invalid argument: File not found : \"C:\\Users\\salim\\OneDrive\\Desktop\\foto.png\"\n  (Session info: chrome\u003d98.0.4758.82)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-RVDJOGE\u0027, ip: \u0027192.168.1.61\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.12\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 98.0.4758.82, chrome: {chromedriverVersion: 98.0.4758.102 (273bf7ac8c90..., userDataDir: C:\\Users\\salim\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61559}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 08ce94b9da40a6f88579fc6a8ae19bc9\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy19.sendKeys(Unknown Source)\r\n\tat com.azul.stepdefnitions.PortalPageDefs.user_should_be_able_to_click_on_the_upload_files_icon_to_upload_files_and_pictures_from_local_disks(PortalPageDefs.java:16)\r\n\tat ✽.User should be able to click on the upload files icon to upload files and pictures from local disks.(file:///C:/Users/salim/IdeaProjects/Azul-Automation/src/test/resources/features/Portal.feature:11)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});