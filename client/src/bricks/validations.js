export const nameValidation = (name) => {
  if (name.trim() === '') {
    return `Jméno interpreta je povinné`;
  }
  if (name.trim().length < 3) {
    return `Jméno interpreta musí mít alespoň tři znaky`;
  }
  return null;
};

export const titleValidation = (title) => {
  if (title.trim() === '') {
    return `Název videa je povinný`;
  }
  if (title.trim().length < 3) {
    return `Název videa musí mít alespoň tři znaky`;
  }
  return null;
};

export const durationValidation = (duration) => {
  if (/^[0-59]+.[0-59]/.test(duration)) {
    return null;
  }
  if (duration === '') {
    return 'Délka videa musí být vyplněna';
  }
  if (duration.length < 1) {
    return `Délka videa musí být minimálně 1 min`;
  }
  return 'Vložte prosím trvání videa s tečkou';
};

export const descriptionValidation = (value) => {
  if (value.trim() === '') {
    return 'Musí být vyplněno';
  }
  if (value.length > 200) {
    return `Maximální délka popisu je 200 znaků.`;
  }
  return null;
};

export const pictureValidation = (picture) => {
  if (/^(https|http)?:\/\/.*\.(png|jpg)$/.test(picture)) {
    return null;
  }
  if (picture.trim() === '') {
    return `URL obrázku je povinné`;
  }
  return 'Vložte prosím URL odkazující přímo na .jpg nebo .png soubor';
};

export const requiredValidation = (value) => {
  if (value.trim() === '') {
    return 'Musí být vyplněno';
  }
  return null;
};