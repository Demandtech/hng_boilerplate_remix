export type IntegrationsPlatformCard = {
    heading: string;
    logo: string;
    description: string;
    containerClassName?: string;
    isActive: boolean;
    onToggle: () => void;
  };
  
 export type IntegrationsPlatforms = Omit<IntegrationsPlatform, "onToggle"> & { id: number };
  