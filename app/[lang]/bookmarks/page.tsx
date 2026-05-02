'use client';

import { Container, Typography, Box } from '@mui/material';
import { useNavigation } from '@/app/[lang]/contexts/navigation-context';

export default function Bookmarks() {
  const { dict } = useNavigation();

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        {dict.bookmarks}
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        {dict.bookmarksSubtitle}
      </Typography>
      <Box sx={{ mt: 6 }}>
        <Typography variant="body1" paragraph>
          {dict.bookmarksDescription}
        </Typography>
      </Box>
    </Container>
  );
}