console.log('CASTOR!!!');

$(document).ready(onReady);

function onReady() {
  // SELECTORS
  // # - id
  // . - class
  // div - element
  console.log($('#js-selector'));

  // DOM Manipulation
  $('.js-list li:first-child')
    .css('border', '3px solid teal')
    .css('background-color', 'blue')
    .append('<div>Hello</div>') // we add content to the bottom
    .text(`<p>Myron</p>`); // replaces all content with text
  // .html('<p>Hey there peeps</p>'); // replaces all content with HTML

  $('.js-list').children().css('font-weight', 'bold');

  let count = 0;
  $('.js-garage').on('click', function () {
    count++;
    $('.js-count').text(count);
  });

  // DOM Traversal
  $('.js-clicker').on('click', clickerHandler); // button click CLICK ME
  $('.js-block').on('click', '.js-rect', clickForRectangle);
}

// testFunction();

// function testFunction() {
//   console.log(this);
// }

function clickerHandler() {
  const $block = $('.js-block');
  const classToAdd = 'makeRectangle';
  console.log(this);

  // if ($block.hasClass(classToAdd)) {
  //   $block.removeClass('makeRectangle');
  // } else {
  //   $block.addClass('makeRectangle');
  // }

  // $block.toggleClass(classToAdd);

  $block.append(
    '<div class="block"><button class="js-rect">Rectangle</button></div>'
  );
}

function clickForRectangle() {
  const classToAdd = 'makeRectangle';
  // $().toggleClass(classToAdd);
  // console.log('SOMETHING');
  // console.log(this); // represents the element interacted with
  $(this).parent().toggleClass(classToAdd); // DOM traversal
  // $('.js-click-block').toggleClass(classToAdd);
}

// .parent()
// .children()
