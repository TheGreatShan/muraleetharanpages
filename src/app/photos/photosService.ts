export interface GitHubFileLinks {
    self: string;
    git: string;
    html: string;
}

export interface GitHubContentItem {
    name: string;
    path: string;
    sha: string;
    size: number;
    url: string;
    html_url: string;
    git_url: string;
    download_url: string;
    type: "file";
    _links: GitHubFileLinks;
}

export interface Image {
    sha: string;
    node_id: string;
    size: number;
    url: string;
    content: string;
    encoding: string;
}

async function getPicsUrl() : Promise<GitHubContentItem[]>{
    const result =
        await fetch("https://api.github.com/repos/TheGreatShan/pics/contents");

    if (!result.ok)
        throw new Error("Cannot get any pictures from Github")

    const json : GitHubContentItem[] = await result.json()
    return json;
}

export async function getPictures() : Promise<string[]> {
    const pics = await getPicsUrl();
    return await Promise.all(pics.map(async x => {
        const result = await fetch(x.git_url)
        if (!result.ok)
            throw new Error("Cannot load picture from Github")

        const json: Image = await result.json();
        return json.content.replace(/\s/g, "");
    }));
}
