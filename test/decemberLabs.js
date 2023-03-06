describe('sample test with page objects', function () {
    it('Test', async function (browser) {
        var homePage = browser.page.decemberLabs.homePage();
        let labelTitle;

        console.log('info: Navigate to the website');
        homePage
            .navigate()
            .maximizeWindow();

        console.log('info: Validate title');
        homePage.assert.title('December Labs: UX/UI Design and Mobile App & Web Development');

        console.log('info: Wait and click on the button Get in touch');
        homePage.waitForElementVisible('@getInTouchLocator')
            .click('@getInTouchLocator');

        console.log('info: Validate that the popup is visible');
        homePage.assert.visible('@formModalLocator');

        console.log('info: get the title of the popup');
        labelTitle = await homePage.getText('@label');
        console.log(`The title inside the popup is: ${labelTitle}`);

        console.log('info: Click on the button Send');
        homePage.assert.equal(labelTitle, 'Get In Touch')
            .click('@buttonSendLocator');

        console.log('info: Validate that the mandatory fields are displayed in red');
        homePage.getAttribute('@inlineDisplayInputName', 'style', function (result) {
            this.assert.equal(result.value, 'display: inline;', `The value of attirbute style is ${result.value}`);
        });

        homePage.getAttribute('@inlineDisplayInpuEmail', 'style', function (result) {
            this.assert.equal(result.value, 'display: inline;', `The value of attirbute style is ${result.value}`);
        });

        homePage.getAttribute('@inlineDisplayInpuCompany', 'style', function (result) {
            this.assert.equal(result.value, 'display: inline;', `The value of attirbute style is ${result.value}`);
        });

        homePage.getAttribute('@inlineDisplayInpuMessage', 'style', function (result) {
            this.assert.equal(result.value, 'display: inline;', `The value of attirbute style is ${result.value}`);
        });

        console.log('info: Validate that when the fields are completed they are no longer displayed in red');
        homePage.setValue('@inputNameLocator', 'rashid')
            .getAttribute('@inlineDisplayInputName', 'style', function (result) {
                this.assert.equal(result.value, 'display: none;', `The value of attirbute style is ${result.value}`);
            });

        homePage.setValue('@inputEmailLocator', 'rashid@gmail.com')
            .getAttribute('@inlineDisplayInputName', 'style', function (result) {
                this.assert.equal(result.value, 'display: none;', `The value of attirbute style is ${result.value}`);
            });

        homePage.setValue('@inputCompany', 'rashid')
            .getAttribute('@inlineDisplayInpuCompany', 'style', function (result) {
                this.assert.equal(result.value, 'display: none;', `The value of attirbute style is ${result.value}`);
            });

        homePage.setValue('@inputMessage', 'rashid')
            .getAttribute('@inlineDisplayInpuMessage', 'style', function (result) {
                this.assert.equal(result.value, 'display: none;', `The value of attirbute style is ${result.value}`);
            });
        browser.end();
    });
});