"use client"
import Image from "next/image";
import InputField from "../../input-field/input-field";
import PopUp from "../../pop-up/pop-up";
import CartCard from "../../cart-cards/cart-cards";
import ThemeButton from "../../theme-button/theme-button";
import React from "react";

interface buyerProductLayoutProp {
  children?: any;
}
const BuyerProductLayout = ({ children }: buyerProductLayoutProp) => {
  const [cart, setCart] = React.useState(false);
  return (
    <>
      <header className="bg-primary-500 py-4 px-8 flex justify-between items-center">
        <div>
          <Image
            src={"/logo.jpeg"}
            alt="logo"
            width={60}
            height={60}
            className="rounded-md"
          />
        </div>
        <div className="max-w-[400px] w-full">
          <InputField
            type="search"
            search={true}
            placeholder="Search products"
            className="!rounded-[10px]"
          />
        </div>
        <div className="flex gap-6 items-center">
          <Image
            src={"/svg/heart.svg"}
            alt="like"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Image
            src={"/svg/cart.svg"}
            alt="cart"
            width={24}
            height={24}
            className="cursor-pointer"
            onClick={()=>setCart(true)}
          />
          <Image
            src={"/svg/user.svg"}
            alt="user"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>
      </header>
      {cart &&
      <PopUp>
        <h3 className="font-bold text-2xl mb-4">Your Cart</h3>
        <div>
          <h3 className="flex justify-between font-semibold border-b pb-2">
            <span>Selected Items</span>
            <span>Subtotal</span>
          </h3>
          <div className="mt-4 grid gap-4">
            {cartGallery?.map((item,index)=>{
              return(

                <CartCard key={index} imageUrl={item?.imageUrl} itemNumber={item?.itemNumber} price={item?.price} productName={item?.name} />
              )
            })}
          </div>
          <div className="py-2 border-t border-b mt-6">
            <h3 className="font-semibold text-lg flex justify-between">
              <span>Oredr Summary</span>
              <span>Total</span>
            </h3>
          </div>
          <div className="flex gap-2 items-center mt-4">
            <input type="checkbox" name="agree" id="agree" className="mt-[2px]" />
            <label htmlFor="agree" className="font-semibold">Agree to Terms of Service to Proceed</label>
          </div>
          <ThemeButton text="Payment" className={"mt-10 font-semibold"} />
        </div>
        <Image src={"/svg/close.svg"} alt="close" width={20} height={20} className="absolute top-4 right-4 cursor-pointer" onClick={()=>setCart(false)} />
      </PopUp>
      }
      <div>{children}</div>
      <footer className="pt-12 pb-6 px-16 bg-primary-500 text-white flex gap-2 justify-between">
        <div className="grid">
          <div>
            <Image
              src={"/logo.jpeg"}
              alt="logo"
              width={80}
              height={60}
              className="rounded-xl"
            />
            <p className="text-sm mt-2">
              Shop for all types of construction material.
            </p>
          </div>
          <div className="flex gap-2">
            <Image
              src="/svg/instagram.svg"
              alt="instagram"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            <Image
              src="/svg/facebook.svg"
              alt="facebook"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            <Image
              src="/svg/twitter.svg"
              alt="twitter"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg">Need help?</h3>
          <p className="font-semibold text-sm">
            Our support team is available 24*7
          </p>
          <div className="mt-8 flex gap-1.5">
            <Image src={"/svg/phone.svg"} alt="phone" width={22} height={22} />
            <span>+91-9999999999</span>
          </div>
          <div className="mt-1 flex gap-1.5">
            <Image src={"/svg/mail.svg"} alt="mail" width={22} height={22} />
            <span>support@constructwise.com</span>
          </div>
        </div>
      </footer>
    </>
  );
};
export default BuyerProductLayout;
const cartGallery = [
  {
    imageUrl: "/product/01.webp",
    name: "Iron Rod",
    itemNumber: 3638,
    price: 62,
  },
  {
    imageUrl: "/product/bricks.jpg",
    name: "Bricks",
    itemNumber: 3639,
    price: 5,
  },
  {
    imageUrl: "/product/cement.jpg",
    name: "Ultratech Cement",
    itemNumber: 3640,
    price: 415,
  },
];
