import InputField from "@/app/components/input-field/input-field"
import BuyerLayout from "@/app/components/layout/header/buyer-layout"
import ThemeButton from "@/app/components/theme-button/theme-button"

const SignIn = () =>{
    return(
        <BuyerLayout>
            <div className="w-full h-[70vh] grid place-items-center">
                <div className="max-w-[450px] w-full bg-white rounded-xl p-6 shadow-xl">
                    <h2 className="font-semibold text-primary-500 text-xl mb-5">Seller Login</h2>
                    <div className="mb-4">
                        <InputField type="text" placeholder="Enter your email" label="Email Address" />
                    </div>
                    <div className="mb-5">
                        <InputField type="password" placeholder="Enter your password" label="Password" />
                    </div>
                    <ThemeButton text="LogIn" />
                    <div>
                        <p className="w-fit m-auto text-sm text-tertiary-500 cursor-pointer font-[500] my-4">Forgot Password?</p>
                        <div className="flex justify-between items-center">
                        <p className="w-fit text-sm text-tertiary-500 font-[500] my-4">Don&apos;t have an account?</p>
                        <ThemeButton text="Create Account" className={"!w-fit px-5 !bg-gray-200 !text-primary-500 font-[500]"} />
                        </div>

                    </div>
                </div>
            </div>
        </BuyerLayout>
    )
}
export default SignIn