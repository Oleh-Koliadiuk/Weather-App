export async function getWeather(latitude, longitude, current) {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=${current}`,
    );

    if (!response.ok) {
      throw new Error(`Server Error: status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Response Error: `, error.message);
  }
};
