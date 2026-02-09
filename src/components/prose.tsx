export function Prose({ html }: { html: string }) {
  return (
    <div
      className="prose-custom"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
