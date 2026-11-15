import {
  Anchor,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Box,
  Building2,
  Camera,
  Compass,
  Cpu,
  Cylinder,
  Droplets,
  Grid3x3,
  Hammer,
  HardHat,
  HeartPulse,
  Home,
  Layers,
  Mail,
  MapPin,
  Paintbrush,
  PanelsTopLeft,
  Phone,
  Ruler,
  Sparkles,
  Thermometer,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { IconName } from "@/lib/types";

const icons: Record<IconName, LucideIcon> = {
  droplets: Droplets,
  thermometer: Thermometer,
  shield: BadgeCheck,
  wrench: Wrench,
  layers: Layers,
  paintbrush: Paintbrush,
  grid: Grid3x3,
  anchor: Anchor,
  cylinder: Cylinder,
  home: Home,
  road: PanelsTopLeft,
  hardhat: HardHat,
  sparkles: Sparkles,
  hammer: Hammer,
  ruler: Ruler,
  zap: Zap,
  camera: Camera,
  panels: PanelsTopLeft,
  box: Box,
  building: Building2,
  compass: Compass,
  cpu: Cpu,
  users: Users,
  badge: BadgeCheck,
  heart: HeartPulse,
  map: MapPin,
  mail: Mail,
  phone: Phone,
  arrow: ArrowRight,
};

type IconProps = {
  name: IconName;
  className?: string;
  strokeWidth?: number;
};

export function Icon({ name, className, strokeWidth = 1.5 }: IconProps) {
  const Component = icons[name] ?? ArrowUpRight;
  return <Component className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
