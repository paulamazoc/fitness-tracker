import { Box, Typography } from "@mui/material";

export const QuoteGenerator = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      textAlign="center"
      position="sticky"
      mb={4}
    >
      <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
        “No pain, no gain.”
      </Typography>
    </Box>
  )
};
