export const updateObject = (
  oldObject: Record<string, unknown>,
  updateProperties: Record<string, unknown>,
): Record<string, unknown> => {
  return {
    ...oldObject,
    ...updateProperties,
  };
};
