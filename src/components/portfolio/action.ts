import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const actionVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        accent: "bg-accent text-accent-foreground hover:brightness-110 active:scale-[0.98]",
        solid: "bg-primary text-primary-foreground hover:opacity-90 active:scale-[0.98]",
        outline: "border border-border bg-transparent text-foreground hover:border-accent hover:text-accent",
        ghost: "text-muted-foreground hover:text-foreground",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-7 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: { variant: "accent", size: "md" },
  },
);

type Props = VariantProps<typeof actionVariants> & { className?: string };

export function actionClass({ variant, size, className }: Props = {}) {
  return cn(actionVariants({ variant, size }), className);
}
