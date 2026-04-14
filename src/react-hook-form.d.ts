/* eslint-disable @typescript-eslint/no-unused-vars */
// Type declarations for react-hook-form v7.72.1
// The published package has broken type paths (references ../src/* which doesn't ship).
// This module declaration provides the types used in this project.

declare module "react-hook-form" {
  import type React from "react";

  // ---- Core types ----

  export type FieldValues = Record<string, any>;

  export type FieldPath<TFieldValues extends FieldValues> = string &
    keyof TFieldValues extends never
    ? string
    : string;

  export type FieldPathValue<
    TFieldValues extends FieldValues,
    TFieldPath extends FieldPath<TFieldValues>,
  > = any;

  export type FieldError = {
    type: string;
    message?: string;
    ref?: any;
  };

  export type FieldErrors<TFieldValues extends FieldValues = FieldValues> = Partial<
    Record<keyof TFieldValues, FieldError> & { root?: Record<string, FieldError> }
  >;

  type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
  };

  export type DefaultValues<TFieldValues> = DeepPartial<TFieldValues>;

  export type Mode = "onBlur" | "onChange" | "onSubmit" | "onTouched" | "all";

  export type ChangeHandler = (event: { target: any; type?: any }) => Promise<void | boolean>;

  export type RefCallBack = (instance: any) => void;

  export type Noop = () => void;

  // ---- FormState ----

  export type FormState<TFieldValues extends FieldValues> = {
    isDirty: boolean;
    isLoading: boolean;
    isSubmitted: boolean;
    isSubmitSuccessful: boolean;
    isSubmitting: boolean;
    isValidating: boolean;
    isValid: boolean;
    disabled: boolean;
    submitCount: number;
    defaultValues?: Readonly<DeepPartial<TFieldValues>>;
    dirtyFields: Partial<Record<keyof TFieldValues, boolean>>;
    touchedFields: Partial<Record<keyof TFieldValues, boolean>>;
    validatingFields: Partial<Record<keyof TFieldValues, boolean>>;
    errors: FieldErrors<TFieldValues>;
    isReady: boolean;
  };

  // ---- Register ----

  export type RegisterOptions<
    TFieldValues extends FieldValues = FieldValues,
    TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  > = Partial<{
    required: string | boolean | { value: boolean; message: string };
    min: number | string | { value: number | string; message: string };
    max: number | string | { value: number | string; message: string };
    maxLength: number | { value: number; message: string };
    minLength: number | { value: number; message: string };
    pattern: RegExp | { value: RegExp; message: string };
    validate: any;
    valueAsNumber: boolean;
    valueAsDate: boolean;
    setValueAs: (value: any) => any;
    disabled: boolean;
    onChange: (event: any) => void;
    onBlur: (event: any) => void;
    value: any;
    shouldUnregister: boolean;
    deps: string | string[];
  }>;

  export type UseFormRegisterReturn<TFieldName extends string = string> = {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    ref: RefCallBack;
    name: TFieldName;
    min?: string | number;
    max?: string | number;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    required?: boolean;
    disabled?: boolean;
  };

  export type UseFormRegister<TFieldValues extends FieldValues> = <
    TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  >(
    name: TFieldName,
    options?: RegisterOptions<TFieldValues, TFieldName>,
  ) => UseFormRegisterReturn<TFieldName>;

  // ---- Control ----

  export type Control<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
    TTransformedValues = TFieldValues,
  > = {
    register: UseFormRegister<TFieldValues>;
    handleSubmit: UseFormHandleSubmit<TFieldValues, TTransformedValues>;
    unregister: (name?: any, options?: any) => void;
    getFieldState: UseFormGetFieldState<TFieldValues>;
    setError: (name: any, error: any, options?: any) => void;
    _fields: any;
    _formValues: any;
    _formState: FormState<TFieldValues>;
    _names: any;
    _options: UseFormProps<TFieldValues, TContext, TTransformedValues>;
    _subjects: any;
    _proxyFormState: any;
    _defaultValues: any;
    [key: string]: any;
  };

  // ---- Submit handlers ----

  export type SubmitHandler<T> = (
    data: T,
    event?: React.BaseSyntheticEvent,
  ) => unknown | Promise<unknown>;

  export type SubmitErrorHandler<TFieldValues extends FieldValues> = (
    errors: FieldErrors<TFieldValues>,
    event?: React.BaseSyntheticEvent,
  ) => unknown | Promise<unknown>;

  export type UseFormHandleSubmit<
    TFieldValues extends FieldValues,
    TTransformedValues = TFieldValues,
  > = (
    onValid: SubmitHandler<TTransformedValues>,
    onInvalid?: SubmitErrorHandler<TFieldValues>,
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>;

  // ---- Resolver ----

  export type Resolver<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
    TTransformedValues = TFieldValues,
  > = (
    values: TFieldValues,
    context: TContext | undefined,
    options: any,
  ) => Promise<
    { values: TTransformedValues; errors: {} } | { values: {}; errors: FieldErrors<TFieldValues> }
  >;

  // ---- GetFieldState ----

  export type UseFormGetFieldState<TFieldValues extends FieldValues> = (
    name: FieldPath<TFieldValues>,
    formState?: FormState<TFieldValues>,
  ) => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: FieldError;
  };

  // ---- UseFormProps ----

  export type UseFormProps<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
    TTransformedValues = TFieldValues,
  > = Partial<{
    mode: Mode;
    disabled: boolean;
    reValidateMode: Exclude<Mode, "onTouched" | "all">;
    defaultValues: DefaultValues<TFieldValues> | (() => Promise<TFieldValues>);
    values: TFieldValues;
    errors: FieldErrors<TFieldValues>;
    resolver: Resolver<TFieldValues, TContext, TTransformedValues>;
    context: TContext;
    shouldFocusError: boolean;
    shouldUnregister: boolean;
    shouldUseNativeValidation: boolean;
    progressive: boolean;
    criteriaMode: "firstError" | "all";
    delayError: number;
  }>;

  // ---- UseFormReturn ----

  export type UseFormReturn<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
    TTransformedValues = TFieldValues,
  > = {
    watch: any;
    getValues: any;
    getFieldState: UseFormGetFieldState<TFieldValues>;
    setError: (name: any, error: any, options?: any) => void;
    clearErrors: (name?: any) => void;
    setValue: (name: any, value: any, options?: any) => void;
    trigger: (name?: any, options?: any) => Promise<boolean>;
    formState: FormState<TFieldValues>;
    resetField: (name: any, options?: any) => void;
    reset: (values?: any, keepStateOptions?: any) => void;
    handleSubmit: UseFormHandleSubmit<TFieldValues, TTransformedValues>;
    unregister: (name?: any, options?: any) => void;
    control: Control<TFieldValues, TContext, TTransformedValues>;
    register: UseFormRegister<TFieldValues>;
    setFocus: (name: any, options?: any) => void;
    subscribe: (payload: any) => () => void;
  };

  // ---- UseFormStateReturn ----

  export type UseFormStateReturn<TFieldValues extends FieldValues> = FormState<TFieldValues>;

  // ---- FormProviderProps ----

  export type FormProviderProps<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
    TTransformedValues = TFieldValues,
  > = {
    children: React.ReactNode | React.ReactNode[];
  } & UseFormReturn<TFieldValues, TContext, TTransformedValues>;

  // ---- Controller ----

  export type ControllerFieldState = {
    invalid: boolean;
    isTouched: boolean;
    isDirty: boolean;
    isValidating: boolean;
    error?: FieldError;
  };

  export type ControllerRenderProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  > = {
    onChange: (...event: any[]) => void;
    onBlur: Noop;
    value: any;
    disabled?: boolean;
    name: TName;
    ref: RefCallBack;
  };

  export type ControllerProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
    TTransformedValues = TFieldValues,
  > = {
    render: (props: {
      field: ControllerRenderProps<TFieldValues, TName>;
      fieldState: ControllerFieldState;
      formState: UseFormStateReturn<TFieldValues>;
    }) => React.ReactElement;
    name: TName;
    rules?: Omit<
      RegisterOptions<TFieldValues, TName>,
      "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
    >;
    shouldUnregister?: boolean;
    defaultValue?: any;
    control?: Control<TFieldValues, any, TTransformedValues>;
    disabled?: boolean;
    exact?: boolean;
  };

  // ---- Exported functions ----

  export function useForm<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
    TTransformedValues = TFieldValues,
  >(
    props?: UseFormProps<TFieldValues, TContext, TTransformedValues>,
  ): UseFormReturn<TFieldValues, TContext, TTransformedValues>;

  export const useFormContext: <
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
    TTransformedValues = TFieldValues,
  >() => UseFormReturn<TFieldValues, TContext, TTransformedValues>;

  export const FormProvider: <
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
    TTransformedValues = TFieldValues,
  >(
    props: FormProviderProps<TFieldValues, TContext, TTransformedValues>,
  ) => React.JSX.Element;

  export const Controller: <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
    TTransformedValues = TFieldValues,
  >(
    props: ControllerProps<TFieldValues, TName, TTransformedValues>,
  ) => React.ReactElement;
}
