const dialog = require('../../pageobjects/dialog.page')
const expect = require('chai').expect

describe('Dialog', () => {
    it('username & password fields are editable', () => {
        dialog.appBtn.click()
        dialog.alertDialogBtn.click()
        dialog.textEntryDialogBtn.click()

        dialog.userNameField.clearValue()
        dialog.userNameField.addValue("Test User")

        dialog.passwordField.clearValue()
        dialog.passwordField.addValue("Test Pass")

        let text = dialog.userNameField.getText()
        console.log(text)
        expect(text).equal("Test User")

        dialog.dialogOkBtn.click()

    })
    it('Verify that the app adjust when orientation is switched', () => {
        driver.setOrientation('LANDSCAPE')
        console.log(driver.getOrientation())

        driver.pause(1000)   //ms
        driver.saveScreenshot('./screenshots/landscape.png')

        dialog.appBtn.click()
        driver.setOrientation('PORTRAIT')
        console.log(driver.getOrientation())

        driver.back()
        driver.saveScreenshot('./screenshots/portrait.png')
    })
    it('Verify Timeouts', () => {
        driver.setImplicitTimeout(1000)
        driver.setTimeouts(1000)
        driver.pause(1000)
    })
    it.only('Verify the repeat alarm options has attribute checked set to true when selected', () => {
        let isChecked, text;
        dialog.appBtn.click()
        dialog.alertDialogBtn.click()
        dialog.repeatAlarmBtn.click()

        console.log(dialog._weekdayCheckbox(0).getText())
        text = dialog._weekdayCheckbox(0).getText()
        expect(text).equal('Every Monday')

        console.log(dialog._weekdayCheckbox(0).getAttribute('checked'))
        isChecked = dialog._weekdayCheckbox(0).getAttribute('checked')
        expect(isChecked).equal('false')

        dialog._weekdayCheckbox(0).click()
        isChecked = dialog._weekdayCheckbox(0).getAttribute('checked')
        expect(isChecked).equal('true')

    })
})