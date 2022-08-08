const faqQuestionBox = document.querySelectorAll('.faq__qna');
const orangeBox = document.querySelector('[data-image-box]');
const body = document.body;

const handleClickFAQ = (e) => {
  // get only parent div when clicked
  const element = e.currentTarget;
  // get elements that need to be animated or changed
  const question = element.firstElementChild.firstElementChild;
  const arrowIcon =
    element.firstElementChild.firstElementChild.nextElementSibling;
  const answer = element.firstElementChild.nextElementSibling;

  // toggle classes
  question.classList.toggle('active--question');
  arrowIcon.classList.toggle('active--down-arrow');
  answer.classList.toggle('hidden');
};

// have orange box show on tablet screen size and larger
const observer = new ResizeObserver((entries) => {
  const bodyElement = entries[0];
  const tabletScreenSize = bodyElement.contentRect.width >= 768;

  tabletScreenSize
    ? orangeBox.classList.remove('hidden')
    : orangeBox.classList.add('hidden');
});

observer.observe(body);

// have answer show up when question or icon are clicked
faqQuestionBox.forEach((question) => {
  question.addEventListener('click', handleClickFAQ);
});

// have question 2 be displayed to its active state by default
faqQuestionBox[1].firstElementChild.firstElementChild.classList.add(
  'active--question'
);
faqQuestionBox[1].firstElementChild.firstElementChild.nextElementSibling.classList.add(
  'active--down-arrow'
);
faqQuestionBox[1].firstElementChild.nextElementSibling.classList.remove(
  'hidden'
);
