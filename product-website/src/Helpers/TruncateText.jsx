const truncateText = (text, maxLength, showReadMore = true) => {
  if (text.length <= maxLength) {
    return text;
  }

  const truncatedText = text.slice(0, maxLength - 3) + "...";

  return showReadMore ? truncatedText : text;
};

export default truncateText;
