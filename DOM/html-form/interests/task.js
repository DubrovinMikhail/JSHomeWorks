const interestChecks = document.querySelector('.interests_main');

const getChecks = element => {
  return element.getElementsByClassName('interest__check');
};

const getParentCheck = element => {
  let parentUl = element.closest('.interests');
  if (parentUl.tagName == 'UL') {
    return element.closest('.interests_active').previousElementSibling.querySelector('.interest__check');
  };
};

const ChildCheck = element => {
  return element.closest('LABEL').nextElementSibling.getElementsByClassName('interest__check');
};

for (check of getChecks(interestChecks)) {
  check.addEventListener('change', (event) => {
    if (!getParentCheck(event.target)) {
      for (item of ChildCheck(event.target)) {
        item.checked = event.target.checked;
      };
    } else {
      let countCheck = 0;
      for (item of ChildCheck(getParentCheck(event.target))) {
        if (item.checked == true) {
          countCheck ++;
        };
      };
      if (countCheck == ChildCheck(getParentCheck(event.target)).length) {
        getParentCheck(event.target).checked = true;
      } else {
        getParentCheck(event.target).checked = false;
      };
    };
  });
}