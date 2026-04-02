export interface IAuthWrapper {
  image: string;
  children: React.ReactNode;
  title: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IForgotPassword {
  email: string;
}

export interface IVerifyForgotPassOtp {
  email: string;
  otp: string;
}

export interface IResetPassword {
  email?: string;
  newPassword: string;
  confirmPassword: string;
}
