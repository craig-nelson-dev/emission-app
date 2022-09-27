export const formatKg = (value: number) => {
  if (value >= 1000) return `${Number(value / 1000).toFixed(2)} t`;
  return `${value} kg`;
};
