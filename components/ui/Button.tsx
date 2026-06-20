import { type ButtonHTMLAttributes, type AnchorHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'onDark';
type Size = 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
}

const variantClass: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  onDark: 'btn-on-dark',
};

const sizeClass: Record<Size, string> = {
  md: '',
  lg: 'px-7 py-4 text-[0.9375rem]',
};

type ButtonAsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsAnchor = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', withArrow = false, className, children, ...props }, ref) => {
    const classes = cn(variantClass[variant], sizeClass[size], 'group', className);

    if ('href' in props && props.href) {
      const { href, ...rest } = props as ButtonAsAnchor;
      return (
        <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={classes} {...rest}>
          {children}
          {withArrow && (
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 ease-smooth group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          )}
        </a>
      );
    }

    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} {...(props as ButtonAsButton)}>
        {children}
        {withArrow && (
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 ease-smooth group-hover:translate-x-0.5"
            strokeWidth={2}
          />
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
