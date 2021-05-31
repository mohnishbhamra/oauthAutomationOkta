const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const OKTA_LOGIN_HOME_URL = "<replace with complete value of your okta accound login home url along with http/https protocol >" //e.g https://dev-872352.okta.com/
const USER_ID = "<replace with value of user id>"
const PASSWORD = "<replace with value of password>"

    (async function loginOkta() {
        try {
            let chrome_options = new chrome.Options().addArguments("incognito", "disable-web-security")

            const driver = await new Builder()
                .setChromeOptions(chrome_options)
                .forBrowser('chrome')
                .build();

            //load web url
            await driver.get(OKTA_LOGIN_HOME_URL);
            await waitInSeconds(1);

            //perform login
            await driver.findElement(By.id('okta-signin-username')).sendKeys(USER_ID);
            await waitInSeconds(1);
            var rememberCheckbox = await driver.findElement(By.id('input7'));
            rememberCheckbox.sendKeys(Key.SPACE);
            await waitInSeconds(1);
            await driver.findElement(By.id('okta-signin-password')).sendKeys(PASSWORD, Key.RETURN);
            await waitInSeconds(10);
            console.log("login should have been complete by now");

        } catch (e) {
            console.error(e);
        } finally {
            await driver.quit();
        }
    })();



async function waitInSeconds(sec) {
    return new Promise(resolve => setTimeout(resolve, sec * 1000));
}