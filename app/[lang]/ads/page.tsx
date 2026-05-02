'use client';

import { Container, Typography, Box } from '@mui/material';
import { useNavigation } from '@/app/[lang]/contexts/navigation-context';

export default function Ads() {
  const { dict } = useNavigation();

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        {dict.ads}
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Advertising center
      </Typography>
      <Box sx={{ mt: 6 }}>
        <Typography variant="body1" paragraph>
          Create, manage, and track your advertisements and campaigns.
        </Typography>
      </Box>
    </Container>
  );
}