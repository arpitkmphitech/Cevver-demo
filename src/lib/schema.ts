import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("Please enter email")
    .email()
    .matches(
      /@[^.]*\./,
      'Email must contain "@" and a domain (e.g., example.com)'
    ),

  password: yup.string().required("Please enter password"),
});

const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("Please enter email")
    .email("Please enter valid email")
    .matches(
      /@[^.]*\./,
      'Email must contain "@" and a domain (e.g., example.com)'
    ),
});

const otpSchema = yup.object().shape({
  otp: yup
    .string()
    .required("Please enter OTP")
    .length(4, "OTP must be 4 digits"),
});

const resetPasswordSchema = yup.object().shape({
  newPassword: yup
    .string()
    .required("Please enter new password")
    .min(
      8,
      "New password must be more than 8 characters long including lower case, upper case, number and a special character"
    )
    .matches(
      /[A-Z]/,
      "New password must be more than 8 characters long including lower case, upper case, number and a special character"
    )
    .matches(
      /[a-z]/,
      "New password must be more than 8 characters long including lower case, upper case, number and a special character"
    )
    .matches(
      /[0-9]/,
      "New password must be more than 8 characters long including lower case, upper case, number and a special character"
    )
    .matches(
      /[@$!%*?&#]/,
      "New password must be more than 8 characters long including lower case, upper case, number and a special character"
    ),
  confirmPassword: yup
    .string()
    .required("Please enter confirm password")
    .oneOf(
      [yup.ref("newPassword"), ""],
      "New password and confirm password does not match"
    ),
});

const suspendUserSchema = yup.object().shape({
  date_filter: yup
    .object()
    .shape({
      from: yup.date().required("Start date is required"),
      to: yup.date().required("End date is required"),
    })
    .nullable()
    .required("Please select start and end date"),
});

export {
  loginSchema,
  forgotPasswordSchema,
  otpSchema,
  resetPasswordSchema,
  suspendUserSchema,
};
