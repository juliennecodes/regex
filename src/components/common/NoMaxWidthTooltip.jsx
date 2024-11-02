import {styled, Tooltip, tooltipClasses} from "@mui/material";
import * as React from "react";

export const NoMaxWidthTooltip = styled(({className, ...props}) => (
    <Tooltip {...props} classes={{popper: className}}/>
))({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: 'none',
        backgroundColor: 'hsl(224, 18%, 25%)',
    },
});