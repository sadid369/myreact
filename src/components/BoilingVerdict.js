export default function BoilinfVerdict({ celsius = 0 }) {
  if (celsius >= 100) {
    return <p>The Water Would Boil</p>;
  }
  return <p>The Water Would Not Boil</p>;
}
