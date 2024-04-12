'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { FormInput } from '@/components/ui/FormInput/FormInput';
import { CheckBox } from '@/components/ui/Checkbox/Checkbox';
import { Loader } from '@/components/ui/Loader/Loader';
import { Button } from '@/components/ui/Button';
import { ModalSuccess } from '@/components/ui/ModalSuccess';
import { ModalError } from '@/components/ui/ModalError';

import { FormData } from './types';

import form from '@/data/form.json';

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);

  useFormPersist('FormData', {
    watch,
    setValue,
    exclude: ['checkbox'],
  });

  const checkboxInput = watch(form.checkBox.name);

  const onSubmit: SubmitHandler<FormData> = data => {
    try {
      setIsLoading(true);
      console.log("Ім'я:", data.name);
      console.log('Телефон:', data.phone);

      reset();
      window.sessionStorage.removeItem('FormData');
      setShowSuccessModal(true);
    } catch (error) {
      setShowErrorModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  const onClickCloseModal = () => {
    setShowSuccessModal(false);
    setShowErrorModal(false);
  };

  return (
    <>
      <form
        className="mx-auto flex flex-col md:max-w-[450px] xl:max-w-[517px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="mb-5 text-center font-raleway text-lg font-semibold uppercase leading-[1.35] md:mb-6 md:text-xl xl:text-[20px]">
          {form.formTitle}
        </h3>
        {form.inputs.map(item => (
          <FormInput
            key={item.name.label}
            textarea={item.name.textarea}
            config={item.name}
            register={register}
            errors={errors}
          />
        ))}
        <CheckBox
          register={register}
          errors={errors}
          checkboxInput={checkboxInput}
        />
        <Button type="submit" className="mt-6 md:mx-auto md:mt-8">
          {isLoading ? <Loader /> : form.buttonText}
        </Button>
      </form>
      {showSuccessModal && (
        <ModalSuccess
          isModalSuccessOpen={showSuccessModal}
          onClickCloseModal={onClickCloseModal}
        />
      )}
      {showErrorModal && (
        <ModalError
          isModalErrorOpen={showErrorModal}
          onClickCloseModal={onClickCloseModal}
        />
      )}
    </>
  );
};
