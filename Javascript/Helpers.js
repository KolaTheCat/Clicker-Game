// Format the values to a currency
function FormatValue(string) {
  return string.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
