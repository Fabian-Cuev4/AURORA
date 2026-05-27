import { Button } from "@mui/material";

interface ActionButtonProps {
    text:string; 
    onClick: () => void; 
}

export const ActionButton = ({ text, onClick }: ActionButtonProps) => {

    return (
        <Button variant="outlined" onClick={onClick}>
            {text}
        </Button>
    );
}



 