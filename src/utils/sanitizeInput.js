// text = current value from input
// content = previous state from store or empty string

const sanitize = (text, content = "") => {
  if (text.match(/^[0-9b#A-Z]{1,16}$/)) {
    return text;
  } else if (text.match(/\b$/)) return "";
  else {
    return content;
  }
};

export default sanitize;
