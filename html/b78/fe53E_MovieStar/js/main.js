var arr = document.querySelectorAll("#comingsoon .slick-slide");
// console.log(arr);
let count = 0;
arr.forEach(item => {
    // console.log(item);
    count++;
    item.addEventListener('click', function() {
        setHeight(".slide1", "0");
        setHeight(".slide2", "0");
        setHeight(".slide3", "0");
        setOpacity(".slide1", "0");
        setOpacity(".slide2", "0");
        setOpacity(".slide3", "0");
        if (attribute === "slide1") {
            setHeight(".slide1", "auto");
            setOpacity(".slide1", "1");
        } else if (attribute === "slide2") {
            setHeight(".slide2", "auto");
            setOpacity(".slide2", "1");
        } else if (attribute === "slide3") {
            setHeight(".slide3", "auto");
            setOpacity(".slide3", "1");
        }
    });
});

function setOpacity(selector, opacity) {
    document.querySelector(selector).style.opacity = opacity;
}

function setHeight(selector, height) {
    document.querySelector(selector).style.height = height;
}