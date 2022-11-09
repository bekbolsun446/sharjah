const container = document.querySelector(".container");
const style = window.getComputedStyle(container);
let numOfMargin = parseFloat(style.marginLeft.slice(0, style.marginLeft.length - 2))


const travel_content = document.querySelector(".travel_content");

if ($(window).width() < 768) {
    travel_content.style.paddingLeft = `${numOfMargin + 12}px`;
    travel_content.style.paddingRight = `${numOfMargin + 12}px`;
}


//===================OCCUPATION=====================================


$('.occ_body').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

//===================OCCUPATION END=====================================


//====================CHOOSE======================================

const chooseTitle = document.querySelector(".chooseTitle");
const chooseImg = document.querySelector(".chooseImg");
chooseTitle.style.paddingLeft = `${numOfMargin + 12}px`;


const choose_listItem = document.querySelectorAll(".choose_listItem");
const list_itemBg = document.querySelectorAll(".list_itemBg");

choose_listItem.forEach(item => {
    item.style.paddingLeft = `${numOfMargin + 12}px`;
})

if ($(window).width() < 768) {
    chooseTitle.style.paddingRight = `${numOfMargin + 12}px`;
    choose_listItem.forEach(item => {
        item.style.paddingRight = `${numOfMargin + 28}px`;
    })
    list_itemBg.forEach(item => {
        item.style.right = `${numOfMargin + 12}px`;
    })
    chooseImg.style.marginRight = `${numOfMargin + 12}px`;
    chooseImg.style.marginLeft = `${numOfMargin + 12}px`;
    chooseImg.style.width = `${parseFloat(style.width.slice(0, style.width.length - 2)) - 24}px`;
}


//====================CHOOSE END======================================

