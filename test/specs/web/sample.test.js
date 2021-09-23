const MainPage = require('../../pageobjects/google.page')

describe('Login', () => {
    it.only('로그인 페이지 이동', async () => {
        await MainPage.open()
        await MainPage.searchTextbox.setValue('webdriverIO')

        // await browser.url('https://google.com')
        // const searchTextbox = await $('input[name="q"')

        // await browser.pause(3000)
        // await searchTextbox.setValue('webdriverIO')
        // await browser.back()
        await browser.keys('Enter') //PC에서 동작함을 확인

    })
})