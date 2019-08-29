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
        title: 'Sanisburys Travel',
        imgLocation: sainsburysImage
    },
    {
        title: 'The Military Mutual',
        imgLocation: tmmImage
    },
    {
        title: 'Select & Protect Insurance',
        imgLocation: selectAndProtetImage
    },
    {
        title: 'the West Brom Home Insurance',
        imgLocation: theWestBromImage
    },
    {
        title: 'Asda Home Insurance',
        imgLocation: asdaHomeImage
    },
    {
        title: 'Asda Renters Insurance',
        imgLocation: asdaRentersImage
    },
    {
        title: 'Benenden Home Insurance',
        imgLocation: benendenImage
    },
    {
        title: 'Market Harborough Home Insurance',
        imgLocation: marketHarboroughImage
    },
    {
        title: 'Cambridge Lettings Insurance',
        imgLocation: cambridgeLettingsImage
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
