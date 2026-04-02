import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormProvider from "@/components/form/FormProvider";
import {
  LOCK_ICON,
  RESET_PASSWORD_IMAGE,
  RESET_PASSWORD_ICON,
  AUTH_FRAME,
} from "@/lib/images";
import { resetPasswordSchema } from "@/lib/schema";
import { useNavigate } from "react-router";
import PasswordField from "@/components/form/PasswordField";
import Button from "@/components/custom/Button";
import type { IResetPassword } from "@/types/auth";

const ResetPassword = () => {
  const navigate = useNavigate();

  const methods = useForm({
    defaultValues: { newPassword: "", confirmPassword: "" },
    resolver: yupResolver(resetPasswordSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = (values: IResetPassword) => {
    console.log("values", values);
    navigate("/login");
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
            src={RESET_PASSWORD_IMAGE}
            alt="RESET_PASSWORD_IMAGE"
            className="w-auto h-auto max-w-full max-h-full object-contain"
          />
        </div>
      </div>
      <div className="flex-1 px-5 sm:px-5 md:px-8 lg:px-10 py-14 flex flex-col justify-center relative">
        <div className="max-w-[475px] space-y-10 w-full mx-auto flex flex-col">
          <div className="flex items-center justify-center">
            <img
              src={RESET_PASSWORD_ICON}
              alt="RESET_PASSWORD_ICON"
              className="sm:size-[140px] size-[144px]"
            />
          </div>
          <FormProvider
            methods={methods}
            onSubmit={handleSubmit(onSubmit)}
            className="w-full"
          >
            <div className="flex flex-col items-center justify-center w-full">
              <div className="max-w-[400px] text-center space-y-0.5">
                <p className="text-white text-[28px] font-extrabold">
                  Reset Password
                </p>
                <p className="text-primary text-base sm:text-lg font-normal mx-auto text-wrap">
                  Create a new password for your account. Make sure it's strong
                  and easy to remember
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <PasswordField
                name="newPassword"
                placeholder="Enter new password"
                prefix={<img src={LOCK_ICON} alt="LOCK_ICON" />}
              />
              <PasswordField
                name="confirmPassword"
                placeholder="Confirm new password"
                prefix={<img src={LOCK_ICON} alt="LOCK_ICON" />}
              />
            </div>
            <div className="w-full mt-11 text-center">
              <Button type="submit">UPDATE</Button>
            </div>
          </FormProvider>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
