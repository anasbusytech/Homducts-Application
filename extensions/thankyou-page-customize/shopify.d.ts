import '@shopify/ui-extensions';

//@ts-ignore
declare module './src/ThankYouPageSurvey.jsx' {
  const shopify: import('@shopify/ui-extensions/purchase.thank-you.block.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/shared.jsx' {
  const shopify: import('@shopify/ui-extensions/purchase.thank-you.block.render').Api;
  const globalThis: { shopify: typeof shopify };
}
