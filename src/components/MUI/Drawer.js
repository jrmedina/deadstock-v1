import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";

export const TemporaryDrawer = ({ contact, title, user }) => {
  const [state, setState] = React.useState({
    bottom: false,
  });
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    window.location.href = `mailto:${contact}?subject=${formData.subject}&body=Hey! My name is ${formData.name}. 

    I was interested in buying your ${title} for $${formData.message}. 
    
    If that works, let's chat. (${formData.email})`;
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box sx={{ width: "auto" }} role="presentation">
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <div className="offer-form">
          <h4 className="copy-msg">Fill in the blanks for a drafted email!</h4>
          <input
            {...register("subject")}
            className="offerInput subject"
            type="text"
            placeholder="Subject"
          />
          <input
            {...register("name")}
            className="offerInput name"
            type="text"
            placeholder="Name"
          />
          <input
            {...register("email")}
            className="offerInput email"
            type="email"
            placeholder="Email"
          />
          <input
            {...register("message")}
            className="offerInput amount"
            placeholder="Dollar Amount"
            type="number"
          />
        </div>
        <button className="drawer-button" type="submit">
          Submit
        </button>
      </form>
    </Box>
  );

  return (
    <div>
      <div>
        <Button onClick={toggleDrawer("bottom", true)}>
          <h4 className="copy-msg">
            Interested?<br></br> Let's send {user} an offer!
          </h4>
        </Button>
        <Drawer
          anchor="bottom"
          open={state["bottom"]}
          onClose={toggleDrawer("bottom", false)}
        >
          {list("bottom")}
        </Drawer>
      </div>
    </div>
  );
};
