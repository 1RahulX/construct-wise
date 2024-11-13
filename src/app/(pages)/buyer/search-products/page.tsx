import BuyerProductLayout from "@/app/components/layout/header/buyer-product-layout";
import ProductCard from "@/app/components/product-card/product-card";
import Image from "next/image";

const SearchProducts = () => {
  return (
    <BuyerProductLayout>
      <div className="py-8 px-16 bg-secondary-500">
        <div className="flex gap-1">
          <Image
            src={"/svg/back.svg"}
            alt="back"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <span className="text-sm text-primary-500 font-[500]">
            All Products
          </span>
        </div>
        <div className="mt-8 flex justify-between">
          <div className="flex gap-4">
            <div className="p-3 bg-primary-500 rounded-full w-fit h-fit">
              <Image src="/svg/bag.svg" alt="bag" width={46} height={46} />
            </div>
            <div className="text-primary-500 max-w-[300px] w-full grid">
              <div className="flex justify-between">
                <p className="font-bold">Construct Wise</p>
                <div className="flex gap-4">
                  <div className="bg-primary-500 px-2 py-1 rounded-lg w-fit flex gap-2 h-fit">
                    <Image
                      src={"/svg/star.svg"}
                      alt="star"
                      width={14}
                      height={14}
                      className="h-fit"
                    />
                    <span className="text-white text-xs h-fit">4.5</span>
                  </div>
                  <div className="bg-primary-500 px-2 py-1 rounded-lg w-fit h-fit">
                    <Image
                      src={"/svg/heart-fill.svg"}
                      alt="like"
                      width={16}
                      height={16}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-2">
                <div className="flex gap-1">
                  <div>
                    <Image
                      src={"/svg/bag-min.svg"}
                      alt="bag"
                      width={20}
                      height={20}
                    />
                  </div>
                  <span className="font-semibold text-sm">Min.</span>
                </div>
                <div className="flex gap-1">
                  <div>
                    <Image
                      src={"/svg/badge.svg"}
                      alt="badge"
                      width={20}
                      height={20}
                    />
                  </div>
                  <span className="font-semibold text-sm">50</span>
                </div>
                <div className="flex gap-1">
                  <div>
                    <Image
                      src={"/svg/delivery.svg"}
                      alt="delivery"
                      width={20}
                      height={20}
                    />
                  </div>
                  <span className="font-semibold text-sm">50</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary-500 p-2 w-fit rounded-md flex gap-2 max-w-[300px] items-center">
            <div className="flex-none">
              <Image
                src={"/png/offer.png"}
                alt="offer"
                width={60}
                height={60}
              />
            </div>
            <p className="text-white text-xs font-semibold">
              On all products after 6 PM every day!
            </p>
            <Image
              src={"/image.jpg"}
              alt="image"
              width={60}
              height={60}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="py-8 px-16">
        <div className="flex justify-between">
          <div>
            <div className="font-bold text-xl mb-2 flex items-center">
              Search result for:
              <div className="flex items-center">
                <span className="ml-4 font-semibold text-[16px] leading-none">
                  Iron rods
                </span>
                <Image
                  src={"/svg/close.svg"}
                  alt="close"
                  width={16}
                  height={16}
                  className="cursor-pointer mt-1"
                />
              </div>
            </div>
            <div className="text-secondary-600 text-sm font-semibold">
              Showing 6 results
            </div>
          </div>
          <div className="flex gap-2 h-fit">
            <Image
              src={"/svg/filter.svg"}
              alt="filter"
              width={26}
              height={26}
              className="p-1.5 cursor-pointer rounded-md bg-secondary-500 flex-none"
            />
            <div className="bg-secondary-500 px-2 py-1 rounded-md font-semibold text-sm w-fit">
              <span> Sort by:</span>
              <select
                name="sort"
                id="sort"
                className="border-0 outline-0 bg-transparent"
              >
                <option value="most">Most Popular</option>
                <option value="most">Most Popular</option>
                <option value="most">Most Popular</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-8 flex gap-4 overflow-x-auto" style={{scrollbarWidth:"none"}}>
          {productCollection?.map((item, index) => {
            return (
              <ProductCard
                key={index}
                productName={item?.productName}
                productImage={item?.productImage}
                alt={item?.alt}
                price={item?.price}
                unit={item?.unit}
              />
            );
          })}
        </div>
        <div className="mt-12">
            <div className="text-primary-500 text-lg font-bold">
              You might also like
            </div>
            <div className="mt-8 flex gap-4 overflow-x-auto" style={{scrollbarWidth:"none"}}>
            {allProductCollection?.map((item, index) => {
            return (
              <ProductCard
                key={index}
                productName={item?.productName}
                productImage={item?.productImage}
                alt={item?.alt}
                price={item?.price}
                unit={item?.unit}
              />
            );
          })}
          </div>
        </div>
      </div>
        <div className="py-8 px-16 bg-secondary-500 flex justify-between items-center">
            <div className="text-primary-500">
                <h3 className="font-bold text-3xl mb-4">Download the ConstructWise app and start <br /> shopping..!!</h3>
                <p className="text-sm font-semibold">This app is now available for both buyers and sellers.</p>
                <div className="flex gap-4 mt-6">
                    <div>
                        <button className="bg-primary-500 flex text-white p-2 rounded-xl items-center gap-2">
                            <p>
                                <Image src={"/svg/apple.svg"} alt="apple" width={24} height={24} />
                            </p>
                            <p className="text-xs">
                                <span className="font-semibold">Download from</span> <br />
                                <span className="text-left font-bold">App Strore</span>
                            </p>
                        </button>
                    </div>
                    <div>
                        <button className="bg-primary-500 flex text-white p-2 rounded-xl items-center gap-2">
                            <p>
                                <Image src={"/svg/play-store.svg"} alt="play-store" width={24} height={24} />
                            </p>
                            <p className="text-xs">
                                <span className="font-semibold">Download from</span> <br />
                                <span className="text-left font-bold">Google Play</span>
                            </p>
                        </button>
                    </div>
                    <div>
                        <button className="bg-primary-500 flex text-white p-2 rounded-xl items-center gap-2">
                            <p>
                                <Image src={"/logo.jpeg"} alt="apple" width={24} height={24} className="rounded-sm" />
                            </p>
                            <p className="text-xs">
                                <span className="font-semibold">Download from</span> <br />
                                <span className="text-left font-bold">ConstructWise</span>
                            </p>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <Image src={"/download.avif"} alt="download" width={600} height={300} className="rounded-xl" />
            </div>
        </div>
    </BuyerProductLayout>
  );
};
export default SearchProducts;
const productCollection = [
  {
    productImage: "/product/01.webp",
    alt: "iron-rod",
    productName: "Iron rod",
    price: 65,
    unit: "kg",
  },
  {
    productImage: "/product/02.webp",
    alt: "iron-rod",
    productName: "Iron rod",
    price: 64.5,
    unit: "kg",
  },
  {
    productImage: "/product/03.webp",
    alt: "iron-rod",
    productName: "Iron rod",
    price: 63,
    unit: "kg",
  },
  {
    productImage: "/product/04.jpg",
    alt: "iron-rod",
    productName: "Iron rod",
    price: 66,
    unit: "kg",
  },
  {
    productImage: "/product/05.webp",
    alt: "iron-rod",
    productName: "Iron rod",
    price: 62,
    unit: "kg",
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
  {
    productImage: "/product/06.webp",
    alt: "iron-rod",
    productName: "Iron rod",
    price: 64,
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
