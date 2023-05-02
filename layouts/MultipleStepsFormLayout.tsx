import { useStepsForm } from '@/zustand-store/stepsForm';
import { Steps } from 'antd';
import React from 'react';

interface IProps {
    children: React.ReactNode
}

const MultipleStepsFormLayout: React.FC<IProps> = ({ children }) => {
    const currentStep = useStepsForm((state) => state.currentStep);

    return (
        <div className='flex p-4 w-full justify-between'>
            <div className='basis-3/4'>
                {children}
            </div>
            <div className='basis-1/4'>
                <Steps
                    direction="vertical"
                    current={currentStep}
                    items={[
                        {
                            title: 'Step 1',
                            description: "Customer credential",
                        },
                        {
                            title: 'Step 2',
                            description: "Customer Payment",
                        },
                        {
                            title: 'Step 3',
                            description: "Customer Finishes",
                        },
                    ]}
                />
            </div>
        </div>
    )

}

export default MultipleStepsFormLayout