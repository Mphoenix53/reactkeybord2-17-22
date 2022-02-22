export const getAlphabet = () => {
  let alp = [];
  for (let i = 97; i <= 122; i++) {
    alp.push(String.fromCharCode(i));
  }
  return alp;
};