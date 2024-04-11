import React from 'react';
import Image from 'next/image';

import classNames from 'classnames';

import { FormInputProps } from './types';

export const FormInput: React.FC<FormInputProps> = ({
  textarea,
  config,
  errors,
  register,
}) => {
  const { name, label, placeholder, validation } = config;
  const isRequired = validation?.required;
  const isError = errors?.[name];

  return (
    <>
      <label
        htmlFor={name}
        className="mb-2 font-roboto text-base font-normal leading-[1.35] md:text-sm xl:text-base"
      >
        {label} {isRequired?.value && '*'}
      </label>
      {textarea ? (
        <textarea
          id={name}
          placeholder={placeholder}
          {...register(name, {
            ...validation,
            required: isRequired,
            pattern: {
              value: validation?.pattern
                ? new RegExp(validation.pattern.value)
                : new RegExp(''),
              message: validation?.pattern ? validation?.pattern?.message : '',
            },
          })}
          className="mb-4 h-[176px] resize-none rounded-xl border-[1px] border-solid border-strokeForm px-4 py-4 font-roboto text-base font-normal leading-[1.35] outline-none placeholder:text-strokeForm md:px-6"
        />
      ) : (
        <input
          aria-required="true"
          aria-invalid={isError ? 'true' : 'false'}
          aria-describedby={isError ? 'errorName' : undefined}
          id={name}
          {...register(name, {
            ...validation,
            required: isRequired,
            minLength: {
              value: validation?.minLength ? validation?.minLength?.value : 13,
              message: validation?.minLength
                ? validation?.minLength?.message
                : '',
            },
            maxLength: {
              value: validation?.maxLength ? validation?.maxLength?.value : 15,
              message: validation?.maxLength
                ? validation?.maxLength?.message
                : '',
            },
            pattern: {
              value: validation?.pattern
                ? new RegExp(validation.pattern.value)
                : new RegExp(''),
              message: validation?.pattern ? validation?.pattern?.message : '',
            },
          })}
          placeholder={placeholder}
          className={classNames(
            'relative rounded-xl border-[1px] border-solid  px-4 py-4 font-roboto text-base font-normal leading-[1.35] outline-none placeholder:text-strokeForm md:px-6',
            isError && (name === 'name' || name === 'phone')
              ? 'border-mainRed focus:border-mainRed'
              : 'border-strokeForm',
            isError && (name === 'name' || name === 'phone')
              ? 'mb-0'
              : 'mb-[42px]',
          )}
        />
      )}
      {isError && (name === 'name' || name === 'phone') && (
        <div className="relative mb-[18px] ">
          <span
            id={`errorName${name}`}
            className="text-left font-roboto text-sm leading-[1.35] "
          >
            {isError.message}

            <Image
              src="/icons/inputError.svg"
              alt="error icon"
              width={24}
              height={24}
              className="absolute right-[18px] top-[43px] z-10 md:top-[44px] xl:top-[-40px]"
            />
          </span>
        </div>
      )}
    </>
  );
};
