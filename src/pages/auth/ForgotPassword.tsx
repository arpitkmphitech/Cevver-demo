import { useForm } from "react-hook-form";
import { forgotPasswordSchema } from "@/lib/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "@/components/form/FormProvider";
import { useNavigate } from "react-router";
import {
  SMS_ICON,
  FORGOT_PASSWORD_IMAGE,
  FORGOT_PASSWORD_ICON,
  AUTH_FRAME,
} from "@/lib/images";
import TextInput from "@/components/form/TextInput";
import Button from "@/components/custom/Button";
import type { IForgotPassword } from "@/types/auth";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const methods = useForm({
    defaultValues: { email: "" },
    resolver: yupResolver(forgotPasswordSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = (values: IForgotPassword) => {
    console.log(values);
    navigate("/verify-otp");
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
            src={FORGOT_PASSWORD_IMAGE}
            alt="FORGOT_PASSWORD_IMAGE"
            className="w-auto h-auto max-w-full max-h-full object-contain"
          />
        </div>
      </div>
      <div className="flex-1 px-5 sm:px-5 md:px-8 lg:px-10 py-14 flex flex-col justify-center relative">
        <div className="max-w-[475px] space-y-10 w-full mx-auto flex flex-col">
          <div className="flex items-center justify-center">
            <img
              src={FORGOT_PASSWORD_ICON}
              alt="FORGOT_PASSWORD_ICON"
              className="sm:size-[140px] size-[114px]"
            />
          </div>
          <FormProvider
            methods={methods}
            onSubmit={handleSubmit(onSubmit)}
            className="w-full"
          >
            <div className="flex flex-col items-center justify-center w-full">
              <div className="max-w-[328px] text-center space-y-0.5">
                <p className="text-white text-[28px] font-extrabold">
                  Forgot Password?
                </p>
                <p className="text-primary text-base sm:text-lg font-normal">
                  No worries, we'll help you reset your password
                </p>
              </div>
            </div>
            <div className="space-y-4 mt-6">
              <TextInput
                name="email"
                placeholder="Enter email"
                prefix={<img src={SMS_ICON} alt="SMS_ICON" />}
              />
            </div>
            <div className="w-full mt-11 text-center">
              <Button type="submit">SEND</Button>
            </div>
          </FormProvider>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
