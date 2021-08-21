export const encodeParams = (params) => {
  const definedParams = Object.entries(params).filter(([, value]) =>
    Boolean(value)
  );
  return definedParams
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
};
