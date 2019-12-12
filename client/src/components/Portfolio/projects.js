const uuidv4 = require('uuid/v4');

const sainsburysImage = require('./../../assets/images/sainsburys.png');
const tmmImage = require('./../../assets/images/tmm.png');
const selectAndProtetImage = require('./../../assets/images/selectandprotect.png');
const theWestBromImage = require('./../../assets/images/theWestBrom.png');
const asdaHomeImage = require('./../../assets/images/asda-home.png');
const asdaRentersImage = require('./../../assets/images/asda-renters.png');
const benendenImage = require('./../../assets/images/benenden.png');
const marketHarboroughImage = require('./../../assets/images/market-harborough.png');
const cambridgeLettingsImage = require('./../../assets/images/cambridge-lettings.png');

const calculatorImage = require('./../../assets/images/calculator.png');

const workProjects = [
    {
        id: uuidv4(),
        title: 'Sanisburys Travel',
        imgLocation: sainsburysImage,
        siteLink: 'https://www.insurance-sainsburysbank.co.uk/',
        disabled: false
    },
    {
        id: uuidv4(),
        title: 'The Military Mutual',
        imgLocation: tmmImage,
        siteLink: 'https://home.themilitarymutual.com/',
        disabled: false
    },
    {
        id: uuidv4(),
        title: 'Select & Protect Insurance',
        imgLocation: selectAndProtetImage,
        siteLink: 'https://selectprotect.brokerplatform.co.uk/',
        disabled: false
    },
    {
        id: uuidv4(),
        title: 'the West Brom Home Insurance',
        imgLocation: theWestBromImage,
        siteLink:
            'https://wbhood-insurance.co.uk/RSA_Customer_Sales_Websites/servletcontroller',
        disabled: false
    },
    {
        id: uuidv4(),
        title: 'Asda Home Insurance',
        imgLocation: asdaHomeImage,
        siteLink:
            'https://home-insurance.asda.com/HomeInsurance/servletcontroller',
        disabled: false
    },
    {
        id: uuidv4(),
        title: 'Asda Renters Insurance',
        imgLocation: asdaRentersImage,
        siteLink: null,
        disabled: true
    },
    {
        id: uuidv4(),
        title: 'Benenden Home Insurance',
        imgLocation: benendenImage,
        siteLink: null,
        disabled: true
    },
    {
        id: uuidv4(),
        title: 'Market Harborough Home Insurance',
        imgLocation: marketHarboroughImage,
        siteLink: null,
        disabled: true
    },
    {
        id: uuidv4(),
        title: 'Cambridge Insurance',
        imgLocation: cambridgeLettingsImage,
        siteLink: null,
        disabled: true
    }
];

const personalProjects = [
    {
        title: 'Calculator App',
        imgLocation: calculatorImage
    }
];

module.exports = {
    workProjects,
    personalProjects
};
