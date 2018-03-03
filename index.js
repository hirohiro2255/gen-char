module.exports = function(len) {
  let title = '';
  let chars = '';
  let counter = 5
  const lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';
  const upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (typeof len === 'number' && !isNaN(len) && len > 0) {
    counter = len;
  }
  chars += lowerAlpha;
  chars += upperAlpha;
  for (let i = 0; i < counter; i++) {
    title += chars[Math.floor(Math.random() * chars.length)];
  }
  return title;
};
