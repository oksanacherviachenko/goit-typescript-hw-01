async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data: T = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

