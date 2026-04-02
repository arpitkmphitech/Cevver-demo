export interface ITextField {
  name: string;
  placeholder?: string;
  textarea?: boolean;
  numeric?: boolean;
  label?: string;
  description?: string;
  className?: string;
  prefix?: React.ReactNode | null;
  postfix?: React.ReactNode | null;
  type?: string;
  disabled?: boolean;
  maxLength?: number;
  labelClassName?: string;
  required?: boolean;
}

export interface IFieldError {
  message: string;
  type: string;
}

export interface IFormProvider {
  children: React.ReactNode;
  onSubmit: (data: any) => void;
  methods: UseFormReturn<any>;
  className?: string;
}
