import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { otpSchema } from "@/lib/schema";
import FormProvider from "@/components/form/FormProvider";
import OtpFields from "@/components/form/OTPFields";
import { useLocation, useNavigate } from "react-router";
import {
  AUTH_FRAME,
  FORGOT_PASSWORD_ICON,
  VERIFY_OTP_IMAGE,
} from "@/lib/images";
import Button from "@/components/custom/Button";
import type { IVerifyForgotPassOtp } from "@/types/auth";

const VerifyOTP = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const methods = useForm({
    defaultValues: { otp: "" },
    resolver: yupResolver(otpSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = (values: IVerifyForgotPassOtp) => {
    console.log(values);
    navigate("/reset-password");
  };

  const handleResend = () => {
    console.log("resend");
    alert("Resend");
  };

  return (
    <section className="h-dvh max-h-dvh flex flex-col md:flex-row overflow-hidden">
      <div className="relative flex-1 p-5 max-md:hidden bg-light rounded-[48px] overflow-hidden">
        <img
          src={AUTH_FRAME}
          alt="AUTH_FRAME"
          className="w-full h-full max-h-dvh"
        />
        <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-10 md:p-12">
          <img
            src={VERIFY_OTP_IMAGE}
            alt="VERIFY_OTP_IMAGE"
            className="w-auto h-auto max-w-full max-h-full object-contain"
          />
        </div>
      </div>
      <div className="flex-1 px-5 sm:px-5 md:px-8 lg:px-10 py-14 flex flex-col justify-center relative">
        <div className="max-w-[475px]  space-y-10 w-full mx-auto flex flex-col">
          <div className="flex items-center justify-center">
            <img
              src={FORGOT_PASSWORD_ICON}
              alt="VERIFY_OTP_ICON"
              className="sm:size-[140px] size-[114px]"
            />
          </div>
          <FormProvider
            methods={methods}
            onSubmit={handleSubmit((values) =>
              onSubmit({ ...values, email: state?.email })
            )}
            className="w-full"
          >
            <div className="flex flex-col items-center justify-center w-full">
              <div className="max-w-[328px] text-center space-y-0.5">
                <p className="text-white text-[28px] font-extrabold">
                  Authentication
                </p>
                <p className="text-primary text-base sm:text-lg font-normal  mx-auto text-wrap">
                  Enter the verification code sent to your email
                </p>
              </div>
            </div>
            <div className=" flex justify-center mt-8 w-full">
              <div>
                <OtpFields name="otp" />
              </div>
            </div>
            <div className="w-full mt-11 text-center">
              <Button type="submit">VERIFY</Button>
            </div>
            <p className="text-primary text-base font-medium text-center mt-10">
              Didn't receive a code?{" "}
              <span
                onClick={handleResend}
                className="cursor-pointer text-white [text-shadow:0_0_1.5px_#FFD600]"
              >
                Resend
              </span>
            </p>
          </FormProvider>
        </div>
      </div>
    </section>
  );
};

export default VerifyOTP;
