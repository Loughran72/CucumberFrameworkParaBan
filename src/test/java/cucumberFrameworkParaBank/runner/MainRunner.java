package cucumberFrameworkParaBank.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)

@CucumberOptions ( 
		features = {"src/test/java/cucumberFrameworkParaBank/featureFiles"},
		glue = {"cucumberFrameworkParaBank.steps"},
		monochrome = true,
		tags = {},
		plugin = {"pretty", "json:targetReport/cucumber.json", "html:targetReport/cucumber", "com.cucumber.listener.ExtentCucumberFormatter:targetReport/report.html"}
)
//public class MainRunner extends AbstractTestNGCucumberTests {
	public class MainRunner  {

	
}
