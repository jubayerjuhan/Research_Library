import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { loginFields, registerFields } from "../../data/Fields/userFields.js";
import "./register.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  loginSchema,
  registerSchema,
} from "../../validationSchemas/authSchema.js";

const Register = ({ register }) => {
  // hook forms
  const {
    register: fieldRegister,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(register ? registerSchema : loginSchema),
  });

  const [fieldValues, setFieldValues] = useState({});
  const handleFieldChange = (e) => {
    setFieldValues({ ...fieldValues, [e.target.name]: e.target.value });
  };

  const fields = register ? registerFields : loginFields;

  console.log(errors, "errors");
  // handlesubmit
  const onSubmit = (data) => {
    console.log(data, "data...");
  };
  return (
    <Box className="register">
      <AccountCircleIcon style={{ fontSize: 120 }} className="icon" />
      <Typography>{register ? "Register Here" : "Login Here"}</Typography>
      <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, key) => (
          <TextField
            type={field.type}
            {...fieldRegister(field.name)}
            error={errors[field.name]}
            sx={{ width: 400 }}
            label={field.label}
            name={field.name}
            variant="outlined"
            onChange={handleFieldChange}
            helperText={errors[field.name]?.message}
          />
        ))}
        <Button
          className="button"
          variant="contained"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Register;
