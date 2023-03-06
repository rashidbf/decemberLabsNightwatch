module.exports = {
    url: 'https://inhouse.decemberlabs.com/',
    elements: {
        getInTouchLocator: {
            selector: 'li[id=menu-item-846]',
        },
        formModalLocator: {
            selector: 'form[id=wpforms-form-872]'
        },
        inputNameLocator: {
            selector: 'input[id=wpforms-872-field_0]'
        },
        inputEmailLocator: {
            selector: '//input[@id="wpforms-872-field_1"]',
            locateStrategy: 'xpath'
        },
        inputCompany: {
            selector: 'input[id=wpforms-872-field_6]'
        },
        inputMessage: {
            selector: 'textarea[id=wpforms-872-field_2]'
        },
        labelTitleModalLcotator: {
            selector: 'h3[class=contact-form-heading]'
        },
        popUpGetInTouch: {
            selector: '//div[@class="dl-modal-content two-columns"]',
            locateStrategy: 'xpath'
        },
        buttonSendLocator: {
            selector: 'button[type=submit]'
        },
        label: {
            selector: '//h3[@class="contact-form-heading center"]',
            locateStrategy: 'xpath'
        },
        inlineDisplayInputName: {
            selector: 'label[id=wpforms-872-field_0-error]'
        },
        inlineDisplayInpuEmail: {
            selector: 'label[id=wpforms-872-field_1-error]'
        },
        inlineDisplayInpuCompany: {
            selector: 'label[id=wpforms-872-field_6-error]'
        },
        inlineDisplayInpuMessage: {
            selector: 'label[id=wpforms-872-field_2-error]'
        },
    },
};