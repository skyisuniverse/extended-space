'use client';

import { Container, Typography, Box } from '@mui/material';
import { useNavigation } from '@/app/[lang]/contexts/navigation-context';

export default function Payments() {
  const { dict } = useNavigation();

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        {dict.payments}
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Payment center
      </Typography>
      <Box sx={{ mt: 6 }}>
        <Typography variant="body1" paragraph>
          View transactions, manage payment methods, and check your balance.
        </Typography>
      </Box>
    </Container>
  );
}