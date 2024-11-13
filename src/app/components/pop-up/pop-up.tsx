interface popupProp {
  children?: any;
}
const PopUp = ({ children }: popupProp) => {
  return (
    <div className="backdrop-blur-xl h-screen w-screen fixed top-0 place-content-center">
      <div className="bg-white shadow rounded-xl p-6 max-w-[500px] w-full mx-auto relative">
        {children}
      </div>
    </div>
  );
};
export default PopUp;
