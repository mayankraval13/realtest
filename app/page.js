export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/doc`, {
    cache: "no-store",
  });

  const html = await res.text();

  return (
    <div style={{ padding: "20px" }}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}