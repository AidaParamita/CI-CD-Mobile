$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/TUGAS/Kampus Merdeka/Clone4/QE_Aida-Paramita/31_Mini Project/praktikum/CI-CD-Mobile/Include/features/AddItemtoCart.feature");
formatter.feature({
  "name": "Add Items to Cart",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Add Items to Cart",
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
  "name": "I select product",
  "keyword": "And "
});
formatter.step({
  "name": "I click button Beli for add to cart",
  "keyword": "And "
});
formatter.step({
  "name": "Items add to cart",
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
  "name": "Add Items to Cart",
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
  "name": "I select product",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.selectProduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click button Beli for add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.clickButtonBeli()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Items add to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.addItemToCart()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Object Object Repository/Homepage/Add_Item_to_Cart/android.widget.Button (2) not found\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.stepFailed(MobileKeywordMain.groovy:40)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword$_tap_closure1.doCall(TapKeyword.groovy:79)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword$_tap_closure1.call(TapKeyword.groovy)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword.tap(TapKeyword.groovy:84)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword.execute(TapKeyword.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.tap(MobileBuiltInKeywords.groovy:1490)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$tap$0.call(Unknown Source)\r\n\tat HomepageSteps.addItemToCart(HomepageSteps.groovy:59)\r\n\tat ✽.Items add to cart(E:/TUGAS/Kampus Merdeka/Clone4/QE_Aida-Paramita/31_Mini Project/praktikum/CI-CD-Mobile/Include/features/AddItemtoCart.feature:11)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Add Items to Cart - without login",
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
  "name": "I select product",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.selectProduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click button Beli for add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.clickButtonBeli()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Items add to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.addItemToCart()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Object Object Repository/Homepage/Add_Item_to_Cart/android.widget.Button (2) not found\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.stepFailed(MobileKeywordMain.groovy:40)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword$_tap_closure1.doCall(TapKeyword.groovy:79)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword$_tap_closure1.call(TapKeyword.groovy)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword.tap(TapKeyword.groovy:84)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword.execute(TapKeyword.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.tap(MobileBuiltInKeywords.groovy:1490)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$tap$0.call(Unknown Source)\r\n\tat HomepageSteps.addItemToCart(HomepageSteps.groovy:59)\r\n\tat ✽.Items add to cart(E:/TUGAS/Kampus Merdeka/Clone4/QE_Aida-Paramita/31_Mini Project/praktikum/CI-CD-Mobile/Include/features/AddItemtoCart.feature:22)\r\n",
  "status": "failed"
});
});