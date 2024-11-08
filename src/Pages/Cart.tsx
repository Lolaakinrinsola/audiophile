import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CartProduct from "../components/CartProduct";
import RadioComponent from "../components/Checkbox";
import DefaultInput from "../components/DefaultInput";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sucess from "../components/Sucess";
import useStore from "../Utils/Store";

const Cart = () => {
  const navigate = useNavigate();
  // State for form inputs
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    eMoneyNumber: "",
    eMoneyPin: ""
  });

  // State for error messages
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    eMoneyNumber: "",
    eMoneyPin: ""
  });

  // Function to handle input changes and update the form state
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));

    setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "", // Clear error message when user starts typing
      }));
  };

  // Function to validate the form
  const validateForm = () => {
    let isValid = true;
    const newErrors: any = {};
    // Basic validation rules
    if (!formValues.name) newErrors.name = "Name is required.";
    if (!formValues.email || !/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Valid email is required.";
    }
    if (!formValues.phone) newErrors.phone = "Phone number is required.";
    if (!formValues.address) newErrors.address = "Address is required.";
    if (!formValues.zipCode) newErrors.zipCode = "ZIP code is required.";
    if (!formValues.city) newErrors.city = "City is required.";
    if (!formValues.country) newErrors.country = "Country is required.";

    // e-Money details validation (only if e-money is selected)
    if (selectedOption === "e-money") {
        if (!formValues.eMoneyNumber) newErrors.eMoneyNumber = "e-Money Number is required.";
        if (!formValues.eMoneyPin) newErrors.eMoneyPin = "e-Money PIN is required.";
      }

    setErrors(newErrors);

    // If any field has an error, the form is invalid
    if (Object.keys(newErrors).length > 0) isValid = false;

    return isValid;
  };

  // Handle form submission
  const handleSubmit = () => {
    if (validateForm()) {
      toggleModal(); // Open modal if the form is valid
    }
  };
  const [selectedOption, setSelectedOption] = useState("cash");
  const [modal, setmodal] = useState(false);
  const { cart, total, finalTotal, vat, shipping } = useStore();

  function toggleModal() {
    setmodal(!modal);
  }
  const paymentTotal = [
    { name: "TOTAL", value: total },
    { name: "SHIPPING", value: shipping },
    { name: "VAT (INCLUDED)", value: vat },
  ];

  const handleRadioChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-grey px-[11%] py-[200px] ">
        <p
          className="text-opacity-50 font-thin text-15px cursor-pointer hover:text-primary"
          onClick={() => navigate(-1)}
        >
          Go Back
        </p>
{cart.length>0?
        <div className="my-[38px] grid gap-[30px] md:grid-cols-[2fr_1fr]">
          <div className="bg-white rounded-md p-[48px] grid gap-[58px]">
            <p className="font-bold text-[32px]">CHECKOUT</p>
            <div className="grid gap-[30px]">
              <p className="text-primary text-[13px] font-bold uppercase">
                Billing Details
              </p>
              <div className="grid gap-[20px] md:grid-cols-2">
                <DefaultInput
                  name="name"
                  label="Name"
                  placeHolder="Alexei Ward"
                  type="text"
                  onChange={handleInputChange}
                  error={errors.name}

                />
                <DefaultInput
                  name="email"
                  label="Email Address"
                  placeHolder="alexei@mail.com"
                  type="email"
                  onChange={handleInputChange}
                  error={errors.email}
                />
                <DefaultInput
                  name="phone"
                  label="Phone Number"
                  placeHolder="+1 202-555-0136"
                  type="text"
                  onChange={handleInputChange}
                  error={errors.phone}

                />
              </div>
            </div>

            <div className="grid gap-[30px]">
              <p className="text-primary text-[13px] font-bold uppercase">
                shipping info
              </p>
              <DefaultInput
                name="address"
                label="Address"
                placeHolder="1137 Williams Avenue"
                type="text"
                onChange={handleInputChange}
                error={errors.address}
              />
              <div className="grid gap-[20px] md:grid-cols-2">
                <DefaultInput name="zipCode"  label="ZIP Code" placeHolder="10001" type="text" 
                  onChange={handleInputChange}
                  error={errors.zipCode}

                  />
                <DefaultInput name="city" label="City" placeHolder="New York" type="text" 
                  onChange={handleInputChange}
                  error={errors.city}
                  />
                <DefaultInput
                  name="country"
                  label="Country"
                  placeHolder="United States"
                  type="text"
                  onChange={handleInputChange}
                  error={errors.country}

                />
              </div>
            </div>

            <div className="grid gap-[30px]">
              <p className="text-primary text-[13px] font-bold uppercase">
                payment details
              </p>
              <div className="grid gap-[20px] md:grid-cols-2">
                <p className="text-[12px] font-bold">Payment Method</p>

                <div className="grid gap-[30px]">
                  <RadioComponent
                    name="payment"
                    placeHolder="e-Money"
                    onChange={handleRadioChange}
                    value="e-money"
                    selectedValue={selectedOption}
                  />
                  <RadioComponent
                    name="payment"
                    placeHolder="Cash on Delivery"
                    onChange={handleRadioChange}
                    value="cash"
                    selectedValue={selectedOption}
                  />
                </div>
              </div>
              {selectedOption === "e-money" && (
                <div className="grid gap-[20px] md:grid-cols-2">
                  <DefaultInput
                    name="eMoneyNumber"
                    label="e-Money Number"
                    placeHolder="238521993"
                    type="email"
                  onChange={handleInputChange}
                  error={errors.eMoneyNumber}
                  />
                  <DefaultInput
                    label="e-Money PIN"
                    name="eMoneyPin"
                    placeHolder="6891"
                    type="text"
                  onChange={handleInputChange}
                  error={errors.eMoneyPin}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="bg-white rounded-md p-[48px] grid gap-[31px] h-fit">
            <p className="font-bold uppercase text-[18px]">summary</p>

            <div className="grid gap-[20px]">
              {cart.map((val: any, index: any) => (
                <CartProduct
                  index={index}
                  image={val.image}
                  name={val.name}
                  price={val.price}
                >
                  <p className="text-black text-opacity-50 text-[15px]">
                    x{val.quantity}
                  </p>
                </CartProduct>
              ))}
            </div>

            <div className="grid gap-[15px] ">
              {paymentTotal.map((val, index) => (
                <div className="flex justify-between items-center" key={index}>
                  <p className="text-opacity-50 uppercase text-[15px]">
                    {val.name}
                  </p>
                  <p className="text-[18px] font-bold">$ {val.value} </p>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <p className="text-opacity-50 uppercase text-[15px]">
                GRAND TOTAL
              </p>
              <p className="text-[18px] font-bold">$ {finalTotal} </p>
            </div>

            <Button
              title="CONTINUE & PAY"
              className="w-full grid justify-center h-fit"
              onClick={handleSubmit}
            />
          </div>
        </div>
: <div className="bg-white rounded-lg p-[48px] text-center text-[44px] gap-[58px] min-h-[40vh] mt-[30px] grid justify-center items-center">
    <p className="lg:max-w-[60vw] m-auto">No items in your Cart! Continue shopping <span className="text-primary underline cursor-pointer" onClick={()=>navigate('/')}>here</span></p>
</div>
}
      </div>
      {modal && <Sucess toggleModal={toggleModal} />}
      <Footer />
    </>
  );
};

export default Cart;
