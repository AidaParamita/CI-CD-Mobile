$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/TUGAS/Kampus Merdeka/Clone4/QE_Aida-Paramita/31_Mini Project/praktikum/CI-CD-Mobile/Include/features/Register.feature");
formatter.feature({
  "name": "Registrasi",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User create new account",
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
  "name": "I fill correct fullname \u003cfullname\u003e email \u003cemail\u003e and password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I click register button",
  "keyword": "And "
});
formatter.step({
  "name": "I in homepage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "fullname",
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "Nessie3",
        "nessie3@gmail.com",
        "nessie3aja"
      ]
    },
    {
      "cells": [
        "",
        "nessie3@gmail.com",
        "nessie3aja"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User create new account",
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
  "name": "I fill correct fullname Nessie3 email nessie3@gmail.com and password nessie3aja",
  "keyword": "And "
});
formatter.match({
  "location": "AuthSteps.correctRegis(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click register button",
  "keyword": "And "
});
formatter.match({
  "location": "AuthSteps.clickButtonRegis()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I in homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthSteps.homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User create new account",
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
  "name": "I fill correct fullname  email nessie3@gmail.com and password nessie3aja",
  "keyword": "And "
});
formatter.match({
  "location": "AuthSteps.correctRegis(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click register button",
  "keyword": "And "
});
formatter.match({
  "location": "AuthSteps.clickButtonRegis()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I in homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthSteps.homepage()"
});
formatter.result({
  "status": "passed"
});
});