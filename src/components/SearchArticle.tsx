import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

interface SearchArticleProps {
  search: (value: string) => void;
}

export default function SearchArticle({ search }: SearchArticleProps) {
  return (
    <TextField
      id="input-with-icon-textfield"
      placeholder="Buscar"
      style={{ minWidth: '30vw' }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
    />
  );
}
