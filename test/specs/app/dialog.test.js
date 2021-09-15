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
    it.only('Verify that the app adjust when orientation is switched', () => {
        console.log(driver.getOrientation())
        driver.setOrientation('LANDSCAPE')

        driver.pause(1000)
        driver.saveScreenshot('./screenshots/landscape.png')
    })
})