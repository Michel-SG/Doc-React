export async function fetchSW(page) {
    const url = 'https://swapi.dev/api/people/?page=' + page;
    const response = await fetch(url);
    if (!response.ok) throw new Error(response.statusText);

    const { next, count, results: people } = await response.json();
    const nextPage = next === null ? null : next.split('=')[1];

    return { nextPage, count, people };
}
