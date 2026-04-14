export default async function handler(req, res) {
  try {
    const docUrl = process.env.GOOGLE_DOC_URL;

    if (!docUrl) {
      return res.status(500).send("Missing GOOGLE_DOC_URL");
    }

    const response = await fetch(docUrl);

    if (!response.ok) {
      return res.status(response.status).send("Failed to fetch Google Doc");
    }

    const html = await response.text();

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.status(200).send(html);

  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Error fetching document");
  }
}