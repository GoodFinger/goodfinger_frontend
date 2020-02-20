export function emailValidation(emailInput: string) {
  const emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; //이메일 정규식

  if (emailRule.test(emailInput)) {
    return true;
  }

  return false;
}

export function birthValidation(birthInput: string) {
  const birthRule = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;

  if (birthRule.test(birthInput)) {
    return true;
  }

  return false;
}
