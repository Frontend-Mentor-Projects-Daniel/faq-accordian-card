const faqQuestionBox = document.querySelectorAll('.faq__qna');

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

faqQuestionBox.forEach((question) => {
  question.addEventListener('click', handleClickFAQ);
});
