$('.about-items > div').on('click', function () {
    $(this).children('.about-icon').toggleClass('about-rotate-icon');
    $(this).parent('.about-items').toggleClass('change-color');
    $(this).next('.about-text').slideToggle(300);
})

// $('.features_item > p').on('click', function () {
//     $(this).children('.features_item_title').toggleClass('features_item_title-change-color');
//     $(this).next('.features_item_text-none').slideToggle(300);
//     $(this).next('.features_item_hr').toggleClass('features_item_hr-change-color');
// })

$('.features_item_1 > div').on('click', function () {
    $(this).children('.features_item_title').toggleClass('features_item_title-change-color');
})

$('.features_item_1 > div').on('click', function () {
    $(this).next('.features_item_text').slideToggle(300);
})    

$('.features_item_1 > div').on('click', function () {
     $(this).children('.features_item_hr').toggleClass('features_item_hr-change-color');
}) 

