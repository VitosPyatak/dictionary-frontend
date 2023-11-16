import { defaultResponse } from "./configs";

export class APIProvider {
    static countWords = (text: string) => {
        const requestUrl = `${this.baseUrl}/words/count`;
        return fetch(requestUrl, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({ text }),
        })
            .then(response => response.json())
            .catch(error => {
                console.error(error);
                return defaultResponse;
            });
    }

    private static get baseUrl() {
        return process.env.REACT_APP_API_URL;
    }
}