export function Survey({ title, description }) {
  return (
    <s-box border="base" padding="base" borderRadius="base">
      <s-stack gap="base">
        <s-heading>{title}</s-heading>
        <s-text>{description}</s-text>
      </s-stack>
    </s-box>
  );
}
