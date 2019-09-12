// text = current value from input
// content = previous state from store or empty string

const sanitize = (text, content = "") => {
  if (text.match(/^[A-Gb#0-8]{1,16}$/)) {
    return text;
  } else if (text.match(/\b$/)) return "";
  else {
    return content;
  }
};

export default sanitize;


