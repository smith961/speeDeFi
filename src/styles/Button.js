<<<<<<< HEAD
import styled from "styled-components";

const COLORS = {
    primary: {
        "--main": "indigo",
        "--accent": "black",

    },
    secondary: {
        "--main": "lavenderblush",
        "--accent": "indigo",
    },
};

function Button({ variant = "fill", color = "primary", ...props}) {
    let Components;
    if (variant === "fill") {
        Components = FillButton;

    }else if (variant === "outline") {
        Components = OutlineButton;
    }

    return <Components style = {COLORS[color]} {...props} />;

}

const ButtonBase = styled.button`
cursor: pointer;
font-size: 1rem;
border: 1px solid transparent;
border-radius: 6px;
padding: 8px 16px;
text-decoration: none;
`;

const FillButton = styled(ButtonBase)`
background-color: var()(--main);
color: var(--accent);

&:hover {
    opacity: 0.9;
}`

const OutlineButton = styled(ButtonBase)`
background-color: white;
color: var(--main);
border: 2px solid var(--main);

&:hover {
    background: hsl(235deg 85% 97%);

}
`;

export default Button;
=======
import React from 'react'

function Button() {
  return (
    <div>Button</div>
  )
}

export default Button
>>>>>>> 2838324156cc0d715350e9e64e54a43c7516d203
