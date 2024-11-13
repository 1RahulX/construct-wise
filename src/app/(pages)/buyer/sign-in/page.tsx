import InputField from "@/app/components/input-field/input-field"
import BuyerLayout from "@/app/components/layout/header/buyer-layout"
import ThemeButton from "@/app/components/theme-button/theme-button"

const SignIn = () =>{
    return(
        <BuyerLayout>
            <div className="w-full h-[70vh] grid place-items-center">
                <div className="max-w-[450px] w-full bg-white rounded-xl p-6 shadow-xl">
                    <h2 className="font-semibold text-primary-500 text-xl mb-5">Buyer Login</h2>
                    <div className="mb-4">
                        <InputField type="text" placeholder="Enter your email" label="Email" />
                    </div>
                    <div className="mb-5">
                        <InputField type="password" placeholder="Enter your password" label="Password" />
                    </div>
                    <ThemeButton text="LogIn" />
                    <div className="flex justify-between text-xs text-primary-500 mt-2 font-semibold">
                        <p className="cursor-pointer">Create New Account</p>
                        <p className="cursor-pointer">Forgot Password?</p>
                    </div>
                </div>
            </div>
        </BuyerLayout>
    )
}
export default SignIn