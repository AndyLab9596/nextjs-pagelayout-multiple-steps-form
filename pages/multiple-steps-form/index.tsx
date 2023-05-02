import React, { ReactElement, Suspense, lazy, useEffect } from 'react'
import { NextPageWithLayout } from '../_app';
import MultipleStepsFormLayout from '@/layouts/MultipleStepsFormLayout';
import { FormProvider, useForm } from 'react-hook-form';
import { useStepsForm } from '@/zustand-store/stepsForm';
import { useFormInfo } from '@/zustand-store/formInfo';

const MultipleStepsFormPage: NextPageWithLayout = () => {
    const nextStepAction = useStepsForm(state => state.nextStep);
    const currentStep = useStepsForm(state => state.currentStep);
    const finishStep1 = useFormInfo(state => state.finishStep1);
    const finishStep2 = useFormInfo(state => state.finishStep2);

    const methods = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            company: '',
            occupation: '',
            category: '',
        }
    });


    const handleNextStep = async () => {
        if (currentStep === 0) {
            const isStep1Valid = await methods.trigger(['firstName', 'lastName']);
            if (isStep1Valid) {
                finishStep1({
                    firstName: methods.getValues('firstName'),
                    lastName: methods.getValues('lastName'),
                })
                nextStepAction();
                return;
            };
        }

        if (currentStep === 1) {
            const isStep2Valid = await methods.trigger(['company', 'occupation']);
            if (isStep2Valid) {
                finishStep2({
                    company: methods.getValues('company'),
                    occupation: methods.getValues('occupation'),
                })
                nextStepAction();
                return;
            };
        }
    }

    const FormStep = ({ componentName, ...props }: { componentName: string }) => {
        const DynamicFormStep = lazy(() => import(`@/components/${componentName}`));
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <DynamicFormStep {...props} />
            </Suspense>
        )
    }

    useEffect(() => {
        console.log(methods.getValues());
    }, [currentStep])

    return (
        <FormProvider {...methods} >
            <form >
                <button type='button' onClick={handleNextStep}>
                    Next Step
                </button>
                <div className='w-full'>
                    <h1>Hello from MultipleStepsFormPage</h1>
                    <FormStep componentName={`Step${currentStep + 1}`} />
                </div>
            </form>
        </FormProvider>
    )
}

MultipleStepsFormPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <MultipleStepsFormLayout>
            {page}
        </MultipleStepsFormLayout>
    )
}

export default MultipleStepsFormPage