const DefaultInput = ({name,type,value,onChange,error,placeHolder,label}:any) => {

  return (
    <div className="grid">
      <label htmlFor={name} className={`font-bold text-[12px] ${error&&'text-[#CD2C2C]'} peer-invalid:text-[#CD2C2C]`}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        className={`peer border-[1px] rounded-[8px] bg-lightGrey py-[18px] px-[24px] focus:border-primary focus:outline-none invalid:border-[#CD2C2C] invalid:border-[2px] ${error&&'border-[#CD2C2C] border-[2px] '}`}
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
        name={name}
      />
      {error&&<p className="text-[10px] text-[#CD2C2C]">{error}</p>}
    </div>
  );
};

export default DefaultInput;
