export default function CardGrid({ number }: { number: number }) {
  // pagination
  const cards = new Array(number).fill(null);

  return (
    <ul
      role="list"
      data-testid="ProductList"
      className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-8 p-12"
    >
      {cards.map((_, index) => (
        <li
          key={index}
          className="flex flex-col items-center justify-center h-48 bg-blue-500 text-white text-lg font-bold rounded-lg shadow-md"
        >
          Card {index + 1}
        </li>
      ))}
    </ul>
  );
}
