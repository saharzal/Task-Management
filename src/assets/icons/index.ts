export type IconProps = {
  color?: string;
  size: number;
  className?: string;
  bgColor?: string;
  secondColor?: string;
} & React.SVGProps<SVGSVGElement>;
export type IconComponent = React.FC<IconProps>;

