import { QUOTES } from "@/utils/constants";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export const QuoteGenerator = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setIndex(Math.floor(Math.random() * QUOTES.length));
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      mb={4}
    >
      <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
        “{QUOTES[index]}”
      </Typography>
    </Box>
  )
};
