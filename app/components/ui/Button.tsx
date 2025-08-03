import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-[var(--primary)] text-white dark:text-gray-100 hover:bg-blue-800 dark:hover:bg-blue-700 focus:ring-blue-500 dark:focus:ring-blue-400",
        destructive: "bg-[var(--accent)] text-white dark:text-gray-100 hover:bg-red-700 dark:hover:bg-red-600 focus:ring-red-500 dark:focus:ring-red-400",
        outline: "border border-[var(--primary)] text-[var(--primary)] dark:text-gray-100 hover:bg-[var(--primary)] hover:text-white dark:hover:text-gray-100 focus:ring-blue-500 dark:focus:ring-blue-400",
        // Nova variante com contraste garantido
        subtle: "bg-[var(--primary)]/10 dark:bg-[var(--primary)]/20 text-[var(--primary)] dark:text-gray-100 hover:bg-[var(--primary)]/20 dark:hover:bg-[var(--primary)]/30 focus:ring-blue-500 dark:focus:ring-blue-400",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = ({ className, variant, size, ...props }: ButtonProps) => (
  <button 
    className={cn(buttonVariants({ variant, size, className }))} 
    {...props}
  />
);

export { Button, buttonVariants };