export const updateObject = (
  oldObject: object,
  updateProperties: object
): object => {
  return {
    ...oldObject,
    ...updateProperties,
  };
};
