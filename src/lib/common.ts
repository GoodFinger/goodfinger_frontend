export function randomStr() {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const charactersStrLength = charactersStr.length;
  const charactersLength = characters.length;
  const length = 25;

  for (var i = 0; i < length; i++) {
    if (i === 0) {
      result += charactersStr.charAt(Math.floor(Math.random() * charactersStrLength));
    } else {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  }
  return result;
}
