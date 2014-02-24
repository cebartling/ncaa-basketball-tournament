import org.openqa.selenium.chrome.ChromeDriver
import org.openqa.selenium.remote.RemoteWebDriver

import java.util.logging.Level

driver = {
//    RemoteWebDriver driver = new FirefoxDriver()
    RemoteWebDriver driver = new ChromeDriver()
    driver.setLogLevel(Level.WARNING)
    driver
}

waiting {
    presets {
        slow {
            timeout = 20
            retryInterval = 1
        }
        quick {
            timeout = 1
        }
    }
}