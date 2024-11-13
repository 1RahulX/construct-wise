import CardLayout from "@/app/components/card-view/card-view";
import OrderGraph from "@/app/components/chart/chart";
import InputField from "@/app/components/input-field/input-field";
import MessageProfile from "@/app/components/seller/dashboard/message-profile/message-profile";
import DashboardSidebar from "@/app/components/seller/dashboard/sidebar/sidebar";
import ViewsCard from "@/app/components/seller/views-card/views-card";
import ThemeButton from "@/app/components/theme-button/theme-button";
import Image from "next/image";

const Dashboard = () => {
    const monthlyData = [50, 60, 70, 80, 90, 100, 110, 95, 85, 75, 65, 55];
  return (
    <div className="max-w-[1550px] w-full m-auto flex">
      <div>
        <DashboardSidebar />
      </div>
      <div className="pb-6 px-4 w-full">
        <div className="flex sticky top-0 bg-[#f7f7f7] py-4 z-[9]">
          <div className="flex gap-4 w-full">
            <div className="max-w-[750px] w-full">
              <InputField
                type="text"
                placeholder="Search for products"
                className="!py-2 mt-0"
                labelClass={"mb-0"}
              />
            </div>
            <ThemeButton
              text="Add to Cart"
              className={
                "!bg-secondary-500 whitespace-nowrap !text-primary-500 font-semibold mt-1"
              }
            />
          </div>
          <div className="flex gap-6 items-center">
            <div className="flex-none">
              <Image
                src={"/svg/message.svg"}
                alt="message"
                width={20}
                height={20}
              />
            </div>
            <div className="flex-none">
              <Image
                src={"/svg/notification.svg"}
                alt="notification"
                width={22}
                height={22}
              />
            </div>
            <div>
              <Image
                src={"/user-new.jpg"}
                alt="user"
                className="rounded-full"
                width={60}
                height={60}
              />
            </div>
          </div>
        </div>
        <h2 className="font-bold text-4xl my-4">Dashboard</h2>
        <div className="flex gap-8">
          {/* dashboard left part start */}
          <div className="max-w-[750px] w-full">
            <div className="px-4 py-8 rounded-xl bg-secondary-500 mb-6">
              <h3 className="font-bold text-lg mb-4">Overview</h3>
              <div className="flex gap-4 items-center">
                <div className="p-4 rounded-xl bg-primary-500 w-fit">
                  <Image
                    src={"/svg/sales-card.svg"}
                    alt="sales"
                    width={36}
                    height={36}
                  />
                </div>
                <div>
                  <p className="font-semibold text-sm">Sales</p>
                  <h4 className="text-4xl font-bold">₹9,876.33</h4>
                </div>
              </div>
            </div>
            <CardLayout className={"mb-6"}>
            <div>
                <div className="flex justify-between">
              <h3 className="font-bold text-lg mb-4">Product View</h3>
              <p className="text-sm font-semibold">Search for orders</p>
              </div>
                <OrderGraph monthlyData={monthlyData} />
            </div>
            </CardLayout>
            <div className="px-4 py-6 rounded-xl bg-secondary-500 mb-6">
              <h3 className="font-bold text-lg mb-4">Top 3 Categories</h3>
              <div>
                <div className="grid grid-cols-3 gap-1 bg-primary-500 rounded-2xl p-2 font-semibold text-center">
                  {categoriesTab?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={`rounded-xl p-2 ${
                          item?.tabName === "Iron Rod"
                            ? "bg-white text-primary"
                            : "text-white"
                        }`}
                      >
                        {item?.tabName}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4">
                  <h3 className="font-bold border-b-2 border-[#c1c1c1] pb-2 mb-4">
                    Iron Rod
                  </h3>
                  <div className="border-b-2 pb-4 border-[#c1c1c1]">
                    {categoryArray?.map((item, index) => {
                      return (
                        <div className="flex justify-between py-2" key={index}>
                          <div className="flex gap-2 items-center">
                            <div>
                              <Image
                                src={item?.imageUrl}
                                alt="image"
                                width={50}
                                height={50}
                                className="rounded-md w-[50px] h-[50px] object-cover"
                              />
                            </div>
                            <span className="font-semibold">
                              Product name - {item?.name}
                            </span>
                          </div>
                          <div>
                            <p className="font-bold mb-1">
                              Price: ₹{item?.price}/{item?.unit}
                            </p>
                            <ThemeButton
                              text="Add to cart"
                              className={"!py-[5px] font-semibold"}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <ThemeButton
                    text="View all categories"
                    className={"font-semibold mt-6"}
                  />
                </div>
              </div>
            </div>
            <div className="mb-6">
              <CardLayout>
                <div className="flex justify-between">
                  <h3 className="font-bold text-lg mb-4">Best sellers</h3>
                  <select
                    name="duration"
                    id="duration"
                    className="rounded-md p-1 h-fit bg-gray-200"
                  >
                    <option value="week">Last 1 week</option>
                    <option value="three">Last 3 months</option>
                    <option value="six">Last 6 months</option>
                  </select>
                </div>
                <div className="overflow-hidden max-w-[700px]">
                  <div
                    className="mt-8 flex gap-4 overflow-x-auto w-full"
                    style={{ scrollbarWidth: "none" }}
                  >
                    {allProductCollection?.map((item, index) => {
                      return (
                        <ViewsCard
                          productImage={item?.productImage}
                          alt={item?.alt}
                          price={item?.price}
                          key={index}
                          unit={item?.unit}
                          productName={item?.productName}
                        />
                      );
                    })}
                  </div>
                </div>
              </CardLayout>
            </div>
            <CardLayout>
              <h3 className="font-bold text-lg mb-4">Grow your sales!</h3>
              <p className="font-semibold">
                Maximize your sales with ConstructWise powerful tools.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-10">
                <ThemeButton
                  text="Connect with buyers"
                  className={"font-semibold !py-2 !rounded-xl"}
                ></ThemeButton>
                <ThemeButton
                  text="Advertise your products"
                  className={"font-semibold !py-2 !rounded-xl"}
                ></ThemeButton>
                <ThemeButton
                  text="Improve your store"
                  className={"font-semibold !py-2 !rounded-xl"}
                ></ThemeButton>
              </div>
            </CardLayout>
          </div>
          {/* dashboard left part end */}
          {/* dashboard right part start */}
          <div className="w-full">
            <div className="grid grid-cols-2 gap-4 h-fit">
              {countArray?.map((item, index) => {
                return (
                  <CardLayout key={index}>
                    <div className="w-[40px] h-[40px] rounded-2xl bg-primary-500 flex place-items-center mx-auto justify-center">
                      <Image
                        src={item?.imageUrl}
                        alt="image"
                        width={24}
                        height={24}
                      />
                    </div>
                    <p className="font-semibold text-primary-500 text-center mt-1 mb-2">
                      {item?.name}
                    </p>
                    <p className="text-center">
                      <b className="text-3xl">₹{item?.amount}</b>
                    </p>
                  </CardLayout>
                );
              })}
            </div>
            <div className="mt-6">
              <CardLayout className="px-8">
                <h3 className="font-bold text-lg mb-4">Messages</h3>
                {profileArray?.map((value, index) => {
                  return (
                    <div
                      key={index}
                      className="border-b-2 border-[#c1c1c1] py-4"
                    >
                      <MessageProfile
                        imageUrl={value?.imageUrl}
                        price={value?.price}
                        name={value?.name}
                        comment={value?.comment}
                        duration={value?.duration}
                      />
                    </div>
                  );
                })}
                <ThemeButton text="View all products" className={"mt-6 font-semibold"} />
              </CardLayout>
            </div>
            <div className="mt-6">
                <CardLayout className={"px-8"}>
                    <h3 className="font-bold text-lg mb-4">Messages</h3>
                    <div className="flex gap-2">
                        <div className="p-3 flex-none rounded-xl bg-primary-500 w-fit">
                            <Image src={"/svg/cart-white.svg"} alt="cart" width={24} height={24} />
                        </div>
                        <p className="text-sm font-semibold">You have 5 open orders. 2 of them have been shipped.</p>
                    </div>
                    <ThemeButton text="View all orders" className={"mt-6"} />
                </CardLayout>
            </div>
            <div className="mt-6">
                <CardLayout>
                <h3 className="font-bold text-lg mb-4">Popular suggestions</h3>
                <p className="font-semibold">Need some ideas for your next purchase?</p>
                </CardLayout>
            </div>
          </div>
          {/* dashboard right part end */}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
const categoriesTab = [
  {
    tabName: "Iron Rod",
  },
  {
    tabName: "Bricks",
  },
  {
    tabName: "Cement",
  },
];
const categoryArray = [
  {
    imageUrl: "/product/01.webp",
    name: "Iron rod",
    price: 62,
    unit: "kg",
  },
  {
    imageUrl: "/product/02.webp",
    name: "Iron rod",
    price: 64,
    unit: "kg",
  },
  {
    imageUrl: "/product/03.webp",
    name: "Iron rod",
    price: 63,
    unit: "kg",
  },
  {
    imageUrl: "/product/04.jpg",
    name: "Iron rod",
    price: 62,
    unit: "kg",
  },
];
const allProductCollection = [
  {
    productImage: "/product/01.webp",
    alt: "iron-rod",
    productName: "Iron rod",
    price: 65,
    unit: "kg",
  },
  {
    productImage: "/product/bricks.jpg",
    alt: "bricks",
    productName: "Premium bricks",
    price: 6,
    unit: "pc",
  },
  {
    productImage: "/product/cladding.jpg",
    alt: "bricl",
    productName: "Red Brick Cladding",
    price: 145,
    unit: "sq. ft.",
  },
  {
    productImage: "/product/cement.jpg",
    alt: "cement",
    productName: "UltraTech cement",
    price: 398,
    unit: "bag",
  },
  {
    productImage: "/product/acc.jpg",
    alt: "cement",
    productName: "ACC cement",
    price: 435,
    unit: "bag",
  },
  {
    productImage: "/product/wire-cut.jpg",
    alt: "brick",
    productName: "Wire-cut bricks",
    price: 12,
    unit: "pc",
  },
  {
    productImage: "/product/06.webp",
    alt: "iron-rod",
    productName: "Iron rod",
    price: 64,
    unit: "kg",
  },
  {
    productImage: "/product/06.webp",
    alt: "iron-rod",
    productName: "Iron rod",
    price: 64,
    unit: "kg",
  },
];
const countArray = [
  {
    imageUrl: "/svg/transaction.svg",
    name: "Transactions",
    amount: 20850,
  },
  {
    imageUrl: "/svg/income.svg",
    name: "Income",
    amount: 20850,
  },
  {
    imageUrl: "/svg/expenses.svg",
    name: "Expenses",
    amount: 20850,
  },
  {
    imageUrl: "/svg/sales-white.svg",
    name: "Sales",
    amount: 20850,
  },
];
const profileArray = [
  {
    imageUrl: "/user-new.jpg",
    name: "Sofia Roberts",
    duration: "1h",
    price: 3600,
    comment: "Great profuct!",
  },
  {
    imageUrl: "/user-new.jpg",
    name: "John Doe",
    duration: "2h",
    price: 3600,
    comment: "I love it!",
  },
  {
    imageUrl: "/user-new.jpg",
    name: "Jane Smith",
    duration: "3h",
    price: 3600,
    comment: "Great profuct!",
  },
];
