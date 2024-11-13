import Image from "next/image";
import Link from "next/link";

interface buyerProp {
  children?: any;
}
const BuyerLayout = ({ children }: buyerProp) => {
  return (
    <div>
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
        <div className="text-white tracking-wide text-sm flex gap-8">
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Contact</Link>
        </div>
      </header>
      {children}
      <footer className="bg-primary-500 p-12 text-white flex justify-between">
        <div>
          <Image
            src={"/logo.jpeg"}
            alt="logo"
            width={80}
            height={80}
            className="rounded-md mb-4"
          />
          <p className="text-sm text-[#e5e5e5]">
            Connecting buyers and sellers globally
          </p>
        </div>
        <div>
          <h2 className="mb-6 font-semibold text-lg leading-none">
            Quick Links
          </h2>
          <div className="grid gap-2">
            <Link href={"#"} className="text-[#e5e5e5] text-sm">
              Buyer Login
            </Link>
            <Link href={"#"} className="text-[#e5e5e5] text-sm">
              Seller Login
            </Link>
            <Link href={"#"} className="text-[#e5e5e5] text-sm">
              Order History
            </Link>
          </div>
        </div>
        <div>
          <h2 className="mb-6 font-semibold text-lg leading-none">
            Contact Us
          </h2>
          <div className="grid gap-2">
            <div className="text-sm text-[#e5e5e5]">
              <span>Email: </span>
              <Link href={"#"}>support@constructwise.com</Link>
            </div>
            <div className="text-sm text-[#e5e5e5]">
              <span>Phone: </span>
              <Link href={"#"}>+919999999999</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default BuyerLayout;
