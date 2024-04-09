// import Image from 'next/image';
// import { ReactNode } from 'react';
// import { useState, useEffect } from 'react';

// import classNames from 'classnames';
// import { useMediaQuery } from 'react-responsive';

// import { Container } from '@/components/Container';
// import { NavBar } from '@/components/NavBar';

// import CloseIcon from '@/public/icons/close.svg';

// import { useCustomHook } from '@/hooks/useCustomHook';

// import data from '@/data/common.json';

// import { Type } from './types';

// import css from './TestComponent.module.css';

// interface ITestComponent = {
//   children: ReactNode;
//   className?: string;
// };

// export const TestComponent = ({ children, className = '' }: ITestComponent) => {
//   return <div className={classNames('container', className)}>{children}</div>;
// };

import { Icons } from '@/components/ui/Icons';
import { Card } from '@/components/ui/Card';

import React from 'react';

export const TestComponent = () => {
  return (
    <div>
      <Icons />
      <div className="container bg-white pb-6 pt-6">
        <Card isFeatures className="mb-6">
          <h2>Features Card</h2>
        </Card>

        <Card isUniqueness className="mb-6">
          <h2>Uniqueness Card</h2>
        </Card>
        <Card isConsultations className="mb-6">
          <h2>Consultations Card</h2>
        </Card>
        <Card isReviews className="mb-6">
          <h2>Reviews Card</h2>
        </Card>
        <Card isCommunities>
          <h2>Communities Card</h2>
        </Card>
      </div>
    </div>
  );
};
