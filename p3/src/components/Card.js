import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './Crad.css'

const Card = () => {
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [weight, setWeight] = useState('');
    const [errors, setErrors] = useState({
      source: '',
      destination: '',
      weight: ''
    });
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const newErrors = {};
  
      if (!source) {
        newErrors.source = 'Source is required';
      }
  
      if (!destination) {
        newErrors.destination = 'Destination is required';
      }
  
      if (!weight || !/^(\d+(\.\d+)?)(\s*)(kg|lbs|g|mg)$/.test(weight)) {
        newErrors.weight = 'Enter valid value for weight';
      }

      if (Object.keys(newErrors).length === 0) {
        setErrors({ source: '', destination: '', weight: '' });
        console.log({weight,destination,source})
        setDestination('')
        setSource('')
        setWeight('')
      }
      else {
        console.log(errors)
        setErrors(newErrors);
      }
    };
  
    return (
      <form className="horizontal-container">
        <div className="horizontal-item">
        <TextField
            id="source"
            label="Source"
            variant="standard"
            value={source}
            onChange={(event) => {
                if (errors.source !== '' && event.target.value !== '') {
                setErrors({ ...errors, source: '' });
                }
                setSource(event.target.value);
            }}
            error={errors.source !== ''}
            helperText={errors.source}
            InputProps={{ underline: true, style: { color: 'black', fontSize:'15px' } }}
            InputLabelProps={{
                style: { color: 'black', fontSize: '30px', marginBottom: '20px' },
                shrink: true,
            }}
            FormHelperTextProps={{
                style: {
                color: errors.source !== '' && source !== '' ? 'transparent' : 'black',
                },
            }}
        />
        </div>
        <div className="horizontal-item">
            <TextField
                id="destination"
                label="Destination"
                variant="standard"
                value={destination}
                onChange={(event) => {
                    if (errors.destination !== '' && event.target.value !== '') {
                    setErrors({ ...errors, destination: '' });
                    }
                    setDestination(event.target.value);
                }}
                error={errors.destination !== ''}
                helperText={errors.destination}
                InputProps={{ underline: true, style: { color: 'black', fontSize:'15px' } }}
                InputLabelProps={{
                    style: { color: 'black', fontSize: '30px', marginBottom: '20px' },
                    shrink: true,
                }}
                FormHelperTextProps={{
                    style: {
                    color: errors.destination !== '' && destination !== '' ? 'transparent' : 'black',
                    },
                }}
            />
        </div>
        <div className="horizontal-item">
            <TextField
                id="weight"
                label="Weight"
                variant="standard"
                value={weight}
                onChange={(event) => {
                    if (errors.weight !== '' && event.target.value !== '') {
                    setErrors({ ...errors, weight: '' });
                    }
                    setWeight(event.target.value);
                }}
                error={errors.weight !== ''}
                helperText={errors.weight}
                InputProps={{ underline: true, style: { color: 'black', fontSize:'15px' } }}
                InputLabelProps={{
                    style: { color: 'black', fontSize: '30px', marginBottom: '20px' },
                    shrink: true,
                }}
                FormHelperTextProps={{
                    style: {
                    color:'black',
                    },
                }}
            />
        </div>
        <div className="horizontal-item" type="submit" onClick={handleSubmit}>
            <span className="search-icon">&#x1F50D;Search</span>
        </div>
      </form>
    );
  };
export default Card;
