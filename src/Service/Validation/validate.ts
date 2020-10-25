export function isAutomobileValid(item: any) {
  const automobile = item.body;
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

const mailRegEx = /^[a-záéíóúäëïöü]+@[a-záéíóúäëïöü]+\.[A-z]{2,3}$/i;

export function isUserValid(item: any) {
  const user = item.body;
  const { username, password, email } = user;
  if (typeof user !== 'object') return false;
  if (typeof username !== 'string' || username.length > 15) return false;
  if (typeof password !== 'string' || password.length < 10 || password.length > 30) return false;
  if (typeof email !== 'string' || mailRegEx.test(email) || email.length > 30) return false;
  return true;
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
  if (typeof bornDate !== 'number' || bornDate + ''.length > 20) return false; //??? don't know: 32/43/2003
  if (typeof category !== 'number' || category + ''.length > 30) return false;
  return true;
}
