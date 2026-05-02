'use client';

import { Container, Typography, Box } from '@mui/material';
import { useNavigation } from '@/app/[lang]/contexts/navigation-context';

export default function Music() {
  const { dict } = useNavigation();

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        {dict.music}
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Your music collection
      </Typography>
      <Box sx={{ mt: 6 }}>
        <Typography variant="body1" paragraph>
          Listen to playlists, discover new tracks, and manage your music library.
        </Typography>
      </Box>
    </Container>
  );
}