import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import LoginForm from "../../LayOut/MainLayout/Auth/LoginForm";
import RegisterForm from "../../LayOut/MainLayout/Auth/RegisterForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

  const BasicModal = ({open,setOpen,isLoggedIn}) => {
    
  

  return (
    <div>
     
      <Modal
        open={open}
        onClose={()=>{setOpen(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
 
      >
        <Box sx={style}>
          
          <Typography id="modal-modal-description">
            {isLoggedIn ? <LoginForm/> : <RegisterForm/>}
           </Typography>
        </Box>
      </Modal>
    </div>
  );
};
export default BasicModal
