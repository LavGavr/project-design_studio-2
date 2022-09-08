const sliderElements = [
    {
        textCity: 'Rostov-on-Don LCD admiral',
        apartmentText: '81m2',
        repairTimeText: '3.5 months',
        repairCostText: 'Upon request',
        img: 'css/img/admiral.png'
    },
    {
        textCity: 'Sochi Thieves',
        apartmentText: '105 m2',
        repairTimeText: '4 months',
        repairCostText: 'Upon request',
        img: 'css/img/slider_hall.png'
    },
    {
        textCity: 'Rostov-on-Don Patriotic',
        apartmentText: '93 m2',
        repairTimeText: '3 months',
        repairCostText: 'Upon request',
        img: 'css/img/slider_white_hall.png'
    }
]

const collectionDescCity = document.querySelector('#rostov-text');
const collectionDescApart = document.querySelector('#apartment-text');
const collectionDescRepairTime = document.querySelector('#repair-time');
const collectionDescRepairCost = document.querySelector('#repair-cost');
const collectionDescSliderImage = document.querySelector('.col-example-img');
const getDots = document.getElementsByClassName('dots');
const getTabsSection = document.getElementsByClassName('choice-city');
const arrowPrev = document.querySelector('.arrow-left');
const arrowNext = document.querySelector('.arrow-right');  

const setSliderElements = (index) => {
    collectionDescCity.innerText = sliderElements[index].textCity;
    collectionDescApart.innerText = sliderElements[index].apartmentText;
    collectionDescRepairTime.innerText = sliderElements[index].repairTimeText;
    collectionDescRepairCost.innerText = sliderElements[index].repairCostText;
    collectionDescSliderImage.style.backgroundImage = `url(${sliderElements[index].img})`
}


let currentIndex = 0;

arrowPrev.addEventListener('click', () => {
    let activeTab = currentIndex - 1;

    if (activeTab > -1) {
        setSliderElements(activeTab);
        currentIndex --;
    } else {
        activeTab = sliderElements.length - 1;
        setSliderElements(activeTab);
        currentIndex = activeTab;
    }
    slideShow(activeTab);
    console.log(activeTab);
})

arrowNext.addEventListener('click', () => {
    let activeTab = currentIndex + 1;

    if (activeTab < sliderElements.length) {
        setSliderElements(activeTab);
        currentIndex++;
    } else {
        activeTab = 0;
        setSliderElements(activeTab);
        currentIndex = activeTab;
    }
    slideShow(activeTab);

    console.log(activeTab);
})

function slideShow(n) {
    for(let i = 0; i < getDots.length; i++) {
        getDots[i].className = getDots[i].className.replace(" dots-active", "");
    }
    getDots[n].className += " dots-active";

    for(let i = 0; i < getTabsSection.length; i++) {
        getTabsSection[i].className = getTabsSection[i].className.replace(" choice-city-active", "");
    }
    getTabsSection[n].className += " choice-city-active";
}

function currentSlide(n) {
    currentIndex = n;

    setSliderElements(n);
    slideShow(n);
}