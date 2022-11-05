import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When



class AuthSteps {
	@Given("I open Application")
	def openAPk() {
		Mobile.startApplication('C:\\Users\\AIDA\\Downloads\\app-release(1).apk', true)
	}

	@When("I click icon login")
	def clickIconLogin() {
		Mobile.tap(findTestObject('Object Repository/Auth/Login/android.widget.Button'), 0)
	}

	@And("I fill correct fullname (.*) email (.*) and password (.*)")
	def correctRegis(String fullname, String email, String password) {
		println("fullname : "+fullname)
		println("email : "+email)
		println("password : "+password)

		Mobile.tap(findTestObject('Object Repository/Auth/Register/android.widget.Button (1)'), 0)

		Mobile.tap(findTestObject('Object Repository/Auth/Register/android.widget.EditText - Alex Under, Fullname'), 0)

		Mobile.clearText(findTestObject('Object Repository/Auth/Register/android.widget.EditText - Alex Under, Fullname (1)'), 0)

		Mobile.setText(findTestObject('Object Repository/Auth/Register/android.widget.EditText - Fullname'), 'Nessie3', 0)

		Mobile.tap(findTestObject('Object Repository/Auth/Register/android.widget.EditText - alexemail.com, Email'), 0)

		Mobile.clearText(findTestObject('Object Repository/Auth/Register/android.widget.EditText - alexemail.com, Email (1)'), 0)

		Mobile.setText(findTestObject('Object Repository/Auth/Register/android.widget.EditText - Email'), 'nessie3@gmail.com', 0)

		Mobile.tap(findTestObject('Object Repository/Auth/Register/android.widget.EditText - 123123123, Password'), 0)

		Mobile.clearText(findTestObject('Object Repository/Auth/Register/android.widget.EditText - 123123123, Password (1)'), 0)

		Mobile.setText(findTestObject('Object Repository/Auth/Register/android.widget.EditText - Password'), 'nessie3aja', 0)

		Mobile.hideKeyboard()
	}

	@And("I click register button")
	def clickButtonRegis() {

		Mobile.tap(findTestObject('Object Repository/Auth/Register/android.widget.Button (2)'), 0)

//		Mobile.verifyElementVisible(findTestObject('Object Repository/Auth/Login/androidview.View (1)'), 0)

	}

	@And("I fill correct email (.*) and password (.*)")
	def correctLogin(String email, String password) {
		println("email : "+email)
		println("password : "+password)
		Mobile.tap(findTestObject('Object Repository/Auth/Login/android.view.View'), 0)

		Mobile.tap(findTestObject('Object Repository/Auth/Login/android.widget.EditText - Email'), 0)

		Mobile.setText(findTestObject('Object Repository/Auth/Login/android.widget.EditText - Email (1)'), 'olaf@gmail.com', 0)

		Mobile.tap(findTestObject('Object Repository/Auth/Login/android.widget.EditText - Password'), 0)

		Mobile.setText(findTestObject('Object Repository/Auth/Login/android.widget.EditText - Password (1)'), 'olafaja', 0)
	}

	@And("I click login button")
	def clickButtonLogin() {

		Mobile.tap(findTestObject('Object Repository/Auth/Login/android.widget.Button (1)'), 0)
	}

	@And("i click icon logout")
	def clickButtonLogout() {
	}

	@Then("I logout")
	def logout() {

//		Mobile.tap(findTestObject('Object Repository/Auth/Logout/android.widget.Button (3)'), 0)

		Mobile.closeApplication()
	}

	@Then("I in homepage")
	def homepage() {
//		Mobile.verifyElementVisible(findTestObject('Object Repository/Auth/Login/android.view.View (1)'), 0)

//		Mobile.closeApplication()
	}
}