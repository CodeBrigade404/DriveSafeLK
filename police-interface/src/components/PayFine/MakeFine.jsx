import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Paper } from "@mui/material";

export default function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Paper sx={{ p: 3, m: 5, ml: 40, mb:15, maxWidth: 800, flexGrow: 1 }}>
      <Box sx={{ display: "flex" }}>
        <div>
          <TextField
            label='Add NIC Number'
            id='outlined-start-adornment'
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: <InputAdornment position='start'>Citizen ID</InputAdornment>,
            }}
          />
          <TextField
            label='First Name'
            id='outlined-start-adornment'
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: <InputAdornment position='start'>First Name</InputAdornment>,
            }}
          />
          <TextField
            label='Last Name'
            id='outlined-start-adornment'
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: <InputAdornment position='start'>Last Name</InputAdornment>,
            }}
          />
          <TextField
            label='License Number'
            id='outlined-start-adornment'
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: <InputAdornment position='start'>License Number</InputAdornment>,
            }}
          />
          <TextField
            label='Vehicle Number'
            id='outlined-start-adornment'
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: <InputAdornment position='start'>Vehicle Number</InputAdornment>,
            }}
          />
          <TextField
            label='Fine Amount'
            id='outlined-start-adornment'
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: <InputAdornment position='start'>Fine Amount</InputAdornment>,
            }}
          />
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor='outlined-adornment-amount'>Fine Evidence</InputLabel>
            <OutlinedInput id='outlined-adornment-amount' label='Fine Evidence' />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }} variant='filled'>
            <InputLabel htmlFor='filled-adornment-amount'>Fine Content</InputLabel>
            <FilledInput id='filled-adornment-amount' />
          </FormControl>
        </div>
        <div>
          <TextField
            label='Date'
            id='filled-start-adornment'
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: <InputAdornment position='start'>Date</InputAdornment>,
            }}
            variant='filled'
          />
          <TextField
            label='Fine Reference'
            id='filled-start-adornment'
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: <InputAdornment position='start'>Reference</InputAdornment>,
            }}
            variant='filled'
          />
          <TextField
            label='Officer ID'
            id='filled-start-adornment'
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: <InputAdornment position='start'>Officer ID</InputAdornment>,
            }}
            variant='filled'
          />
        </div>
      </Box>
    </Paper>
  );
}
