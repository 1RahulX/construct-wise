import InputField from "@/app/components/input-field/input-field"
import ThemeButton from "@/app/components/theme-button/theme-button"
import Image from "next/image"

const SignUp = () =>{
    return(
        <div className="w-full h-[100vh] grid place-items-center relative">
                <div className="max-w-[600px] w-full bg-white rounded-xl p-12 shadow-xl z-[9] bg-[#dad8d8] relative">
                    <Image src={"/logo.jpeg"} alt="logo" width={120} height={120} className="m-auto mb-4" />
                    <div className="mb-4">
                        <InputField type="text" placeholder="Enter your email" label="Email Address" className="!bg-[#e5e5e5]" />
                    </div>
                    <div className="mb-5">
                        <InputField type="password" placeholder="Enter your password" label="Password" className="!bg-[#e5e5e5]" />
                    </div>
                    <ThemeButton text="Sign Up" />
                    <div className="my-6 flex items-center">
                        <p className="h-[1px] bg-[#dad8d8] w-full"></p>
                        <span className="mt-[-4px] px-1 text-sm font-semibold">or</span>
                        <p className="h-[1px] bg-[#dad8d8] w-full"></p>
                    </div>
                    <ThemeButton text="Join Now" />
                    <Image src={"/png/man.png"} alt="man" width={140} height={140} className="absolute right-[-170px] bottom-0" />
                </div>
                <div className="absolute top-[-150px] left-[-150px] max-w-[800px] w-full max-h-[800px] h-full bg-[#dad8d8] rounded-[100%]"></div>
            </div>
    )
}
export default SignUp