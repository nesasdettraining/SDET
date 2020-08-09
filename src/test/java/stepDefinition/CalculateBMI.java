package stepDefinition;

import static org.junit.Assert.assertEquals;

import java.io.File;

import org.codehaus.plexus.util.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.io.FileHandler;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CalculateBMI {
	
	static WebDriver driver = null;
	String age, height, weight;
	
	@Given("^I launch Calculator page$")
	public void i_launch_Calculator_page() throws Throwable {
	    String driverPath = System.getProperty("user.dir") + File.separator + "drivers" + File.separator + "chromedriver.exe";
	    System.setProperty("webdriver.chrome.driver", driverPath );
	    
	    driver = new ChromeDriver();
	    driver.get("https://www.calculator.net/");
	}

	@Given("^verify the page title - \"([^\"]*)\"$")
	public void verify_the_page_title(String pageTitle) throws Throwable {
		assertEquals(pageTitle, driver.getTitle());	   
	}

	@Then("^I click on BMI Calculator$")
	public void i_click_on_BMI_Calculator() throws Throwable {
	    driver.findElement(By.linkText("BMI Calculator")).click();	    
	}
	
	@Given("^I launch BMI Calculator$")
	public void i_launch_BMI_Calculator() throws Throwable {
		i_launch_Calculator_page();
		driver.findElement(By.linkText("BMI Calculator")).click();	    
	}

	@When("^I enter (\\d+), (\\d+), (\\d+)$")
	public void i_enter(String age, String height, String weight) throws Throwable {
		this.age = age;
		this.height = height;
		this.weight = weight;
		driver.findElement(By.className("clearbtn")).click();
		driver.findElement(By.id("cage")).sendKeys(age);
		driver.findElement(By.id("cheightmeter")).sendKeys(height);
		driver.findElement(By.id("ckg")).sendKeys(weight);
	}

	@Then("^I can calculate BMI$")
	public void i_can_calculate_BMI() throws Throwable {
		driver.findElement(By.cssSelector("[value='Calculate']")).click();
		String BMIValue = driver.findElement(By.cssSelector("div.bigtext>b")).getText();
		String BMIOutputFilePath = System.getProperty("user.dir") + File.separator + "target" + File.separator + "HTMLReport" + File.separator + "BMIOutput.txt";
		FileUtils.fileAppend(BMIOutputFilePath, age + "|" + height + "|" + weight + "|" + BMIValue+"\n");    
	}
	
	@After
	public void quitBrowser()
	{
		driver.quit();
	}
}