type ListSectionProps = {
  title: string;
  items: string[];
};

const ListSection = ({ title, items }: ListSectionProps) => {
  return (
    <div className="">
      <h3 className="text-xl font-semibold mb-4 border-b border-[#3fa72a] ">
        {title}
      </h3>

      <ul className="list-disc pl-5 pt-2 space-y-2 text-gray-800 text-sm leading-relaxed bg-white shadow-sm  mt-10 min-h-100 ">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListSection