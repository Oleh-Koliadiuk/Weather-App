const SELECTED_CITY_KEY = "selectedCity";

export function saveSelectedCity(cityName) {
  localStorage.setItem(SELECTED_CITY_KEY, cityName);
}

export function getSelectedCity() {
  return localStorage.getItem(SELECTED_CITY_KEY);
}
