import { cn } from '@/lib/utils';
import React, { useState } from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  placeholder?: 'blur';
  blurDataURL?: string;
}

const Image: React.FC<ImageProps> = ({
  className,
  placeholder,
  blurDataURL,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {placeholder === 'blur' && blurDataURL && (
        <img
          src={blurDataURL}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-1000',
            isLoaded ? 'opacity-0' : 'opacity-100'
          )}
          style={{ filter: 'blur(20px)' }}
        />
      )}
      <img
        {...props}
        className={cn(
          'transition-opacity duration-500',
          className,
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        onLoad={() => setIsLoaded(true)}
        loading='lazy'
        decoding='async'
      />
    </>
  );
};

export default Image;
