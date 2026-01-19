type FilterSectionProps = {
  title: string;
  data: string[] | number[];
};

const FilterSection = ({ title, data }: FilterSectionProps) => {
  return (
    <div className="p-2">
      <p className="font-bold mt-2">{title}</p>

      {data.length > 0 && (
        <div className="mt-2 p-3 max-h-62 overflow-y-auto">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-x-2">
              <input type="checkbox" className="scale-125" />
              <label className="text-[#807d7d]">
                {title === "Price" ? `₹${item}` : item}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterSection;