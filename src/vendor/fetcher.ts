export async function getData(url: string, option: {}) {
  const fetchedData = await fetch(url, option);

  return await fetchedData.json();
}
