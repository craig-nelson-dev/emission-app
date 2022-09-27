const API = 'http://localhost:8000';

export const getEmissions = async () => {
  try {
    const response = await fetch(`${API}/emissions`);
    const emissions = await response.json();
    return emissions.emssions;
  } catch (error) {
    console.error(error);
    return null;
  }
};
