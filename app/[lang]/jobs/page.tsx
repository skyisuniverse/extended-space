'use client';

import { Container, Typography, Box } from '@mui/material';
import { useNavigation } from '@/app/[lang]/contexts/navigation-context';

export default function Jobs() {
  const { dict } = useNavigation();

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        {dict.jobs}
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        {dict.jobsSubtitle}
      </Typography>
      <Box sx={{ mt: 6 }}>
        <Typography variant="body1" paragraph>
          {dict.jobsDescription}
        </Typography>
      </Box>
    </Container>
  );
}