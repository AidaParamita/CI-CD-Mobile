$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/TUGAS/Kampus Merdeka/Clone4/QE_Aida-Paramita/31_Mini Project/praktikum/CI-CD-Mobile/Include/features/ViewDetailItems.feature");
formatter.feature({
  "name": "User View Detail",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User View Detail",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I open Application",
  "keyword": "Given "
});
formatter.step({
  "name": "I click icon login",
  "keyword": "When "
});
formatter.step({
  "name": "I fill correct email \u003cemail\u003e and password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "name": "I in homepage",
  "keyword": "And "
});
formatter.step({
  "name": "I see detail product",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "olaf@gmail.com",
        "olafaja"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User View Detail",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I open Application",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthSteps.openAPk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click icon login",
  "keyword": "When "
});
formatter.match({
  "location": "AuthSteps.clickIconLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill correct email olaf@gmail.com and password olafaja",
  "keyword": "And "
});
formatter.match({
  "location": "AuthSteps.correctLogin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.match({
  "location": "AuthSteps.clickButtonLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I in homepage",
  "keyword": "And "
});
formatter.match({
  "location": "AuthSteps.homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see detail product",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.seeDetailProduct()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User View Detail - without login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I open Application",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthSteps.openAPk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I in homepage",
  "keyword": "And "
});
formatter.match({
  "location": "AuthSteps.homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see detail product",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.seeDetailProduct()"
});
formatter.result({
  "status": "passed"
});
});