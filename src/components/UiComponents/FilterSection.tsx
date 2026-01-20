type FilterSectionProps = {
  title: string;
  data: string[] | number[];
  value?: string,
  setState?: React.Dispatch<React.SetStateAction<string[]>>
};

const FilterSection = ({ title, data,value, setState}: FilterSectionProps) => {

  const toggle = (value: string) => {
    setState?.(prev =>
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };
  
  return (
    <div className="p-2">
      <p className="font-bold mt-2">{title}</p>
      
      {data.length > 0 && (
        <div className="mt-2 p-3 max-h-62 overflow-y-auto" style={{scrollbarWidth:"thin"}}>
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-x-2">
              <input type="checkbox" value={item} className="scale-125" onChange={()=>toggle(String(item))} />
              <label className="text-[#807d7d]">
                {title === "Price" ? `Rs ${item}` : item}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterSection;