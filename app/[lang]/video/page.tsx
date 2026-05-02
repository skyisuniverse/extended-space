'use client';

import { Container, Typography, Box } from '@mui/material';
import { useNavigation } from '@/app/[lang]/contexts/navigation-context';

export default function Video() {
  const { dict } = useNavigation();

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        {dict.video}
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Video hub
      </Typography>
      <Box sx={{ mt: 6 }}>
        <Typography variant="body1" paragraph>
          Watch videos, live streams, and manage your video library.
        </Typography>
      </Box>
    </Container>
  );
}