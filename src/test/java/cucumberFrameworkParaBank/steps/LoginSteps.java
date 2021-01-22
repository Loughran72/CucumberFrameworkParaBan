package cucumberFrameworkParaBank.steps;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {
	
	  WebDriver driver;
	  
	@Before()
	public void setup() throws IOException {
	  System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "/chromedriver.exe"); 
	  this.driver = new ChromeDriver();
	  this.driver.manage().window().maximize();
	  this.driver.manage().timeouts().pageLoadTimeout(120, TimeUnit.SECONDS); 
	}
	  
	//Log in methods
	@Given("^User navigates to \"([^\"]*)\"  https://parabank\\.parasoft\\.com/parabank/$")
	public void user_navigates_to_https_parabank_parasoft_com_parabank(String arg1) throws Throwable {
		driver.get("https://parabank.parasoft.com/parabank/");
	}

	@When("^User enters \"([^\"]*)\" username$")
	public void user_enters_username(String arg1) throws Throwable {
		@SuppressWarnings("unused")
			String winHandlerBefore = driver.getWindowHandle();
		for(String winHandler: driver.getWindowHandles()) {
			driver.switchTo().window(winHandler);
		}
		driver.findElement(By.xpath("/html/body/div[1]/div[3]/div[1]/div/form/div[1]/input")).sendKeys(arg1);
	}

	@When("^User enters \"([^\"]*)\" password$")
	public void user_enters_password(String pwd) throws Throwable {
		driver.findElement(By.xpath("/html/body/div[1]/div[3]/div[1]/div/form/div[2]/input")).sendKeys(pwd); 
	}

	@When("^User clicks on Login button$")
	public void user_clicks_on_Login_button() throws Throwable {
		driver.findElement(By.xpath("/html/body/div[1]/div[3]/div[1]/div/form/div[3]/input")).click();
	}

	@Then("^The user should be displayed with a login alert \"([^\"]*)\"$")
	public void the_user_should_be_displayed_with_a_login_alert(String arg1) throws Throwable {
		System.out.println("Accounts Overview");
	}

	//Open new account methods
	@When("^User clicks on the Open New Account button$")
	public void user_clicks_on_the_Open_New_Account_button() throws Throwable {
		driver.findElement(By.xpath("/html/body/div[1]/div[3]/div[1]/ul/li[1]/a")).click();
	}

	@When("^User selects an \"([^\"]*)\" from the drop down$")
	public void user_selects_an_from_the_drop_down(String selection) throws Throwable {
		System.out.println("checking drop");
		TimeUnit.SECONDS.sleep(2);
		int location = 0;
		if (selection.equals("CHECKING")) {
			location = 1;
		} else if (selection.equals("SAVINGS")) {
			location = 2;
		}
		try {
			driver.findElement(By.xpath("//*[@id=\"type\"]")).click();
			driver.findElement(By.xpath("//*[@id=\"type\"]/option[" + location + "]")).click();
		} catch(Exception e) {
			System.out.println("Exception occured");
			if (location == 0)
				System.out.println("There is no 0 option in the dropdown.");
			else {
				System.out.println(e);
				e.printStackTrace();
			}
		}
	}

	@When("^User selects a \"([^\"]*)\" from the drop down$")
	public void user_selects_a_from_the_drop_down(int location) throws Throwable {
		System.out.println("num drop");
		TimeUnit.SECONDS.sleep(2);
		try {
			driver.findElement(By.xpath("//*[@id=\"fromAccountId\"]")).click();
			driver.findElement(By.xpath("//*[@id=\"fromAccountId\"]/option[" + location + "]")).click();
		} catch(Exception e) {
			System.out.println("Exception occured");
			System.out.println("Check to ensure the location number passed has a corresponding value in the dropdown.");
			System.out.println(e);
			e.printStackTrace();
		}
	}

	@When("^User clicks Create New Account button$")
	public void user_clicks_Create_New_Account_button() throws Throwable {
		TimeUnit.SECONDS.sleep(2);
		driver.findElement(By.xpath("//*[@id=\"rightPanel\"]/div/div/form/div/input")).click();
	}

	@Then("^The user should be displayed with an account created alert \"([^\"]*)\"$")
	public void the_user_should_be_displayed_with_an_account_created_alert(String arg1) throws Throwable {
		System.out.println("Account Opened!");
		TimeUnit.SECONDS.sleep(2);
	}

	//Transfer funds methods
	@When("^User clicks Transfer Funds button$")
	public void user_clicks_Transfer_Funds_button() throws Throwable {
		driver.findElement(By.xpath("/html/body/div[1]/div[3]/div[1]/ul/li[3]/a")).click();
	}

	@When("^User enters an amount \"([^\"]*)\"$")
	public void user_enters_an_amount(int amount) throws Throwable {
		TimeUnit.SECONDS.sleep(2);
		driver.findElement(By.xpath("//*[@id=\"amount\"]")).sendKeys("" + amount + "");
	}

	@When("^User selects a From account number \"([^\"]*)\"$")
	public void user_selects_a_From_account_number(int fromSelection) throws Throwable {
		System.out.println("from account#");
		try {
			driver.findElement(By.xpath("//*[@id=\"fromAccountId\"]")).click();
			driver.findElement(By.xpath("//*[@id=\"fromAccountId\"]/option[" + fromSelection + "]")).click();
		} catch(Exception e) {
			System.out.println("Exception occured");
			System.out.println("Check to ensure the location number passed has a corresponding value in the dropdown.");
			System.out.println(e);
			e.printStackTrace();
		}
	}

	@When("^User selects a to account number \"([^\"]*)\"$")
	public void user_selects_a_to_account_number(int toSelection) throws Throwable {
		System.out.println("to account#");
		try {
			driver.findElement(By.xpath("//*[@id=\"toAccountId\"]")).click();
			driver.findElement(By.xpath("//*[@id=\"toAccountId\"]/option[" + toSelection + "]")).click();
		} catch(Exception e) {
			System.out.println("Exception occured");
			System.out.println("Check to ensure the location number passed has a corresponding value in the dropdown.");
			System.out.println(e);
			e.printStackTrace();
		}
	}

	@When("^User clicks TRANSFER button$")
	public void user_clicks_TRANSFER_button() throws Throwable {
		driver.findElement(By.xpath("/html/body/div[1]/div[3]/div[2]/div/div/form/div[2]/input")).click();
	}

	@Then("^The user should be displayed with a transfer alert \"([^\"]*)\"$")
	public void the_user_should_be_displayed_with_a_transfer_alert(String arg1) throws Throwable {
		System.out.println("Transfer Completed!");
		TimeUnit.SECONDS.sleep(2);
	}

	//Customer Care methods
	@When("^User clicks Customer Care button$")
	public void user_clicks_Customer_Care_button() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"headerPanel\"]/ul[2]/li[3]/a")).click();
	}

	@When("^User enters name \"([^\"]*)\"$")
	public void user_enters_name(String arg1) throws Throwable {
		TimeUnit.SECONDS.sleep(2);
		driver.findElement(By.xpath("//*[@id=\"name\"]")).sendKeys("" + arg1 + "");
	}

	@When("^User enters email \"([^\"]*)\"$")
	public void user_enters_email(String arg1) throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"email\"]")).sendKeys("" + arg1 + "");
	}

	@When("^User enters phone \"([^\"]*)\"$")
	public void user_enters_phone(String arg1) throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"phone\"]")).sendKeys("" + arg1 + "");
	}

	@When("^User enters message \"([^\"]*)\"$")
	public void user_enters_message(String arg1) throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"message\"]")).sendKeys("" + arg1 + "");
	}

	@When("^User clicks on Send button$")
	public void user_clicks_on_Send_button() throws Throwable {
		TimeUnit.SECONDS.sleep(2);
		driver.findElement(By.xpath("//*[@id=\"contactForm\"]/table/tbody/tr[5]/td[2]/input")).click();
	}

	@Then("^The user should be displayed with a notification \"([^\"]*)\"$")
	public void the_user_should_be_displayed_with_a_notification(String arg1) throws Throwable {
		System.out.println(arg1);
		TimeUnit.SECONDS.sleep(2);
	}
	
	//Register account methods
	@When("^User clicks Register button$")
	public void user_clicks_Register_button() throws Throwable {
		TimeUnit.SECONDS.sleep(2);
		driver.findElement(By.xpath("//*[@id=\"loginPanel\"]/p[2]/a")).click();
	}

	@When("^User enters first name \"([^\"]*)\"$")
	public void user_enters_first_name(String arg1) throws Throwable {
		TimeUnit.SECONDS.sleep(2);
		driver.findElement(By.xpath("//*[@id=\"customer.firstName\"]")).sendKeys("" + arg1 + "");
	}

	@When("^User enters last name \"([^\"]*)\"$")
	public void user_enters_last_name(String arg1) throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"customer.lastName\"]")).sendKeys("" + arg1 + "");
	}

	@When("^User enters Address \"([^\"]*)\"$")
	public void user_enters_Address(String arg1) throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"customer.address.street\"]")).sendKeys("" + arg1 + "");
	}

	@When("^User enters City \"([^\"]*)\"$")
	public void user_enters_City(String arg1) throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"customer.address.city\"]")).sendKeys("" + arg1 + "");
	}

	@When("^User enters State \"([^\"]*)\"$")
	public void user_enters_State(String arg1) throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"customer.address.state\"]")).sendKeys("" + arg1 + "");
	}

	@When("^User enters Zip Code \"([^\"]*)\"$")
	public void user_enters_Zip_Code(String arg1) throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"customer.address.zipCode\"]")).sendKeys("" + arg1 + "");
	}

	@When("^User enters phone for account \"([^\"]*)\"$")
	public void user_enters_phone_for_account(String arg1) throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"customer.phoneNumber\"]")).sendKeys("" + arg1 + "");
	}

	@When("^User enters SSN \"([^\"]*)\"$")
	public void user_enters_SSN(String arg1) throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"customer.ssn\"]")).sendKeys("" + arg1 + "");
	}

	@When("^User enters userName \"([^\"]*)\"$")
	public void user_enters_userName(String arg1) throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"customer.username\"]")).sendKeys("" + arg1 + "");
	}

	@When("^User enters password for account \"([^\"]*)\"$")
	public void user_enters_password_for_account(String arg1) throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"customer.password\"]")).sendKeys("" + arg1 + "");
	}

	@When("^User enters password to confirm \"([^\"]*)\"$")
	public void user_enters_password_to_confirm(String arg1) throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"repeatedPassword\"]")).sendKeys("" + arg1 + "");
	}

	@When("^User clicks on Register button$")
	public void user_clicks_on_Register_button() throws Throwable {
		TimeUnit.SECONDS.sleep(2);
		driver.findElement(By.xpath("//*[@id=\"customerForm\"]/table/tbody/tr[13]/td[2]/input")).click();
	}

	@Then("^The user should be displayed with an account created notification \"([^\"]*)\"$")
	public void the_user_should_be_displayed_with_an_account_created_notification(String arg1) throws Throwable {
		TimeUnit.SECONDS.sleep(2);
	}
}
