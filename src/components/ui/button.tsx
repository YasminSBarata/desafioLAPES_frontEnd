import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { LoaderCircle } from 'lucide-react';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-[120px] border-0 ',
  {
    variants: {
      variant: {
        default:
          'px-10 max-w-68 py-2.5 py-4 bg-[#FC8A06] font-montserrat text-base font-bold transition-colors hover:bg-[#B76200] active:bg-[#673700] cursor-pointer focus-visible:outline focus-visible:outline-[1.5px] focus-visible:outline-black  disabled:opacity-60 disabled:pointer-events-none text-white ',
        loading:
          'gap-10 max-w-68 text-white bg-[#FC8A06] px-10 text-white py-4 transition-colors hover:bg-[#B76200] active:bg-[#673700] min-h-3 focus-visible:outline focus-visible:outline-[1.5px] focus-visible:outline-black disabled:opacity-60 disabled:pointer-events-none',
      },
      size: {
        default: 'h-10 px-10 py-4',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const Icons = {
  loading: () => <LoaderCircle className='animate-spin' />,
};

type ButtonVariant = 'default' | 'loading';

export default interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  variant?: ButtonVariant;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    const isLoading = variant === 'loading';

    const iconKey = variant === 'loading' ? 'loading' : null;

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {isLoading
          ? iconKey && Icons[iconKey]
            ? React.createElement(Icons[iconKey])
            : null
          : children}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
