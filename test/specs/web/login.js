

describe('Login', () => {
    it.only('로그인 페이지 이동', async () => {
        await browser.url('https://zero-base.co.kr/')
        const hambugBtn = await $('button[type="button"]')

        await hambugBtn.click()

    })
})


