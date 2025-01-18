

export interface FormControlsType {
    componentType: string;
    name: string;
    placeholder?: string;
    label?: string;
    disabled?: boolean;
}

export interface SignUpFormControlsType {
    name: string
    email: string
    password: string
}

export interface ErrorResponse {
    response?: {
      data?: {
        message?: string
      }
    }
  }