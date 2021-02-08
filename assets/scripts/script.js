const icon = document.querySelector('.lni');
const img = document.querySelector('.drop');

document.querySelector('.js')
    .addEventListener('click', function(){
        img.classList.toggle('toggle');
        console.log(changeIcon());
    });


function changeIcon (){
    const iconDown = icon.classList.contains('lni-chevron-down');

    if (iconDown) {
        icon.classList.remove('lni-chevron-down');
        icon.classList.add('lni-chevron-up');
    } else {
        icon.classList.remove('lni-chevron-up');
        icon.classList.add('lni-chevron-down');
    }
}