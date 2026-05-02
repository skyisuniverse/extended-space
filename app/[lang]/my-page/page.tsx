'use client';

import { Container, Typography, Box } from '@mui/material';
import { useNavigation } from '@/app/[lang]/contexts/navigation-context';

export default function MyPage() {
  const { dict } = useNavigation();

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        {dict.myPage}
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Welcome back!
      </Typography>
      <Box sx={{ mt: 6 }}>
        <Typography variant="body1" paragraph>
          This is your personal dashboard. Here you can view your profile, recent activity, friends online, and quick actions.
        </Typography>
      </Box>
    </Container>
  );
}