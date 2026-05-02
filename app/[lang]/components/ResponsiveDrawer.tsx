'use client';

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  styled,
  Badge,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

// Meaningful social-network icons
import HomeIcon from '@mui/icons-material/Home';
import FeedIcon from '@mui/icons-material/Feed';
import MessageIcon from '@mui/icons-material/Message';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AppsIcon from '@mui/icons-material/Apps';
import PaymentsIcon from '@mui/icons-material/Payments';
import WorkIcon from '@mui/icons-material/Work';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FolderIcon from '@mui/icons-material/Folder';
import CampaignIcon from '@mui/icons-material/Campaign';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useNavigation } from '@/app/[lang]/contexts/navigation-context';

export const drawerWidth = 240;

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

interface Props {
  open: boolean;
  onDesktopDrawerClose: () => void;
  mobileOpen: boolean;
  onMobileDrawerClose: () => void;
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const {
    window,
    open,
    onDesktopDrawerClose,
    mobileOpen,
    onMobileDrawerClose,
  } = props;

  const pathname = usePathname();
  const { localize, dict } = useNavigation();

  // All navigation items – translations are now pulled from dict
  const navItems = [
    { key: 'myPage', Icon: HomeIcon },
    { key: 'news', Icon: FeedIcon },
    { key: 'messages', Icon: MessageIcon, badge: true },
    { key: 'friends', Icon: PeopleIcon },
    { key: 'communities', Icon: GroupsIcon },
    { key: 'photos', Icon: PhotoLibraryIcon },
    { key: 'music', Icon: MusicNoteIcon },
    { key: 'games', Icon: SportsEsportsIcon },
    { key: 'video', Icon: VideoLibraryIcon },
    { key: 'apps', Icon: AppsIcon },
    { key: 'payments', Icon: PaymentsIcon },
    { key: 'jobs', Icon: WorkIcon },
    { key: 'orders', Icon: ShoppingCartIcon },
    { key: 'products', Icon: StorefrontIcon },
    { key: 'bookmarks', Icon: BookmarkIcon },
    { key: 'files', Icon: FolderIcon },
    { key: 'ads', Icon: CampaignIcon },
  ];

  const drawerContent = (onClose: () => void) => (
    <div>
      <DrawerHeader>
        <IconButton onClick={onClose}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>

      <Divider />

      <List>
        {navItems.map(({ key, Icon, badge = false }) => {
          // Convert key to kebab-case for URL (myPage → my-page)
          const slug = key.replace(/([A-Z])/g, '-$1').toLowerCase();
          const localizedHref = localize(`/${slug}`);

          return (
            <ListItem key={key} disablePadding>
              <ListItemButton
                component={Link}
                href={localizedHref}
                selected={pathname === localizedHref}
              >
                <ListItemIcon>
                  {badge ? (
                    <Badge badgeContent={4} color="primary">
                      <Icon />
                    </Badge>
                  ) : (
                    <Icon />
                  )}
                </ListItemIcon>
                <ListItemText primary={dict[key] ?? key} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="navigation"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={onMobileDrawerClose}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        slotProps={{ root: { keepMounted: true } }}
      >
        {drawerContent(onMobileDrawerClose)}
      </Drawer>

      <Drawer
        variant="persistent"
        open={open}
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawerContent(onDesktopDrawerClose)}
      </Drawer>
    </Box>
  );
}