'use client';

import { Container, Typography, Box } from '@mui/material';
import { useNavigation } from '@/app/[lang]/contexts/navigation-context';

export default function Friends() {
  const { dict } = useNavigation();

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        {dict.friends}
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Your connections
      </Typography>
      <Box sx={{ mt: 6 }}>
        <Typography variant="body1" paragraph>
          Manage your friends list, send friend requests, and see who’s online.
        </Typography>
      </Box>
    </Container>
  );
}