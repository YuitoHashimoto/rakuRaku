import React, {useState, useCallback}  from 'react'

// selectインプット
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';



const InputSelect = (props) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return(
        <FormControl className={'wrap__form__content'} id={"formContent"}>
            <InputLabel id="demo-controlled-open-select-label">{props.name}</InputLabel>
            <Select
                labelId="demo-controlled-open-select-label" id="demo-controlled-open-select" open={open}
                onClose={handleClose} onOpen={handleOpen} value={props.value}
                fullWidth={props.fullWidth}
            >
                <MenuItem value={props.option}>
                    {props.option}
                </MenuItem>
            </Select>
        </FormControl>

    )
}

export default InputSelect