export function isAutomobileValid(automobile: any) {
  const { brand, model, year, miles, color, passengers, gears, status } = automobile;
  if (typeof automobile !== 'object') return false;
  if (typeof brand !== 'string' || brand.length > 15) return false;
  if (typeof model !== 'string' || model.length > 15) return false;
  if (typeof year !== 'number' || year + ''.length > 4) return false; //test this
  if (typeof miles !== 'number' || miles + ''.length > 6) return false;
  if (typeof color !== 'string' || color.length > 15) return false;
  if (typeof passengers !== 'number' || passengers + ''.length > 2) return false;
  if (typeof gears !== 'string' || gears.length > 6) return false;
  if (typeof status !== 'string' || status.length > 10) return false;
  return true;
}

export function isUserValid(user: any) {
  const { username, password, email } = user;
  if (typeof user !== 'object') return false;
  console.log('pass request object');
  if (!isEmailValid(email)) return false;
  console.log('pass email');
  if (!isUsernameValid(username)) return false;
  console.log('pass username');
  if (!isPasswordValid(password)) return false;
  console.log('pass password');
  return true;
}

const mailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function isEmailValid(email: any) {
  return Boolean(typeof email === 'string' && mailRegEx.test(email) && email.length < 30);
}

export function isUsernameValid(username: any) {
  return Boolean(
    typeof username === 'string' && username.length >= 6 && username.length <= 12 && /\w/g.test(username)
  );
}

export function isPasswordValid(password: any) {
  return Boolean(typeof password === 'string' && password.length >= 8 && password.length <= 15);
}

export function isClientValid(item: any) {
  const client = item.body;
  const {
    id,
    firstName,
    lastName,
    documentType,
    documentNumber,
    address,
    telephone,
    bornDate,
    category,
  } = client;

  if (typeof client !== 'object') return false;
  if (!id || typeof id !== 'number') return false;
  if (typeof firstName !== 'string' || firstName.length > 15) return false;
  if (typeof lastName !== 'string' || lastName.length > 15) return false;
  if (typeof documentType !== 'string' || documentType.length > 2) return false;
  if (typeof documentNumber !== 'number' || documentNumber + ''.length > 8) return false;
  if (typeof address !== 'string' || address.length > 20) return false;
  if (typeof telephone !== 'number' || telephone + ''.length > 15) return false;
  //if (typeof bornDate !== 'number' || bornDate + ''.length > 20) return false; ? don't know yet: 32/43/2003?
  if (typeof category !== 'number' || category + ''.length > 30) return false;
  return true;
}

export function isSearchValid(filters: any) {
  if (typeof filters !== 'string') return false;
  if (filters.length > 20 || filters.length < 3) return false;
  return true;
}
