import TextField from '@mui/material/TextField';


interface TextInputProps {
     label: string; 
     value: string; 
     type?: string;
     onChange: (value: string) => void;
}

export const TextInput = ({ label, value, type = "text", onChange }: TextInputProps) => {

  return (
    <TextField
      label={label}
      value={value}
      type={type}

      //onChange captures what the user types and sends it up
      onChange={(e) => onChange(e.target.value)}
     
    />
  );
  
};