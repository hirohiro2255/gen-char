module.exports = function(len) {
  let title = '';
  let chars = '';
  const lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';
  const upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const counter = len || 5;

  chars += lowerAlpha;
  chars += upperAlpha;
  for (let i = 0; i < counter; i++) {
    title += chars[Math.floor(Math.random() * chars.length)];
  }
  return title;
};
