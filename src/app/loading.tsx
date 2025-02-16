import {
  Box,
  CircularProgress,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";

export default function Loading() {
  return (
    <Box
      display="flex"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap={3}
    >
      <CircularProgress size={40} />
      <Typography variant="h6" color="text.secondary">
        Loading...
      </Typography>
      <Stack spacing={2} width="300px">
        <Skeleton
          variant="rectangular"
          width="100%"
          height={60}
          animation="wave"
          sx={{ borderRadius: 1 }}
        />
        <Skeleton
          variant="rectangular"
          width="100%"
          height={60}
          animation="wave"
          sx={{ borderRadius: 1 }}
        />
        <Skeleton
          variant="rectangular"
          width="100%"
          height={60}
          animation="wave"
          sx={{ borderRadius: 1 }}
        />
      </Stack>
    </Box>
  );
}
