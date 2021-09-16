class MainPage {

    get searchTextbox() { return $('input[name="q"') }

    open() {
        return browser.url('https://www.google.com/')
    }
}
module.exports = new MainPage()