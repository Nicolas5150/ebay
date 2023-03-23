// URL should be of url API object:
// https://developer.mozilla.org/en-US/docs/Web/API/URL
export default async function fetchAndReturn(url, options = {}) {
    try {
        const response = await fetch(url,options);
        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
        return null;
    }
}
