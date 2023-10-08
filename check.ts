export const isValidLink = (link: string): boolean => {
  const url = new RegExp(
    '^(https?:\\/\\/)' + // validate protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // validate fragment locator
  return !!url.test(link);
};

export const isNotEmpty = (val: unknown): boolean =>
  val !== null &&
  val !== undefined &&
  (typeof val !== 'string' || val.trim() !== '') &&
  (Array.isArray(val) ? val.length > 0 : true);

export const isValidDate = (val: string): boolean => {
  const date = new Date(val);
  return !isNaN(date.getTime());
};

export const isPositiveNumber = (val: number): boolean => val > 0;

export const isValidYear = (val: number): boolean =>
  Number.isInteger(val) && val >= 1 && val <= 9999;
