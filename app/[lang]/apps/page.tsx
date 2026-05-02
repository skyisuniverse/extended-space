'use client';

import { Container, Typography, Box } from '@mui/material';
import { useNavigation } from '@/app/[lang]/contexts/navigation-context';

export default function Apps() {
  const { dict } = useNavigation();

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        {dict.apps}
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Installed applications
      </Typography>
      <Box sx={{ mt: 6 }}>
        <Typography variant="body1" paragraph>
          Browse and manage all your installed apps and mini-applications.
        </Typography>
      </Box>
    </Container>
  );
}