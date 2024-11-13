import Image from "next/image";
import InputField from "../../input-field/input-field";
import Link from "next/link";

interface sellerLayoutProp {
  children?: any;
}
const SellerLayout = ({ children }: sellerLayoutProp) => {
  return (
    <>
      <header className="bg-primary-500 py-4 px-8 flex justify-between items-center sticky top-0 z-[9]">
        <div>
          <Image
            src={"/logo.jpeg"}
            alt="logo"
            width={60}
            height={60}
            className="rounded-md m"
          />
        </div>
        <div className="flex gap-4 items-center">
            <InputField placeholder="Search Orders" className="rounded-xl" />
            <div>
            <Image src={"/user-new.jpg"} alt="user" width={36} height={36} className="rounded-full" />
            </div>
        </div>
      </header>
      {children}
      <footer className="py-8 px-16 bg-primary-500 text-white grid grid-cols-3 gap-2">
        <div>
            <h3 className="font-bold text-2xl mb-4">Contact Us</h3>
            <p>
                <span>Email: </span>
                <Link href="#" className="font-semibold">support@constructwise.com</Link>
            </p>
            <p>
                <span>Phone: </span>
                <Link href="tel:+919999999999" className="font-semibold">+91-9999999999</Link>
            </p>
        </div>
        <div>
            <h3 className="font-bold text-2xl mb-4">Support</h3>
            <p>
                <Link href={"#"}>FAQs </Link>
            </p>
            <p>
                <Link href={"#"}>Help Center</Link>
            </p>
        </div>
        <div className="flex gap-4">
            <Image src={"/svg/facebook.svg"} alt="facebook" width={26} height={26} />
            <Image src={"/svg/twitter.svg"} alt="twitter" width={22} height={22} />
            <Image src={"/svg/instagram.svg"} alt="instagram" width={24} height={24} />
        </div>
      </footer>
    </>
  );
};
export default SellerLayout;
