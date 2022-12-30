import { PhotoCamera } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  IconButton,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Pagecomponent from "../../components/Pagecomponent/Pagecomponent.jsx";
import { addPostfields } from "../../data/Fields/addPostfields.js";

const AddPost = () => {
  const [post, setPost] = useState({});

  // handling field change
  const handleChange = (e) => {
    if (e.target.files) {
      console.log("files");
      return setPost({ ...post, [e.target.name]: e.target.files[0] });
    }
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  return (
    <Pagecomponent>
      <Typography variant="h6" sx={{ fontWeight: "600", mb: 3 }}>
        Add Research
      </Typography>
      <form action="">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 3,
          }}
        >
          {addPostfields.map((field, key) => {
            if (field.type === "file")
              return (
                <Box>
                  <InputLabel sx={{ mb: 1 }}>{field.label}</InputLabel>
                  <Box sx={{ maxWidth: 250 }}>
                    <Button variant="contained" component="label">
                      Upload
                      <input
                        name={field.name}
                        hidden
                        accept={field.fileType}
                        multiple
                        type="file"
                        onChange={handleChange}
                      />
                    </Button>
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="label"
                    >
                      <input
                        name={field.name}
                        hidden
                        accept={field.fileType}
                        type="file"
                        onChange={handleChange}
                      />
                      <PhotoCamera />
                    </IconButton>
                  </Box>
                  {post[field.name] && (
                    <Chip
                      label={post[field.name].name}
                      sx={{ mt: 2 }}
                      variant={"outlined"}
                    ></Chip>
                  )}
                </Box>
              );
            // for teaxt area
            if (field.type === "textarea")
              return (
                <textarea
                  name={field.name}
                  onChange={handleChange}
                  rows={10}
                  style={{ padding: "10px", borderRadius: 6 }}
                  placeholder={`Enter ${field.label}`}
                ></textarea>
              );
            return (
              <TextField
                name={field.name}
                label={field.label}
                onChange={handleChange}
              />
            );
          })}
        </Box>
        <Button
          variant="contained"
          sx={{ mt: 3, width: "100%" }}
          // onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
    </Pagecomponent>
  );
};

export default AddPost;
