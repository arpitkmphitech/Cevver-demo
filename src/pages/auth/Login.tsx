import { useForm } from "react-hook-form";
import FormProvider from "@/components/form/FormProvider";
import { Link, useNavigate } from "react-router";
import { loginSchema } from "@/lib/schema";
import Button from "@/components/custom/Button";
import type { ILogin } from "@/types/auth";
import {
  LOGIN_ICON,
  LOGIN,
  AUTH_FRAME,
  SMS_ICON,
  LOCK_ICON,
} from "@/lib/images";
import TextInput from "@/components/form/TextInput";
import PasswordField from "@/components/form/PasswordField";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
  const navigate = useNavigate();
  const methods = useForm({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(loginSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = (values: ILogin) => {
    console.log("values", values);
    navigate("/dashboard");
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
            src={LOGIN}
            alt="LOGIN"
            className="w-auto h-auto max-w-full max-h-full object-contain"
          />
        </div>
      </div>

      <div className=" flex-1 px-5 sm:px-5 md:px-8 lg:px-10 py-14 flex items-center relative">
        <div className="max-w-[475px] space-y-8 sm:space-y-10 w-full mx-auto flex flex-col">
          <div className="flex items-center justify-center">
            <img
              src={LOGIN_ICON}
              alt="LOGIN_ICON"
              className="sm:size-[140px] size-[114px]"
            />
          </div>
          <FormProvider
            methods={methods}
            onSubmit={handleSubmit(onSubmit)}
            className="w-full"
          >
            <div className="text-center space-y-0.5">
              <p className="text-white text-[28px] font-extrabold">Welcome!</p>
              <p className="text-primary text-2xl sm:text-lg font-normal">
                Please sign in to continue
              </p>
            </div>
            <div className="space-y-4 mt-6">
              <TextInput
                name="email"
                placeholder="Enter email"
                prefix={<img src={SMS_ICON} alt="SMS_ICON" />}
              />
              <PasswordField
                name="password"
                placeholder="Enter password"
                prefix={<img src={LOCK_ICON} alt="LOCK_ICON" />}
              />
            </div>
            <div className="flex justify-end mt-4">
              <Link
                to="/forgot-password"
                className="text-primary font-normal text-placeholder"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="w-full mt-11 text-center">
              <Button type="submit">SIGN IN</Button>
            </div>
          </FormProvider>
        </div>
      </div>
    </section>
  );
};

export default Login;
