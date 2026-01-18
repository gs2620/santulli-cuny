export async function handler() {
  const rssUrl = "https://pubmed.ncbi.nlm.nih.gov/rss/search/1hWsC1jJ5A-qte8kpcuVrXkbRYROR8FyO0vQvRL2XWXsz6As4A/?limit=100";

  try {
    const response = await fetch(rssUrl);
    const text = await response.text();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/xml",
        "Access-Control-Allow-Origin": "*"
      },
      body: text
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Failed to fetch PubMed RSS"
    };
  }
}
