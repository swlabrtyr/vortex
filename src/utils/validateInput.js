const validateInput = e => {
  const re = /[2-7A-G#]+/g;
  if (!re.test(e.key)) {
    e.preventDefault();
  }
};

export default validateInput;