// Helper
export const stringIsNumber = (value: string): boolean => !Number.isNaN(Number(value));

// Turn enum into array
export const enumToArray = (enums: any) => Object
  .keys(enums)
  .filter(stringIsNumber)
  .map((key: string) => enums[key]);
