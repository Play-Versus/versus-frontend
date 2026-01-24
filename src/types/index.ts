export interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  delay?: number;
  video?: {
    src: string;
    poster?: string;
  };
}