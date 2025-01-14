declare namespace ComponentPropTypes {
    
    export type productDetailsPropsType = {
        isOpen: boolean;
        onClose: () => void;
        prodDetails?: {
          title: string;
          description: string;
          price: number;
          image: string;
        } | null
    } 
}