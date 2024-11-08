
const RadioComponent = ({ name, value, onChange, placeHolder, error, selectedValue }: any) => {
  return (
    <div>
      {/* Label allows interaction with the hidden input */}
      <label htmlFor={name} className="flex items-center space-x-2 cursor-pointer">
        <div
          className={`peer border-[1px] flex items-center gap-[20px] w-full rounded-[8px] bg-lightGrey py-[18px] px-[24px] focus:!border-primary focus:outline-none ${
            error ? 'border-[#CD2C2C] border-[2px]' : ''
          } relative z-0`}
        >
          {/* Hidden radio input */}
          <input
            type="radio"
            id={name}
            name={name}
            value={value}
            checked={selectedValue === value}
            onChange={onChange}
            className="w-[15px] h-[15px] border-[2px] checked:bg-primary checked:hover:bg-primary checked:active:bg-primary checked:focus:bg-primary focus:bg-primary focus:outline-none focus:ring-1 focus:ring-primary" // Hides the native radio button
          />
          
          <span className="font-bold ml-2">{placeHolder}</span>
        </div>
      </label>
      {error && (
        <p className="text-red-500 text-sm mt-1">This field has an error.</p>
      )}
    </div>
  );
};

export default RadioComponent;

