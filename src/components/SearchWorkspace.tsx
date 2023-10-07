import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

interface SearchWorkspaceProps {
  search: (value: string) => void;
}

export default function SearchWorkspace({ search }: SearchWorkspaceProps) {
  return (
    <TextField
      id="input-with-icon-textfield"
      placeholder="Buscar"
      style={{ minWidth: '40vw' }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
      onChange={(e) => search(e.target.value)}
    />
  );
}
