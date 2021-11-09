import { Box, Typography } from "@mui/material";

const TraderTabs = ({
    children,
    value,
    index,
    ...other
}) => {
    return (
        <div hidden={value !== index} {...other}>
            {value === index && <>{children}</>}
        </div>
    )
}

export default TraderTabs;