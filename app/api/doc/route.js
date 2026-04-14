export async function GET() {
  const res = await fetch(
    "https://docs.google.com/document/d/e/2PACX-1vS0AXH94egpYLBxwQTa5gNE6RxZ2OniJN2nE-j0cguf29Wa0DMUGX1iIF6wk3FKwLT5gxnMxG4zpq7A/pub?embedded=true"
  );

  const html = await res.text();

  return new Response(html, {
    headers: {
      "Content-Type": "text/html",
    },
  });
}