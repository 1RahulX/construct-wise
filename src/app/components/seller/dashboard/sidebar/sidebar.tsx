import Image from "next/image";

const DashboardSidebar = () => {
  return (
    <div className="w-[290px] h-screen bg-secondary-500 py-6 px-4 relative sticky top-0">
        <Image src={"/logo.jpeg"} alt="logo" width={130} height={60} className="w-[130px] h-[80px] rounded-md mb-6" />
      <div className="grid gap-2">
        {sidebarMenu?.map((item, index) => {
          return (
            <div key={index} className={``}>
              <div
                className={`flex gap-2 px-2 py-2.5 cursor-pointer justify-between ${
                  item?.menu === "Home"
                    ? "bg-primary-500 rounded-xl text-white"
                    : ""
                }`}
              >
                <div className="flex gap-2">
                <Image
                  src={item?.imageUrl}
                  alt="image"
                  width={18}
                  height={18}
                />
                <span className="font-semibold">{item?.menu}</span>
                </div>
                {item?.menu!=="Home" &&
                <Image src={"/svg/arrow-up.svg"} alt="arrow" width={20} height={20} />
                }
              </div>
              {item?.submenu !== null ? <div className="pl-[33px] grid gap-2 mt-2">
                {item?.submenu?.map((value,ind)=>{
                    return(
                        <div key={ind} className="font-semibold">{value?.list}</div>
                    )
                })}
              </div> : ""}
            </div>
          );
        })}
      </div>
        <div className="absolute bottom-12 flex gap-2 cursor-pointer">
            <Image src={"/svg/help.svg"} alt="help" width={22} height={220} />
            <span className="font-semibold">Help & Support</span>
        </div>
    </div>
  );
};
export default DashboardSidebar;
const sidebarMenu = [
  {
    imageUrl: "/svg/home-white.svg",
    menu: "Home",
    submenu: null,
  },
  {
    imageUrl: "/svg/product.svg",
    menu: "Products",
    submenu: [
      {
        list: "Overview",
      },
      {
        list: "Orders",
      },
      {
        list: "Scheduled",
      },
      {
        list: "Messages",
      },
    ],
  },
  {
    imageUrl: "/svg/sales.svg",
    menu: "Sales",
    submenu: [
      {
        list: "Dashboard",
      },
      {
        list: "Refunds",
      },
      {
        list: "Statements",
      },
    ],
  },
];
