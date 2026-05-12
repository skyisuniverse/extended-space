// app/[lang]/my-page/page.tsx
// "use client";

// import * as React from "react";
// import {
//   Container,
//   Typography,
//   Box,
//   Avatar,
//   Button,
//   Paper,
//   IconButton,
//   TextField,
//   Tabs,
//   Tab,
//   Divider,
//   List,
//   ListItem,
//   ListItemAvatar,
//   ListItemText,
//   Stack,
// } from "@mui/material";
// import Grid from "@mui/material/Grid";
// import Link from "next/link";
// import { useParams } from "next/navigation";
// import {
//   Edit,
//   BarChart,
//   PlayArrow,
//   Search,
//   ExpandMore,
//   Image as ImageIcon,
//   Videocam,
//   InsertEmoticon,
//   LocationOn,
//   MoreVert,
//   AddPhotoAlternate,
// } from "@mui/icons-material";
// import { useNavigation } from "@/app/[lang]/contexts/navigation-context";

// export default function MyPage() {
//   const { dict } = useNavigation();
//   const params = useParams();
//   const lang = (params?.lang as string) || "en";

//   const [tabValue, setTabValue] = React.useState(0);

//   const profile = {
//     name: "Alex Rivera",
//     status:
//       "Passionate about space exploration, building the future with Next.js 16, MUI 7, reusable rockets, and open-source Starship tech. 🚀",
//     birthday: "May 12, 1995",
//     city: "Austin, Texas",
//     activity: "Working on a new orbital launch simulation tool",
//   };

//   const starshipImages = {
//     profile: "/images/2.14.22_PolarisAnnouncement_Starship_Desktop.jpg",
//     avatar: "/images/Eva_Suit_Desktop_alternate_1cf9bae18e.jpg",

//     achievements: [
//       "/images/DART_LAUNCHES_DESKTOP.jpg",
//       "/images/Flight_3_Lift_Off_20240314_001203_db0985992e.jpg",
//       "/images/Flight_6_Drone_20241119000503_94437af67f.jpg",
//       "/images/Flight_10_Liftoff_Drone1_a2508261134_36972204cc.jpg",
//       "/images/Flight_11_Onboards_2510162827_2699d9bfed.jpg",
//       "/images/Flight_7_Onboard_20250121001410_066c4348a8.jpg",
//     ],

//     friends: [
//       "/images/dear_Moon_Key_Visual_Final_2fdfb55422.jpg",
//       "/images/Flight_8_Onboard_160af4d80b.jpg",
//       "/images/Flight_9_Onboards_a2505290345_5463f84590.jpg",
//       "/images/Dragon_West_Coast_Recovery_8afdffe48d.jpg",
//       "/images/Crew_Displays_236ec85aec.png",
//       "/images/Falcon_Clear_Areas_c4081a68c6.jpg",
//     ],

//     subscriptions: {
//       SpaceX: "/images/2.14.22_PolarisAnnouncement_Starship_Desktop.jpg",
//       Neuralink: "/images/Neuralink-Device.jpg",
//       Tesla: "/images/cybercab.jpeg",
//       xAI: "/images/Flight_3_Lift_Off_20240314_001203_db0985992e.jpg",
//     },

//     photos: [
//       "/images/10_28_25_cabin_06_30a49f27a3.jpg",
//       "/images/Flight_6_Drone_20241119000503_94437af67f.jpg",
//       "/images/Flight_10_Liftoff_Drone1_a2508261134_36972204cc.jpg",
//       "/images/Flight_11_Onboards_2510162827_2699d9bfed.jpg",
//     ],

//     postImages: {
//       post1: [
//         "/images/DART_LAUNCHES_DESKTOP.jpg",
//         "/images/Flight_3_Lift_Off_20240314_001203_db0985992e.jpg",
//         "/images/Flight_6_Drone_20241119000503_94437af67f.jpg",
//       ],
//       post2: [
//         "/images/Flight_7_Onboard_20250121001410_066c4348a8.jpg",
//         "/images/Flight_8_Onboard_160af4d80b.jpg",
//       ],
//       post3: ["/images/2.14.22_PolarisAnnouncement_Starship_Desktop.jpg"],
//       post4: [
//         "/images/Flight_9_Onboards_a2505290345_5463f84590.jpg",
//         "/images/Flight_10_Liftoff_Drone1_a2508261134_36972204cc.jpg",
//         "/images/Flight_11_Onboards_2510162827_2699d9bfed.jpg",
//         "/images/dear_Moon_Key_Visual_Final_2fdfb55422.jpg",
//       ],
//       post6: [
//         "/images/Dragon_West_Coast_Recovery_8afdffe48d.jpg",
//         "/images/Crew_Displays_236ec85aec.png",
//       ],
//     },

//     videos: {
//       preview1: "/images/Flight_3_Lift_Off_20240314_001203_db0985992e.jpg",
//       preview2: "/images/Flight_10_Liftoff_Drone1_a2508261134_36972204cc.jpg",
//     },
//   };

//   const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
//     setTabValue(newValue);
//   };

//   return (
//     <Container maxWidth="xl" sx={{ py: 5 }}>
//       <Grid container spacing={4}>
//         {/* LEFT COLUMN — 30% width */}
//         <Grid size={{ xs: 12, md: 4 }}>
//           {/* 1. User Profile Picture Area */}
//           <Paper
//             elevation={3}
//             sx={{ p: 3, mb: 4, textAlign: "center", borderRadius: 4 }}
//           >
//             <Link href={`/${lang}/profile`} style={{ textDecoration: "none" }}>
//               <Box
//                 component="img"
//                 src={starshipImages.profile}
//                 alt="Starship Profile"
//                 sx={{
//                   width: "100%",
//                   height: 340,
//                   objectFit: "cover",
//                   borderRadius: 4,
//                   mb: 3,
//                   boxShadow: 4,
//                   display: "block",
//                   transition:
//                     "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease",
//                   "&:hover": { transform: "scale(1.03)", boxShadow: 8 },
//                 }}
//               />
//             </Link>
//             <Stack direction="row" spacing={2} justifyContent="center">
//               <Button
//                 variant="contained"
//                 startIcon={<Edit />}
//                 size="medium"
//                 fullWidth
//                 sx={{ maxWidth: 160 }}
//               >
//                 Edit
//               </Button>
//               <Button
//                 variant="outlined"
//                 startIcon={<BarChart />}
//                 size="medium"
//                 fullWidth
//                 sx={{ maxWidth: 160 }}
//               >
//                 Statistics
//               </Button>
//             </Stack>
//           </Paper>

//           {/* 2. Achievements Area — caption hover matches stats style */}
//           <Paper sx={{ p: 3, mb: 4 }}>
//             <Box
//               component={Link}
//               href={`/${lang}/achievements`}
//               sx={{
//                 display: "inline-block",
//                 textDecoration: "none",
//                 color: "inherit",
//                 transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
//                 "&:hover": { transform: "scale(1.08)" },
//               }}
//             >
//               <Typography
//                 variant="h6"
//                 fontWeight={100}
//                 sx={{ fontFamily: "var(--font-roboto)", mb: 2 }}
//               >
//                 Achievements 310
//               </Typography>
//             </Box>
//             <Grid container spacing={1.5}>
//               {starshipImages.achievements.map((url, i) => (
//                 <Grid size={4} key={i}>
//                   <Link
//                     href={`/${lang}/achievements/${i + 1}`}
//                     style={{ textDecoration: "none" }}
//                   >
//                     <Box
//                       component="img"
//                       src={url}
//                       sx={{
//                         width: "100%",
//                         aspectRatio: "1/1",
//                         borderRadius: 3,
//                         objectFit: "cover",
//                         transition:
//                           "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
//                         "&:hover": { transform: "scale(1.04)", boxShadow: 6 },
//                       }}
//                     />
//                   </Link>
//                 </Grid>
//               ))}
//             </Grid>
//           </Paper>

//           {/* 3. Friends Area — caption hover matches stats style */}
//           <Paper sx={{ p: 3, mb: 4 }}>
//             <Box
//               component={Link}
//               href={`/${lang}/friends`}
//               sx={{
//                 display: "inline-block",
//                 textDecoration: "none",
//                 color: "inherit",
//                 transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
//                 "&:hover": { transform: "scale(1.08)" },
//               }}
//             >
//               <Typography
//                 variant="h6"
//                 fontWeight={100}
//                 sx={{ fontFamily: "var(--font-roboto)", mb: 2 }}
//               >
//                 Friends 450
//               </Typography>
//             </Box>
//             <Grid container spacing={1.5}>
//               {starshipImages.friends.map((url, i) => (
//                 <Grid size={4} key={i}>
//                   <Link
//                     href={`/${lang}/friends/${i + 1}`}
//                     style={{ textDecoration: "none" }}
//                   >
//                     <Avatar
//                       src={url}
//                       sx={{
//                         width: "100%",
//                         height: "auto",
//                         aspectRatio: "1/1",
//                         borderRadius: 3,
//                         transition:
//                           "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
//                         "&:hover": { transform: "scale(1.04)", boxShadow: 6 },
//                       }}
//                     />
//                   </Link>
//                 </Grid>
//               ))}
//             </Grid>
//           </Paper>

//           {/* 4. Subscriptions Area — nice hover on items */}
//           <Paper sx={{ p: 3, mb: 4 }}>
//             <Box
//               component={Link}
//               href={`/${lang}/subscriptions`}
//               sx={{
//                 display: "inline-block",
//                 textDecoration: "none",
//                 color: "inherit",
//                 transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
//                 "&:hover": { transform: "scale(1.08)" },
//               }}
//             >
//               <Typography
//                 variant="h6"
//                 fontWeight={100}
//                 sx={{ fontFamily: "var(--font-roboto)", mb: 2 }}
//               >
//                 Subscriptions 230
//               </Typography>
//             </Box>
//             <List dense>
//               {[
//                 {
//                   name: "SpaceX",
//                   img: starshipImages.subscriptions.SpaceX,
//                   id: 1,
//                 },
//                 {
//                   name: "Neuralink",
//                   img: starshipImages.subscriptions.Neuralink,
//                   id: 2,
//                 },
//                 {
//                   name: "Tesla",
//                   img: starshipImages.subscriptions.Tesla,
//                   id: 3,
//                 },
//                 { name: "xAI", img: starshipImages.subscriptions.xAI, id: 4 },
//               ].map((sub) => (
//                 <ListItem
//                   key={sub.id}
//                   component={Link}
//                   href={`/${lang}/subscriptions/${sub.id}`}
//                   style={{ textDecoration: "none", color: "inherit" }}
//                   sx={{
//                     px: 0,
//                     py: 1,
//                     borderRadius: 2,
//                     transition:
//                       "background-color 0.25s ease, transform 0.25s ease",
//                     "&:hover": {
//                       bgcolor: "action.hover",
//                       transform: "translateX(4px)",
//                     },
//                   }}
//                 >
//                   <ListItemAvatar>
//                     <Avatar src={sub.img} sx={{ width: 36, height: 36 }} />
//                   </ListItemAvatar>
//                   <ListItemText primary={sub.name} />
//                 </ListItem>
//               ))}
//             </List>
//           </Paper>

//           {/* 5. Audios Area — fixed full-row hover (matches Subscriptions style) */}
//           <Paper sx={{ p: 3, mb: 4 }}>
//             <Box
//               component={Link}
//               href={`/${lang}/audios`}
//               sx={{
//                 display: "inline-block",
//                 textDecoration: "none",
//                 color: "inherit",
//                 transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
//                 "&:hover": { transform: "scale(1.08)" },
//               }}
//             >
//               <Typography
//                 variant="h6"
//                 fontWeight={100}
//                 sx={{ fontFamily: "var(--font-roboto)", mb: 2 }}
//               >
//                 Audios
//               </Typography>
//             </Box>
//             <List dense>
//               {[
//                 { title: "Starship Launch Audio", duration: "3:45" },
//                 { title: "Next.js 16 Deep Dive", duration: "12:20" },
//                 { title: "Rocket Science 101", duration: "8:10" },
//               ].map((audio, i) => (
//                 <ListItem
//                   key={i}
//                   sx={{
//                     px: 0,
//                     py: 1,
//                   }}
//                 >
//                   {/* Full-row hover (play button height included) */}
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       width: "100%",
//                       borderRadius: 2,
//                       transition:
//                         "background-color 0.25s ease, transform 0.25s ease",
//                       "&:hover": {
//                         bgcolor: "action.hover",
//                         transform: "translateX(4px)",
//                       },
//                     }}
//                   >
//                     {/* Play button — completely outside the link */}
//                     <IconButton sx={{ mr: 1.5 }}>
//                       <PlayArrow />
//                     </IconButton>

//                     {/* Link only wraps title + duration */}
//                     <Box
//                       component={Link}
//                       href={`/${lang}/audios?title=${encodeURIComponent(audio.title)}`}
//                       sx={{
//                         flex: 1,
//                         textDecoration: "none",
//                         color: "inherit",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "space-between",
//                       }}
//                     >
//                       <ListItemText primary={audio.title} />
//                       <Typography variant="body2" color="text.secondary">
//                         {audio.duration}
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </ListItem>
//               ))}
//             </List>
//           </Paper>

//           {/* 6. Videos Area */}
//           <Paper sx={{ p: 3 }}>
//             <Box
//               component={Link}
//               href={`/${lang}/videos`}
//               sx={{
//                 display: "inline-block",
//                 textDecoration: "none",
//                 color: "inherit",
//               }}
//             >
//               <Typography
//                 variant="h6"
//                 fontWeight={100}
//                 sx={{ fontFamily: "var(--font-roboto)", mb: 2 }}
//               >
//                 Videos 130
//               </Typography>
//             </Box>

//             <Stack spacing={3}>
//               {[1, 2].map((i) => (
//                 <Link
//                   key={i}
//                   href={`/${lang}/videos/${i}`}
//                   style={{ textDecoration: "none" }}
//                 >
//                   <Box
//                     sx={{
//                       position: "relative",
//                       borderRadius: 4,
//                       overflow: "hidden",
//                       mb: 1,
//                     }}
//                   >
//                     <Box
//                       component="img"
//                       src={
//                         i === 1
//                           ? starshipImages.videos.preview1
//                           : starshipImages.videos.preview2
//                       }
//                       sx={{
//                         width: "100%",
//                         display: "block",
//                         transition:
//                           "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
//                         "&:hover": {
//                           transform: "scale(1.04)",
//                           boxShadow: 6,
//                         },
//                       }}
//                     />

//                     {/* Smaller Play icon */}
//                     <Box
//                       sx={{
//                         position: "absolute",
//                         top: "50%",
//                         left: "50%",
//                         transform: "translate(-50%, -50%)",
//                         bgcolor: "rgba(255,255,255,0.95)",
//                         borderRadius: "50%",
//                         p: 1,
//                         boxShadow: 4,
//                       }}
//                     >
//                       <PlayArrow sx={{ fontSize: 40, color: "#111" }} />
//                     </Box>

//                     {/* Smaller & more compact bottom bar: title (left) + duration (right) */}
//                     <Box
//                       sx={{
//                         position: "absolute",
//                         bottom: 0,
//                         left: 0,
//                         right: 0,
//                         bgcolor: "rgba(0, 0, 0, 0.45)",
//                         color: "white",
//                         px: 2.5,
//                         py: 1,
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "space-between",
//                         gap: 2,
//                         zIndex: 2,
//                       }}
//                     >
//                       <Typography
//                         variant="subtitle1"
//                         fontWeight={500}
//                         sx={{
//                           flex: 1,
//                           whiteSpace: "nowrap",
//                           overflow: "hidden",
//                           textOverflow: "ellipsis",
//                           fontSize: "0.95rem",
//                           lineHeight: 1.3,
//                         }}
//                       >
//                         Starship Integrated Flight Test {i}
//                       </Typography>

//                       {/* Compact duration badge */}
//                       <Box
//                         sx={{
//                           bgcolor: "rgba(0,0,0,0.6)",
//                           color: "white",
//                           px: 1.75,
//                           py: 0.4,
//                           borderRadius: 1,
//                           fontSize: "0.8rem",
//                           fontWeight: 600,
//                           flexShrink: 0,
//                         }}
//                       >
//                         3:12
//                       </Box>
//                     </Box>
//                   </Box>
//                 </Link>
//               ))}
//             </Stack>
//           </Paper>
//         </Grid>

//         {/* RIGHT COLUMN — 70% width */}
//         <Grid size={{ xs: 12, md: 8 }}>
//           {/* User Description Area */}
//           <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 4 }}>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "flex-start",
//                 mb: 2,
//               }}
//             >
//               <Typography variant="h3" component="h1" fontWeight={700}>
//                 {profile.name}
//               </Typography>
//               <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                 <Box
//                   sx={{
//                     width: 12,
//                     height: 12,
//                     bgcolor: "#4ade80",
//                     borderRadius: "50%",
//                     boxShadow: "0 0 0 4px rgba(74, 222, 128, 0.3)",
//                   }}
//                 />
//                 <Typography color="success.main" fontWeight={600}>
//                   Online
//                 </Typography>
//               </Box>
//             </Box>

//             <Typography
//               variant="body1"
//               color="text.secondary"
//               sx={{ mb: 4, lineHeight: 1.7 }}
//             >
//               {profile.status}
//             </Typography>

//             <Box sx={{ mb: 4 }}>
//               <Box sx={{ display: "flex", gap: 3, mb: 1.5 }}>
//                 <Typography sx={{ minWidth: 100 }}>
//                   <strong>Birthday</strong>
//                 </Typography>
//                 <Typography
//                   component={Link}
//                   href={`/${lang}/profile/birthday`}
//                   color="text.secondary"
//                   sx={{
//                     textDecoration: "none",
//                     transition: "color 0.25s ease",
//                     "&:hover": { color: "primary.main" },
//                   }}
//                 >
//                   {profile.birthday}
//                 </Typography>
//               </Box>
//               <Box sx={{ display: "flex", gap: 3, mb: 1.5 }}>
//                 <Typography sx={{ minWidth: 100 }}>
//                   <strong>City</strong>
//                 </Typography>
//                 <Typography
//                   component={Link}
//                   href={`/${lang}/profile/city`}
//                   color="text.secondary"
//                   sx={{
//                     textDecoration: "none",
//                     transition: "color 0.25s ease",
//                     "&:hover": { color: "primary.main" },
//                   }}
//                 >
//                   {profile.city}
//                 </Typography>
//               </Box>
//               <Box sx={{ display: "flex", gap: 3, mb: 1.5 }}>
//                 <Typography sx={{ minWidth: 100 }}>
//                   <strong>Activity</strong>
//                 </Typography>
//                 <Typography
//                   component={Link}
//                   href={`/${lang}/profile/activity`}
//                   color="primary.main"
//                   sx={{
//                     textDecoration: "none",
//                     transition: "color 0.25s ease",
//                     "&:hover": { color: "primary.dark" },
//                   }}
//                 >
//                   {profile.activity}
//                 </Typography>
//               </Box>
//             </Box>

//             {/* Stats — already have beautiful hover */}
//             <Grid container spacing={2} sx={{ textAlign: "center" }}>
//               {[
//                 { count: "450", label: "friends", href: `/${lang}/friends` },
//                 {
//                   count: "378",
//                   label: "subscribers",
//                   href: `/${lang}/subscribers`,
//                 },
//                 { count: "153", label: "photos", href: `/${lang}/photos` },
//                 { count: "32", label: "mentions", href: `/${lang}/mentions` },
//                 { count: "230", label: "videos", href: `/${lang}/videos` },
//                 { count: "10k", label: "audios", href: `/${lang}/audios` },
//               ].map((stat, index) => (
//                 <Grid size={{ xs: 4, sm: 2 }} key={index}>
//                   <Link
//                     href={stat.href}
//                     style={{ textDecoration: "none", color: "inherit" }}
//                   >
//                     <Box
//                       sx={{
//                         transition:
//                           "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
//                         "&:hover": { transform: "scale(1.08)" },
//                       }}
//                     >
//                       <Typography
//                         variant="h4"
//                         fontWeight={700}
//                         color="primary.main"
//                       >
//                         {stat.count}
//                       </Typography>
//                       <Typography
//                         variant="body2"
//                         color="text.secondary"
//                         textTransform="capitalize"
//                       >
//                         {stat.label}
//                       </Typography>
//                     </Box>
//                   </Link>
//                 </Grid>
//               ))}
//             </Grid>
//           </Paper>

//           {/* My Photos Area */}
//           <Paper sx={{ p: 3, mb: 4 }}>
//             <Box
//               component={Link}
//               href={`/${lang}/photos`}
//               sx={{
//                 display: "inline-block",
//                 textDecoration: "none",
//                 color: "inherit",
//                 transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
//                 "&:hover": { transform: "scale(1.08)" },
//               }}
//             >
//               <Typography
//                 variant="h6"
//                 fontWeight={100}
//                 sx={{ fontFamily: "var(--font-roboto)", mb: 2 }}
//               >
//                 My Photos 151
//               </Typography>
//             </Box>
//             <Grid container spacing={1.5}>
//               {starshipImages.photos.map((url, i) => (
//                 <Grid size={{ xs: 6, sm: 3 }} key={i}>
//                   <Link
//                     href={`/${lang}/photos/${i + 1}`}
//                     style={{ textDecoration: "none" }}
//                   >
//                     <Box
//                       component="img"
//                       src={url}
//                       sx={{
//                         width: "100%",
//                         aspectRatio: "1/1",
//                         borderRadius: 3,
//                         objectFit: "cover",
//                         transition:
//                           "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
//                         "&:hover": { transform: "scale(1.04)", boxShadow: 6 },
//                       }}
//                     />
//                   </Link>
//                 </Grid>
//               ))}
//             </Grid>
//           </Paper>

//           {/* New Post Area */}
//           <Paper sx={{ p: 2, mb: 4, borderRadius: 4 }}>
//             <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//               <Avatar
//                 src={starshipImages.avatar}
//                 sx={{ width: 48, height: 48 }}
//               />
//               <TextField
//                 fullWidth
//                 placeholder="What's happening in the universe today?"
//                 variant="outlined"
//                 size="small"
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     borderRadius: 6,
//                     bgcolor: "background.paper",
//                     py: 1.5,
//                   },
//                 }}
//                 InputProps={{
//                   endAdornment: (
//                     <Stack direction="row" spacing={0.5}>
//                       <IconButton color="primary">
//                         <ImageIcon />
//                       </IconButton>
//                       <IconButton color="primary">
//                         <Videocam />
//                       </IconButton>
//                       <IconButton color="primary">
//                         <InsertEmoticon />
//                       </IconButton>
//                       <IconButton color="primary">
//                         <LocationOn />
//                       </IconButton>
//                       <IconButton color="primary">
//                         <AddPhotoAlternate />
//                       </IconButton>
//                     </Stack>
//                   ),
//                 }}
//               />
//             </Box>
//           </Paper>

//           {/* User Posts Area — many varied posts restored */}
//           <Paper sx={{ borderRadius: 4, overflow: "hidden" }}>
//             <Box sx={{ borderBottom: 1, borderColor: "divider", px: 3, pt: 1 }}>
//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <Tabs
//                   value={tabValue}
//                   onChange={handleTabChange}
//                   sx={{ minHeight: 52 }}
//                 >
//                   <Tab label="Posts" />
//                   <Tab label="Articles" />
//                 </Tabs>
//                 <IconButton>
//                   <Search />
//                 </IconButton>
//               </Box>
//             </Box>

//             <Divider />

//             {tabValue === 0 ? (
//               <>
//                 {/* Post 1 - 3 images */}
//                 <Box
//                   sx={{
//                     p: 3,
//                     borderBottom: "1px solid",
//                     borderColor: "divider",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 2,
//                       mb: 2,
//                     }}
//                   >
//                     <Avatar src={starshipImages.avatar} />
//                     <Box sx={{ flex: 1 }}>
//                       <Typography fontWeight={600}>{profile.name}</Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         2h ago • Public
//                       </Typography>
//                     </Box>
//                     <IconButton>
//                       <ExpandMore />
//                     </IconButton>
//                   </Box>
//                   <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
//                     Just integrated Next.js 16 with MUI 7 in our production app
//                     router setup. The new AppRouterCacheProvider + ThemeProvider
//                     combo gives us perfect SSR styling and zero flash of
//                     unstyled content. Huge win for our Starship telemetry
//                     dashboard!
//                   </Typography>
//                   <Grid container spacing={1.5}>
//                     {starshipImages.postImages.post1.map((url, i) => (
//                       <Grid size={4} key={i}>
//                         <Link
//                           href={`/${lang}/photos/${i + 1}`}
//                           style={{ textDecoration: "none" }}
//                         >
//                           <Box
//                             component="img"
//                             src={url}
//                             sx={{
//                               width: "100%",
//                               height: 200,
//                               borderRadius: 3,
//                               objectFit: "cover",
//                               transition:
//                                 "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
//                               "&:hover": {
//                                 transform: "scale(1.04)",
//                                 boxShadow: 6,
//                               },
//                             }}
//                           />
//                         </Link>
//                       </Grid>
//                     ))}
//                   </Grid>
//                 </Box>

//                 {/* Post 2 - Orbital refueling with multiple videos */}
//                 <Box
//                   sx={{
//                     p: 3,
//                     borderBottom: "1px solid",
//                     borderColor: "divider",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 2,
//                       mb: 2,
//                     }}
//                   >
//                     <Avatar src={starshipImages.avatar} />
//                     <Box sx={{ flex: 1 }}>
//                       <Typography fontWeight={600}>{profile.name}</Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         2d ago
//                       </Typography>
//                     </Box>
//                     <IconButton>
//                       <MoreVert />
//                     </IconButton>
//                   </Box>
//                   <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
//                     Orbital refueling simulation just completed successfully.
//                     This is the key to getting to Mars.
//                   </Typography>
//                   <Grid container spacing={1.5}>
//                     <Grid size={6}>
//                       <Link
//                         href={`/${lang}/videos/1`}
//                         style={{ textDecoration: "none" }}
//                       >
//                         <Box
//                           sx={{
//                             position: "relative",
//                             borderRadius: 3,
//                             overflow: "hidden",
//                           }}
//                         >
//                           <Box
//                             component="img"
//                             src={starshipImages.videos.preview1}
//                             sx={{
//                               width: "100%",
//                               height: 200,
//                               objectFit: "cover",
//                               display: "block",
//                               transition:
//                                 "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
//                               "&:hover": {
//                                 transform: "scale(1.04)",
//                                 boxShadow: 6,
//                               },
//                             }}
//                           />
//                           <Box
//                             sx={{
//                               position: "absolute",
//                               top: "50%",
//                               left: "50%",
//                               transform: "translate(-50%, -50%)",
//                               bgcolor: "rgba(255,255,255,0.9)",
//                               borderRadius: "50%",
//                               p: 1,
//                               boxShadow: 3,
//                             }}
//                           >
//                             <PlayArrow sx={{ fontSize: 36, color: "#111" }} />
//                           </Box>
//                         </Box>
//                       </Link>
//                     </Grid>
//                     <Grid size={6}>
//                       <Link
//                         href={`/${lang}/videos/2`}
//                         style={{ textDecoration: "none" }}
//                       >
//                         <Box
//                           sx={{
//                             position: "relative",
//                             borderRadius: 3,
//                             overflow: "hidden",
//                           }}
//                         >
//                           <Box
//                             component="img"
//                             src={starshipImages.videos.preview2}
//                             sx={{
//                               width: "100%",
//                               height: 200,
//                               objectFit: "cover",
//                               display: "block",
//                               transition:
//                                 "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
//                               "&:hover": {
//                                 transform: "scale(1.04)",
//                                 boxShadow: 6,
//                               },
//                             }}
//                           />
//                           <Box
//                             sx={{
//                               position: "absolute",
//                               top: "50%",
//                               left: "50%",
//                               transform: "translate(-50%, -50%)",
//                               bgcolor: "rgba(255,255,255,0.9)",
//                               borderRadius: "50%",
//                               p: 1,
//                               boxShadow: 3,
//                             }}
//                           >
//                             <PlayArrow sx={{ fontSize: 36, color: "#111" }} />
//                           </Box>
//                         </Box>
//                       </Link>
//                     </Grid>
//                   </Grid>
//                 </Box>

//                 {/* Post 3 - single image, short text */}
//                 <Box
//                   sx={{
//                     p: 3,
//                     borderBottom: "1px solid",
//                     borderColor: "divider",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 2,
//                       mb: 2,
//                     }}
//                   >
//                     <Avatar src={starshipImages.avatar} />
//                     <Box sx={{ flex: 1 }}>
//                       <Typography fontWeight={600}>{profile.name}</Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         11h ago
//                       </Typography>
//                     </Box>
//                     <IconButton>
//                       <ExpandMore />
//                     </IconButton>
//                   </Box>
//                   <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
//                     Starship caught in golden hour light during the latest
//                     static fire test. The future is looking brighter than ever.
//                   </Typography>
//                   <Link
//                     href={`/${lang}/photos/3`}
//                     style={{ textDecoration: "none" }}
//                   >
//                     <Box
//                       component="img"
//                       src={starshipImages.postImages.post3[0]}
//                       sx={{
//                         width: "100%",
//                         height: 300,
//                         borderRadius: 3,
//                         objectFit: "cover",
//                         transition:
//                           "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
//                         "&:hover": { transform: "scale(1.04)", boxShadow: 6 },
//                       }}
//                     />
//                   </Link>
//                 </Box>

//                 {/* Post 4 - 4 images */}
//                 <Box
//                   sx={{
//                     p: 3,
//                     borderBottom: "1px solid",
//                     borderColor: "divider",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 2,
//                       mb: 2,
//                     }}
//                   >
//                     <Avatar src={starshipImages.avatar} />
//                     <Box sx={{ flex: 1 }}>
//                       <Typography fontWeight={600}>{profile.name}</Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         Yesterday
//                       </Typography>
//                     </Box>
//                     <IconButton>
//                       <MoreVert />
//                     </IconButton>
//                   </Box>
//                   <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
//                     Quick look at the new Starship prototype rolling out of the
//                     factory. Reusability is the name of the game.
//                   </Typography>
//                   <Grid container spacing={1.5}>
//                     {starshipImages.postImages.post4.map((url, i) => (
//                       <Grid size={3} key={i}>
//                         <Link
//                           href={`/${lang}/photos/${i + 10}`}
//                           style={{ textDecoration: "none" }}
//                         >
//                           <Box
//                             component="img"
//                             src={url}
//                             sx={{
//                               width: "100%",
//                               height: 180,
//                               borderRadius: 3,
//                               objectFit: "cover",
//                               transition:
//                                 "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
//                               "&:hover": {
//                                 transform: "scale(1.04)",
//                                 boxShadow: 6,
//                               },
//                             }}
//                           />
//                         </Link>
//                       </Grid>
//                     ))}
//                   </Grid>
//                 </Box>

//                 {/* Post 5 - video */}
//                 <Box
//                   sx={{
//                     p: 3,
//                     borderBottom: "1px solid",
//                     borderColor: "divider",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 2,
//                       mb: 2,
//                     }}
//                   >
//                     <Avatar src={starshipImages.avatar} />
//                     <Box sx={{ flex: 1 }}>
//                       <Typography fontWeight={600}>{profile.name}</Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         2d ago
//                       </Typography>
//                     </Box>
//                     <IconButton>
//                       <MoreVert />
//                     </IconButton>
//                   </Box>
//                   <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
//                     Testing the new Starship heat-shield tiles on the test
//                     stand. The engineering behind re-entry physics is
//                     mind-blowing.
//                   </Typography>
//                   <Link
//                     href={`/${lang}/videos/5`}
//                     style={{ textDecoration: "none" }}
//                   >
//                     <Box
//                       sx={{
//                         position: "relative",
//                         borderRadius: 4,
//                         overflow: "hidden",
//                         mb: 2,
//                       }}
//                     >
//                       <Box
//                         component="img"
//                         src={starshipImages.videos.preview1}
//                         sx={{
//                           width: "100%",
//                           display: "block",
//                           transition:
//                             "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
//                           "&:hover": {
//                             transform: "scale(1.04)",
//                             boxShadow: 6,
//                           },
//                         }}
//                       />
//                       <Box
//                         sx={{
//                           position: "absolute",
//                           top: "50%",
//                           left: "50%",
//                           transform: "translate(-50%, -50%)",
//                           bgcolor: "rgba(255,255,255,0.95)",
//                           borderRadius: "50%",
//                           p: 2,
//                           boxShadow: 4,
//                         }}
//                       >
//                         <PlayArrow sx={{ fontSize: 52, color: "#111" }} />
//                       </Box>
//                       <Box
//                         sx={{
//                           position: "absolute",
//                           bottom: 16,
//                           right: 16,
//                           bgcolor: "rgba(0,0,0,0.75)",
//                           color: "white",
//                           px: 2,
//                           py: 0.5,
//                           borderRadius: 1,
//                           fontSize: "0.875rem",
//                           fontWeight: 600,
//                         }}
//                       >
//                         1:45
//                       </Box>
//                     </Box>
//                   </Link>
//                 </Box>

//                 {/* Post 6 - 2 images */}
//                 <Box
//                   sx={{
//                     p: 3,
//                     borderBottom: "1px solid",
//                     borderColor: "divider",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 2,
//                       mb: 2,
//                     }}
//                   >
//                     <Avatar src={starshipImages.avatar} />
//                     <Box sx={{ flex: 1 }}>
//                       <Typography fontWeight={600}>{profile.name}</Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         3d ago
//                       </Typography>
//                     </Box>
//                     <IconButton>
//                       <ExpandMore />
//                     </IconButton>
//                   </Box>
//                   <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
//                     The team just finished the latest heat shield tile
//                     installation. Every tile brings us one step closer to the
//                     stars.
//                   </Typography>
//                   <Grid container spacing={1.5}>
//                     {starshipImages.postImages.post6.map((url, i) => (
//                       <Grid size={6} key={i}>
//                         <Link
//                           href={`/${lang}/photos/${i + 20}`}
//                           style={{ textDecoration: "none" }}
//                         >
//                           <Box
//                             component="img"
//                             src={url}
//                             sx={{
//                               width: "100%",
//                               height: 220,
//                               borderRadius: 3,
//                               objectFit: "cover",
//                               transition:
//                                 "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
//                               "&:hover": {
//                                 transform: "scale(1.04)",
//                                 boxShadow: 6,
//                               },
//                             }}
//                           />
//                         </Link>
//                       </Grid>
//                     ))}
//                   </Grid>
//                 </Box>

//                 {/* Post 7 - long text, single video */}
//                 <Box
//                   sx={{
//                     p: 3,
//                     borderBottom: "1px solid",
//                     borderColor: "divider",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 2,
//                       mb: 2,
//                     }}
//                   >
//                     <Avatar src={starshipImages.avatar} />
//                     <Box sx={{ flex: 1 }}>
//                       <Typography fontWeight={600}>{profile.name}</Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         4d ago
//                       </Typography>
//                     </Box>
//                     <IconButton>
//                       <MoreVert />
//                     </IconButton>
//                   </Box>
//                   <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
//                     After weeks of simulations we finally achieved stable
//                     orbital refueling in vacuum conditions. This is a historic
//                     milestone for Mars colonization. The implications for future
//                     missions are enormous.
//                   </Typography>
//                   <Link
//                     href={`/${lang}/videos/7`}
//                     style={{ textDecoration: "none" }}
//                   >
//                     <Box
//                       sx={{
//                         position: "relative",
//                         borderRadius: 4,
//                         overflow: "hidden",
//                         mb: 2,
//                       }}
//                     >
//                       <Box
//                         component="img"
//                         src={starshipImages.videos.preview2}
//                         sx={{
//                           width: "100%",
//                           display: "block",
//                           transition:
//                             "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
//                           "&:hover": {
//                             transform: "scale(1.04)",
//                             boxShadow: 6,
//                           },
//                         }}
//                       />
//                       <Box
//                         sx={{
//                           position: "absolute",
//                           top: "50%",
//                           left: "50%",
//                           transform: "translate(-50%, -50%)",
//                           bgcolor: "rgba(255,255,255,0.95)",
//                           borderRadius: "50%",
//                           p: 2,
//                           boxShadow: 4,
//                         }}
//                       >
//                         <PlayArrow sx={{ fontSize: 52, color: "#111" }} />
//                       </Box>
//                       <Box
//                         sx={{
//                           position: "absolute",
//                           bottom: 16,
//                           right: 16,
//                           bgcolor: "rgba(0,0,0,0.75)",
//                           color: "white",
//                           px: 2,
//                           py: 0.5,
//                           borderRadius: 1,
//                           fontSize: "0.875rem",
//                           fontWeight: 600,
//                         }}
//                       >
//                         3:12
//                       </Box>
//                     </Box>
//                   </Link>
//                 </Box>

//                 {/* Post 8 - 1 image, medium text */}
//                 <Box sx={{ p: 3 }}>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 2,
//                       mb: 2,
//                     }}
//                   >
//                     <Avatar src={starshipImages.avatar} />
//                     <Box sx={{ flex: 1 }}>
//                       <Typography fontWeight={600}>{profile.name}</Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         5d ago
//                       </Typography>
//                     </Box>
//                     <IconButton>
//                       <ExpandMore />
//                     </IconButton>
//                   </Box>
//                   <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
//                     The new Starship prototype is looking incredible. Every
//                     weld, every tile, every sensor is a testament to what
//                     humanity can achieve when we work together toward the stars.
//                   </Typography>
//                   <Link
//                     href={`/${lang}/photos/8`}
//                     style={{ textDecoration: "none" }}
//                   >
//                     <Box
//                       component="img"
//                       src={starshipImages.postImages.post3[0]}
//                       sx={{
//                         width: "100%",
//                         height: 280,
//                         borderRadius: 3,
//                         objectFit: "cover",
//                         transition:
//                           "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
//                         "&:hover": { transform: "scale(1.04)", boxShadow: 6 },
//                       }}
//                     />
//                   </Link>
//                 </Box>
//               </>
//             ) : (
//               <Box sx={{ p: 4 }}>
//                 <Typography variant="h5" gutterBottom fontWeight={600}>
//                   Latest Articles
//                 </Typography>

//                 <Box
//                   component={Link}
//                   href={`/${lang}/articles/1`}
//                   sx={{
//                     mb: 4,
//                     pb: 3,
//                     borderBottom: "1px solid",
//                     borderColor: "divider",
//                     display: "block",
//                     textDecoration: "none",
//                     color: "inherit",
//                     transition:
//                       "background-color 0.25s ease, box-shadow 0.25s ease",
//                     borderRadius: 2,
//                     "&:hover": { bgcolor: "action.hover", boxShadow: 2 },
//                   }}
//                 >
//                   <Typography variant="h6" gutterBottom>
//                     How Starship Will Change Interplanetary Travel Forever
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     color="text.secondary"
//                     sx={{ mb: 1 }}
//                   >
//                     May 10, 2026 • 8 min read
//                   </Typography>
//                   <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
//                     The latest flight test proved that full reusability is not
//                     just a dream — it's happening now. Here's what it means for
//                     Mars missions.
//                   </Typography>
//                 </Box>

//                 <Box
//                   component={Link}
//                   href={`/${lang}/articles/2`}
//                   sx={{
//                     mb: 4,
//                     pb: 3,
//                     borderBottom: "1px solid",
//                     borderColor: "divider",
//                     display: "block",
//                     textDecoration: "none",
//                     color: "inherit",
//                     transition:
//                       "background-color 0.25s ease, box-shadow 0.25s ease",
//                     borderRadius: 2,
//                     "&:hover": { bgcolor: "action.hover", boxShadow: 2 },
//                   }}
//                 >
//                   <Typography variant="h6" gutterBottom>
//                     Next.js 16 + MUI 7: The Perfect Stack for High-Performance
//                     Dashboards
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     color="text.secondary"
//                     sx={{ mb: 1 }}
//                   >
//                     May 8, 2026 • 6 min read
//                   </Typography>
//                   <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
//                     We just migrated our entire Starship telemetry platform. The
//                     new AppRouterCacheProvider eliminated all styling issues.
//                   </Typography>
//                 </Box>

//                 <Box
//                   component={Link}
//                   href={`/${lang}/articles/3`}
//                   sx={{
//                     display: "block",
//                     textDecoration: "none",
//                     color: "inherit",
//                     transition:
//                       "background-color 0.25s ease, box-shadow 0.25s ease",
//                     borderRadius: 2,
//                     "&:hover": { bgcolor: "action.hover", boxShadow: 2 },
//                   }}
//                 >
//                   <Typography variant="h6" gutterBottom>
//                     Orbital Refueling: The Key to Mars Colonization
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     color="text.secondary"
//                     sx={{ mb: 1 }}
//                   >
//                     May 5, 2026 • 12 min read
//                   </Typography>
//                   <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
//                     Detailed breakdown of the latest successful refueling test
//                     and why this technology will change everything.
//                   </Typography>
//                 </Box>
//               </Box>
//             )}
//           </Paper>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// // app/[lang]/my-page/page.tsx
// "use client";
// import * as React from "react";
// import {
//   Container,
//   Typography,
//   Box,
//   Avatar,
//   Button,
//   Paper,
//   IconButton,
//   TextField,
//   Tabs,
//   Tab,
//   Divider,
//   List,
//   ListItem,
//   ListItemAvatar,
//   ListItemText,
//   Stack,
// } from "@mui/material";
// import Grid from "@mui/material/Grid";
// import Link from "next/link";
// import { useParams } from "next/navigation";
// import {
//   Edit,
//   BarChart,
//   PlayArrow,
//   Search,
//   ExpandMore,
//   Image as ImageIcon,
//   Videocam,
//   InsertEmoticon,
//   LocationOn,
//   MoreVert,
//   AddPhotoAlternate,
// } from "@mui/icons-material";
// import { useNavigation } from "@/app/[lang]/contexts/navigation-context";

// export default function MyPage() {
//   const { dict } = useNavigation();
//   const params = useParams();
//   const lang = (params?.lang as string) || "en";

//   const [tabValue, setTabValue] = React.useState(0);

//   const profile = {
//     name: "Alex Rivera",
//     status:
//       "Passionate about space exploration, building the future with Next.js 16, MUI 7, reusable rockets, and open-source Starship tech. ",
//     birthday: "May 12, 1995",
//     city: "Austin, Texas",
//     activity: "Working on a new orbital launch simulation tool",
//   };

//   const starshipImages = {
//     profile: "/images/2.14.22_PolarisAnnouncement_Starship_Desktop.jpg",
//     avatar: "/images/Eva_Suit_Desktop_alternate_1cf9bae18e.jpg",
//     achievements: [
//       "/images/DART_LAUNCHES_DESKTOP.jpg",
//       "/images/Flight_3_Lift_Off_20240314_001203_db0985992e.jpg",
//       "/images/Flight_6_Drone_20241119000503_94437af67f.jpg",
//       "/images/Flight_10_Liftoff_Drone1_a2508261134_36972204cc.jpg",
//       "/images/Flight_11_Onboards_2510162827_2699d9bfed.jpg",
//       "/images/Flight_7_Onboard_20250121001410_066c4348a8.jpg",
//     ],
//     friends: [
//       "/images/dear_Moon_Key_Visual_Final_2fdfb55422.jpg",
//       "/images/Flight_8_Onboard_160af4d80b.jpg",
//       "/images/Flight_9_Onboards_a2505290345_5463f84590.jpg",
//       "/images/Dragon_West_Coast_Recovery_8afdffe48d.jpg",
//       "/images/Crew_Displays_236ec85aec.png",
//       "/images/Falcon_Clear_Areas_c4081a68c6.jpg",
//     ],
//     subscriptions: {
//       SpaceX: "/images/2.14.22_PolarisAnnouncement_Starship_Desktop.jpg",
//       Neuralink: "/images/Neuralink-Device.jpg",
//       Tesla: "/images/cybercab.jpeg",
//       xAI: "/images/Flight_3_Lift_Off_20240314_001203_db0985992e.jpg",
//     },
//     photos: [
//       "/images/10_28_25_cabin_06_30a49f27a3.jpg",
//       "/images/Flight_6_Drone_20241119000503_94437af67f.jpg",
//       "/images/Flight_10_Liftoff_Drone1_a2508261134_36972204cc.jpg",
//       "/images/Flight_11_Onboards_2510162827_2699d9bfed.jpg",
//     ],
//     postImages: {
//       post1: [
//         "/images/DART_LAUNCHES_DESKTOP.jpg",
//         "/images/Flight_3_Lift_Off_20240314_001203_db0985992e.jpg",
//         "/images/Flight_6_Drone_20241119000503_94437af67f.jpg",
//       ],
//       post2: [
//         "/images/Flight_7_Onboard_20250121001410_066c4348a8.jpg",
//         "/images/Flight_8_Onboard_160af4d80b.jpg",
//       ],
//       post3: ["/images/2.14.22_PolarisAnnouncement_Starship_Desktop.jpg"],
//       post4: [
//         "/images/Flight_9_Onboards_a2505290345_5463f84590.jpg",
//         "/images/Flight_10_Liftoff_Drone1_a2508261134_36972204cc.jpg",
//         "/images/Flight_11_Onboards_2510162827_2699d9bfed.jpg",
//         "/images/dear_Moon_Key_Visual_Final_2fdfb55422.jpg",
//       ],
//       post6: [
//         "/images/Dragon_West_Coast_Recovery_8afdffe48d.jpg",
//         "/images/Crew_Displays_236ec85aec.png",
//       ],
//     },
//     videos: {
//       preview1: "/images/Flight_3_Lift_Off_20240314_001203_db0985992e.jpg",
//       preview2: "/images/Flight_10_Liftoff_Drone1_a2508261134_36972204cc.jpg",
//     },
//   };

//   const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
//     setTabValue(newValue);
//   };

//   return (
//     <Container maxWidth="xl" sx={{ py: 5 }}>
//       <Grid container spacing={4}>
//         {/* LEFT COLUMN — 30% width on desktop */}
//         <Grid size={{ xs: 12, md: 4 }}>
//           {/* 1. User Profile Picture Area */}
//           <Paper
//             elevation={3}
//             sx={{ p: 3, mb: 4, textAlign: "center", borderRadius: 4 }}
//           >
//             <Link href={`/${lang}/profile`} style={{ textDecoration: "none" }}>
//               <Box
//                 component="img"
//                 src={starshipImages.profile}
//                 alt="Starship Profile"
//                 sx={{
//                   width: "100%",
//                   height: 340,
//                   objectFit: "cover",
//                   borderRadius: 4,
//                   mb: 3,
//                   boxShadow: 4,
//                   display: "block",
//                   transition:
//                     "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease",
//                   "&:hover": { transform: "scale(1.03)", boxShadow: 8 },
//                 }}
//               />
//             </Link>
//             <Stack direction="row" spacing={2} justifyContent="center">
//               <Button
//                 variant="contained"
//                 startIcon={<Edit />}
//                 size="medium"
//                 fullWidth
//                 sx={{ maxWidth: 160 }}
//               >
//                 Edit
//               </Button>
//               <Button
//                 variant="outlined"
//                 startIcon={<BarChart />}
//                 size="medium"
//                 fullWidth
//                 sx={{ maxWidth: 160 }}
//               >
//                 Statistics
//               </Button>
//             </Stack>
//           </Paper>

//           {/* MOBILE-ONLY: User Description Area */}
//           <Box sx={{ display: { xs: "block", md: "none" } }}>
//             <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 4 }}>
//               <Typography variant="h3" component="h1" fontWeight={700}>
//                 {profile.name}
//               </Typography>

//               {/* Online status — now placed under the name */}
//               <Box
//                 sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}
//               >
//                 <Box
//                   sx={{
//                     width: 12,
//                     height: 12,
//                     bgcolor: "#4ade80",
//                     borderRadius: "50%",
//                     boxShadow: "0 0 0 4px rgba(74, 222, 128, 0.3)",
//                   }}
//                 />
//                 <Typography color="success.main" fontWeight={600}>
//                   Online
//                 </Typography>
//               </Box>

//               <Typography
//                 variant="body1"
//                 color="text.secondary"
//                 sx={{ mb: 4, lineHeight: 1.7, mt: 3 }}
//               >
//                 {profile.status}
//               </Typography>

//               <Box sx={{ mb: 4 }}>
//                 <Box sx={{ display: "flex", gap: 3, mb: 1.5 }}>
//                   <Typography sx={{ minWidth: 100 }}>
//                     <strong>Birthday</strong>
//                   </Typography>
//                   <Typography
//                     component={Link}
//                     href={`/${lang}/profile/birthday`}
//                     color="text.secondary"
//                     sx={{
//                       textDecoration: "none",
//                       transition: "color 0.25s ease",
//                       "&:hover": { color: "primary.main" },
//                     }}
//                   >
//                     {profile.birthday}
//                   </Typography>
//                 </Box>
//                 <Box sx={{ display: "flex", gap: 3, mb: 1.5 }}>
//                   <Typography sx={{ minWidth: 100 }}>
//                     <strong>City</strong>
//                   </Typography>
//                   <Typography
//                     component={Link}
//                     href={`/${lang}/profile/city`}
//                     color="text.secondary"
//                     sx={{
//                       textDecoration: "none",
//                       transition: "color 0.25s ease",
//                       "&:hover": { color: "primary.main" },
//                     }}
//                   >
//                     {profile.city}
//                   </Typography>
//                 </Box>
//                 <Box sx={{ display: "flex", gap: 3, mb: 1.5 }}>
//                   <Typography sx={{ minWidth: 100 }}>
//                     <strong>Activity</strong>
//                   </Typography>
//                   <Typography
//                     component={Link}
//                     href={`/${lang}/profile/activity`}
//                     color="primary.main"
//                     sx={{
//                       textDecoration: "none",
//                       transition: "color 0.25s ease",
//                       "&:hover": { color: "primary.dark" },
//                     }}
//                   >
//                     {profile.activity}
//                   </Typography>
//                 </Box>
//               </Box>

//               <Grid container spacing={2} sx={{ textAlign: "center" }}>
//                 {[
//                   { count: "450", label: "friends", href: `/${lang}/friends` },
//                   {
//                     count: "378",
//                     label: "subscribers",
//                     href: `/${lang}/subscribers`,
//                   },
//                   { count: "153", label: "photos", href: `/${lang}/photos` },
//                   { count: "32", label: "mentions", href: `/${lang}/mentions` },
//                   { count: "230", label: "videos", href: `/${lang}/videos` },
//                   { count: "10k", label: "audios", href: `/${lang}/audios` },
//                 ].map((stat, index) => (
//                   <Grid size={{ xs: 4, sm: 2 }} key={index}>
//                     <Link
//                       href={stat.href}
//                       style={{ textDecoration: "none", color: "inherit" }}
//                     >
//                       <Box
//                         sx={{
//                           transition:
//                             "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
//                           "&:hover": { transform: "scale(1.08)" },
//                         }}
//                       >
//                         <Typography
//                           variant="h4"
//                           fontWeight={700}
//                           color="primary.main"
//                         >
//                           {stat.count}
//                         </Typography>
//                         <Typography
//                           variant="body2"
//                           color="text.secondary"
//                           textTransform="capitalize"
//                         >
//                           {stat.label}
//                         </Typography>
//                       </Box>
//                     </Link>
//                   </Grid>
//                 ))}
//               </Grid>
//             </Paper>
//           </Box>

//           {/* 2. Achievements Area */}
//           <Paper sx={{ p: 3, mb: 4 }}>
//             <Box
//               component={Link}
//               href={`/${lang}/achievements`}
//               sx={{
//                 display: "inline-block",
//                 textDecoration: "none",
//                 color: "inherit",
//                 transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
//                 "&:hover": { transform: "scale(1.08)" },
//               }}
//             >
//               <Typography
//                 variant="h6"
//                 fontWeight={100}
//                 sx={{ fontFamily: "var(--font-roboto)", mb: 2 }}
//               >
//                 Achievements 310
//               </Typography>
//             </Box>
//             <Grid container spacing={1.5}>
//               {starshipImages.achievements.map((url, i) => (
//                 <Grid size={4} key={i}>
//                   <Link
//                     href={`/${lang}/achievements/${i + 1}`}
//                     style={{ textDecoration: "none" }}
//                   >
//                     <Box
//                       component="img"
//                       src={url}
//                       sx={{
//                         width: "100%",
//                         aspectRatio: "1/1",
//                         borderRadius: 3,
//                         objectFit: "cover",
//                         transition:
//                           "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
//                         "&:hover": { transform: "scale(1.04)", boxShadow: 6 },
//                       }}
//                     />
//                   </Link>
//                 </Grid>
//               ))}
//             </Grid>
//           </Paper>

//           {/* 3. Friends Area */}
//           <Paper sx={{ p: 3, mb: 4 }}>
//             <Box
//               component={Link}
//               href={`/${lang}/friends`}
//               sx={{
//                 display: "inline-block",
//                 textDecoration: "none",
//                 color: "inherit",
//                 transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
//                 "&:hover": { transform: "scale(1.08)" },
//               }}
//             >
//               <Typography
//                 variant="h6"
//                 fontWeight={100}
//                 sx={{ fontFamily: "var(--font-roboto)", mb: 2 }}
//               >
//                 Friends 450
//               </Typography>
//             </Box>
//             <Grid container spacing={1.5}>
//               {starshipImages.friends.map((url, i) => (
//                 <Grid size={4} key={i}>
//                   <Link
//                     href={`/${lang}/friends/${i + 1}`}
//                     style={{ textDecoration: "none" }}
//                   >
//                     <Avatar
//                       src={url}
//                       sx={{
//                         width: "100%",
//                         height: "auto",
//                         aspectRatio: "1/1",
//                         borderRadius: 3,
//                         transition:
//                           "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
//                         "&:hover": { transform: "scale(1.04)", boxShadow: 6 },
//                       }}
//                     />
//                   </Link>
//                 </Grid>
//               ))}
//             </Grid>
//           </Paper>

//           {/* 4. Subscriptions Area */}
//           <Paper sx={{ p: 3, mb: 4 }}>
//             <Box
//               component={Link}
//               href={`/${lang}/subscriptions`}
//               sx={{
//                 display: "inline-block",
//                 textDecoration: "none",
//                 color: "inherit",
//                 transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
//                 "&:hover": { transform: "scale(1.08)" },
//               }}
//             >
//               <Typography
//                 variant="h6"
//                 fontWeight={100}
//                 sx={{ fontFamily: "var(--font-roboto)", mb: 2 }}
//               >
//                 Subscriptions 230
//               </Typography>
//             </Box>
//             <List dense>
//               {[
//                 {
//                   name: "SpaceX",
//                   img: starshipImages.subscriptions.SpaceX,
//                   id: 1,
//                 },
//                 {
//                   name: "Neuralink",
//                   img: starshipImages.subscriptions.Neuralink,
//                   id: 2,
//                 },
//                 {
//                   name: "Tesla",
//                   img: starshipImages.subscriptions.Tesla,
//                   id: 3,
//                 },
//                 { name: "xAI", img: starshipImages.subscriptions.xAI, id: 4 },
//               ].map((sub) => (
//                 <ListItem
//                   key={sub.id}
//                   component={Link}
//                   href={`/${lang}/subscriptions/${sub.id}`}
//                   style={{ textDecoration: "none", color: "inherit" }}
//                   sx={{
//                     px: 0,
//                     py: 1,
//                     borderRadius: 2,
//                     transition:
//                       "background-color 0.25s ease, transform 0.25s ease",
//                     "&:hover": {
//                       bgcolor: "action.hover",
//                       transform: "translateX(4px)",
//                     },
//                   }}
//                 >
//                   <ListItemAvatar>
//                     <Avatar src={sub.img} sx={{ width: 36, height: 36 }} />
//                   </ListItemAvatar>
//                   <ListItemText primary={sub.name} />
//                 </ListItem>
//               ))}
//             </List>
//           </Paper>

//           {/* MOBILE-ONLY: My Photos Area */}
//           <Box sx={{ display: { xs: "block", md: "none" } }}>
//             <Paper sx={{ p: 3, mb: 4 }}>
//               <Box
//                 component={Link}
//                 href={`/${lang}/photos`}
//                 sx={{
//                   display: "inline-block",
//                   textDecoration: "none",
//                   color: "inherit",
//                   transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
//                   "&:hover": { transform: "scale(1.08)" },
//                 }}
//               >
//                 <Typography
//                   variant="h6"
//                   fontWeight={100}
//                   sx={{ fontFamily: "var(--font-roboto)", mb: 2 }}
//                 >
//                   My Photos 151
//                 </Typography>
//               </Box>
//               <Grid container spacing={1.5}>
//                 {starshipImages.photos.map((url, i) => (
//                   <Grid size={{ xs: 6, sm: 3 }} key={i}>
//                     <Link
//                       href={`/${lang}/photos/${i + 1}`}
//                       style={{ textDecoration: "none" }}
//                     >
//                       <Box
//                         component="img"
//                         src={url}
//                         sx={{
//                           width: "100%",
//                           aspectRatio: "1/1",
//                           borderRadius: 3,
//                           objectFit: "cover",
//                           transition:
//                             "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
//                           "&:hover": { transform: "scale(1.04)", boxShadow: 6 },
//                         }}
//                       />
//                     </Link>
//                   </Grid>
//                 ))}
//               </Grid>
//             </Paper>
//           </Box>

//           {/* 5. Audios Area */}
//           <Paper sx={{ p: 3, mb: 4 }}>
//             <Box
//               component={Link}
//               href={`/${lang}/audios`}
//               sx={{
//                 display: "inline-block",
//                 textDecoration: "none",
//                 color: "inherit",
//                 transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
//                 "&:hover": { transform: "scale(1.08)" },
//               }}
//             >
//               <Typography
//                 variant="h6"
//                 fontWeight={100}
//                 sx={{ fontFamily: "var(--font-roboto)", mb: 2 }}
//               >
//                 Audios
//               </Typography>
//             </Box>
//             <List dense>
//               {[
//                 { title: "Starship Launch Audio", duration: "3:45" },
//                 { title: "Next.js 16 Deep Dive", duration: "12:20" },
//                 { title: "Rocket Science 101", duration: "8:10" },
//               ].map((audio, i) => (
//                 <ListItem
//                   key={i}
//                   sx={{
//                     px: 0,
//                     py: 1,
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       width: "100%",
//                       borderRadius: 2,
//                       transition:
//                         "background-color 0.25s ease, transform 0.25s ease",
//                       "&:hover": {
//                         bgcolor: "action.hover",
//                         transform: "translateX(4px)",
//                       },
//                     }}
//                   >
//                     <IconButton sx={{ mr: 1.5 }}>
//                       <PlayArrow />
//                     </IconButton>
//                     <Box
//                       component={Link}
//                       href={`/${lang}/audios?title=${encodeURIComponent(
//                         audio.title,
//                       )}`}
//                       sx={{
//                         flex: 1,
//                         textDecoration: "none",
//                         color: "inherit",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "space-between",
//                       }}
//                     >
//                       <ListItemText primary={audio.title} />
//                       <Typography variant="body2" color="text.secondary">
//                         {audio.duration}
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </ListItem>
//               ))}
//             </List>
//           </Paper>

//           {/* 6. Videos Area — with hover effect on title */}
//           <Paper sx={{ p: 3 }}>
//             <Box
//               component={Link}
//               href={`/${lang}/videos`}
//               sx={{
//                 display: "inline-block",
//                 textDecoration: "none",
//                 color: "inherit",
//                 transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
//                 "&:hover": { transform: "scale(1.08)" },
//               }}
//             >
//               <Typography
//                 variant="h6"
//                 fontWeight={100}
//                 sx={{ fontFamily: "var(--font-roboto)", mb: 2 }}
//               >
//                 Videos 130
//               </Typography>
//             </Box>

//             <Stack spacing={3}>
//               {[1, 2].map((i) => (
//                 <Link
//                   key={i}
//                   href={`/${lang}/videos/${i}`}
//                   style={{ textDecoration: "none" }}
//                 >
//                   <Box
//                     sx={{
//                       position: "relative",
//                       borderRadius: 4,
//                       overflow: "hidden",
//                       mb: 1,
//                     }}
//                   >
//                     <Box
//                       component="img"
//                       src={
//                         i === 1
//                           ? starshipImages.videos.preview1
//                           : starshipImages.videos.preview2
//                       }
//                       sx={{
//                         width: "100%",
//                         aspectRatio: "16/9",
//                         objectFit: "cover",
//                         display: "block",
//                         transition:
//                           "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
//                         "&:hover": {
//                           transform: "scale(1.04)",
//                           boxShadow: 6,
//                         },
//                       }}
//                     />

//                     <Box
//                       sx={{
//                         position: "absolute",
//                         top: "50%",
//                         left: "50%",
//                         transform: "translate(-50%, -50%)",
//                         bgcolor: "rgba(255,255,255,0.95)",
//                         borderRadius: "50%",
//                         p: 1,
//                         boxShadow: 4,
//                       }}
//                     >
//                       <PlayArrow sx={{ fontSize: 40, color: "#111" }} />
//                     </Box>

//                     <Box
//                       sx={{
//                         position: "absolute",
//                         bottom: 0,
//                         left: 0,
//                         right: 0,
//                         bgcolor: "rgba(0, 0, 0, 0.45)",
//                         color: "white",
//                         px: 2.5,
//                         py: 1,
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "space-between",
//                         gap: 2,
//                         zIndex: 2,
//                       }}
//                     >
//                       <Typography
//                         variant="subtitle1"
//                         fontWeight={500}
//                         sx={{
//                           flex: 1,
//                           whiteSpace: "nowrap",
//                           overflow: "hidden",
//                           textOverflow: "ellipsis",
//                           fontSize: "0.95rem",
//                           lineHeight: 1.3,
//                         }}
//                       >
//                         Starship Integrated Flight Test {i}
//                       </Typography>

//                       <Box
//                         sx={{
//                           bgcolor: "rgba(0,0,0,0.6)",
//                           color: "white",
//                           px: 1.75,
//                           py: 0.4,
//                           borderRadius: 1,
//                           fontSize: "0.8rem",
//                           fontWeight: 600,
//                           flexShrink: 0,
//                         }}
//                       >
//                         3:12
//                       </Box>
//                     </Box>
//                   </Box>
//                 </Link>
//               ))}
//             </Stack>
//           </Paper>
//         </Grid>

//         {/* RIGHT COLUMN — 70% width on desktop */}
//         <Grid size={{ xs: 12, md: 8 }}>
//           {/* DESKTOP-ONLY: User Description Area */}
//           <Box sx={{ display: { xs: "none", md: "block" } }}>
//             <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 4 }}>
//               <Typography variant="h3" component="h1" fontWeight={700}>
//                 {profile.name}
//               </Typography>

//               {/* Online status — now placed under the name */}
//               <Box
//                 sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}
//               >
//                 <Box
//                   sx={{
//                     width: 12,
//                     height: 12,
//                     bgcolor: "#4ade80",
//                     borderRadius: "50%",
//                     boxShadow: "0 0 0 4px rgba(74, 222, 128, 0.3)",
//                   }}
//                 />
//                 <Typography color="success.main" fontWeight={600}>
//                   Online
//                 </Typography>
//               </Box>

//               <Typography
//                 variant="body1"
//                 color="text.secondary"
//                 sx={{ mb: 4, lineHeight: 1.7, mt: 3 }}
//               >
//                 {profile.status}
//               </Typography>

//               <Box sx={{ mb: 4 }}>
//                 <Box sx={{ display: "flex", gap: 3, mb: 1.5 }}>
//                   <Typography sx={{ minWidth: 100 }}>
//                     <strong>Birthday</strong>
//                   </Typography>
//                   <Typography
//                     component={Link}
//                     href={`/${lang}/profile/birthday`}
//                     color="text.secondary"
//                     sx={{
//                       textDecoration: "none",
//                       transition: "color 0.25s ease",
//                       "&:hover": { color: "primary.main" },
//                     }}
//                   >
//                     {profile.birthday}
//                   </Typography>
//                 </Box>
//                 <Box sx={{ display: "flex", gap: 3, mb: 1.5 }}>
//                   <Typography sx={{ minWidth: 100 }}>
//                     <strong>City</strong>
//                   </Typography>
//                   <Typography
//                     component={Link}
//                     href={`/${lang}/profile/city`}
//                     color="text.secondary"
//                     sx={{
//                       textDecoration: "none",
//                       transition: "color 0.25s ease",
//                       "&:hover": { color: "primary.main" },
//                     }}
//                   >
//                     {profile.city}
//                   </Typography>
//                 </Box>
//                 <Box sx={{ display: "flex", gap: 3, mb: 1.5 }}>
//                   <Typography sx={{ minWidth: 100 }}>
//                     <strong>Activity</strong>
//                   </Typography>
//                   <Typography
//                     component={Link}
//                     href={`/${lang}/profile/activity`}
//                     color="primary.main"
//                     sx={{
//                       textDecoration: "none",
//                       transition: "color 0.25s ease",
//                       "&:hover": { color: "primary.dark" },
//                     }}
//                   >
//                     {profile.activity}
//                   </Typography>
//                 </Box>
//               </Box>

//               <Grid container spacing={2} sx={{ textAlign: "center" }}>
//                 {[
//                   { count: "450", label: "friends", href: `/${lang}/friends` },
//                   {
//                     count: "378",
//                     label: "subscribers",
//                     href: `/${lang}/subscribers`,
//                   },
//                   { count: "153", label: "photos", href: `/${lang}/photos` },
//                   { count: "32", label: "mentions", href: `/${lang}/mentions` },
//                   { count: "230", label: "videos", href: `/${lang}/videos` },
//                   { count: "10k", label: "audios", href: `/${lang}/audios` },
//                 ].map((stat, index) => (
//                   <Grid size={{ xs: 4, sm: 2 }} key={index}>
//                     <Link
//                       href={stat.href}
//                       style={{ textDecoration: "none", color: "inherit" }}
//                     >
//                       <Box
//                         sx={{
//                           transition:
//                             "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
//                           "&:hover": { transform: "scale(1.08)" },
//                         }}
//                       >
//                         <Typography
//                           variant="h4"
//                           fontWeight={700}
//                           color="primary.main"
//                         >
//                           {stat.count}
//                         </Typography>
//                         <Typography
//                           variant="body2"
//                           color="text.secondary"
//                           textTransform="capitalize"
//                         >
//                           {stat.label}
//                         </Typography>
//                       </Box>
//                     </Link>
//                   </Grid>
//                 ))}
//               </Grid>
//             </Paper>
//           </Box>

//           {/* DESKTOP-ONLY: My Photos Area */}
//           <Box sx={{ display: { xs: "none", md: "block" } }}>
//             <Paper sx={{ p: 3, mb: 4 }}>
//               <Box
//                 component={Link}
//                 href={`/${lang}/photos`}
//                 sx={{
//                   display: "inline-block",
//                   textDecoration: "none",
//                   color: "inherit",
//                   transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
//                   "&:hover": { transform: "scale(1.08)" },
//                 }}
//               >
//                 <Typography
//                   variant="h6"
//                   fontWeight={100}
//                   sx={{ fontFamily: "var(--font-roboto)", mb: 2 }}
//                 >
//                   My Photos 151
//                 </Typography>
//               </Box>
//               <Grid container spacing={1.5}>
//                 {starshipImages.photos.map((url, i) => (
//                   <Grid size={{ xs: 6, sm: 3 }} key={i}>
//                     <Link
//                       href={`/${lang}/photos/${i + 1}`}
//                       style={{ textDecoration: "none" }}
//                     >
//                       <Box
//                         component="img"
//                         src={url}
//                         sx={{
//                           width: "100%",
//                           aspectRatio: "1/1",
//                           borderRadius: 3,
//                           objectFit: "cover",
//                           transition:
//                             "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
//                           "&:hover": { transform: "scale(1.04)", boxShadow: 6 },
//                         }}
//                       />
//                     </Link>
//                   </Grid>
//                 ))}
//               </Grid>
//             </Paper>
//           </Box>

//           {/* NEW POST AREA — DESKTOP = original, MOBILE = improved */}
//           {/* Desktop version (original compact layout) */}
//           <Box sx={{ display: { xs: "none", md: "block" } }}>
//             <Paper sx={{ p: 2, mb: 4, borderRadius: 4 }}>
//               <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//                 <Avatar
//                   src={starshipImages.avatar}
//                   sx={{ width: 48, height: 48 }}
//                 />
//                 <TextField
//                   fullWidth
//                   placeholder="What's happening in the universe today?"
//                   variant="outlined"
//                   size="small"
//                   sx={{
//                     "& .MuiOutlinedInput-root": {
//                       borderRadius: 6,
//                       bgcolor: "background.paper",
//                       py: 1.5,
//                     },
//                   }}
//                   InputProps={{
//                     endAdornment: (
//                       <Stack direction="row" spacing={0.5}>
//                         <IconButton color="primary">
//                           <ImageIcon />
//                         </IconButton>
//                         <IconButton color="primary">
//                           <Videocam />
//                         </IconButton>
//                         <IconButton color="primary">
//                           <InsertEmoticon />
//                         </IconButton>
//                         <IconButton color="primary">
//                           <LocationOn />
//                         </IconButton>
//                         <IconButton color="primary">
//                           <AddPhotoAlternate />
//                         </IconButton>
//                       </Stack>
//                     ),
//                   }}
//                 />
//               </Box>
//             </Paper>
//           </Box>

//           {/* Mobile version (improved layout) */}
//           <Box sx={{ display: { xs: "block", md: "none" } }}>
//             <Paper sx={{ p: 3, mb: 4, borderRadius: 4 }}>
//               <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
//                 <Avatar
//                   src={starshipImages.avatar}
//                   sx={{ width: 48, height: 48, flexShrink: 0 }}
//                 />
//                 <Box sx={{ flex: 1 }}>
//                   <TextField
//                     fullWidth
//                     multiline
//                     minRows={2}
//                     maxRows={6}
//                     placeholder="What's happening in the universe today?"
//                     variant="outlined"
//                     sx={{
//                       "& .MuiOutlinedInput-root": {
//                         borderRadius: 6,
//                         bgcolor: "background.paper",
//                         py: 1.5,
//                       },
//                     }}
//                   />

//                   <Stack
//                     direction="row"
//                     spacing={1}
//                     sx={{
//                       mt: 2,
//                       justifyContent: "space-around",
//                     }}
//                   >
//                     <IconButton color="primary" size="small">
//                       <ImageIcon />
//                     </IconButton>
//                     <IconButton color="primary" size="small">
//                       <Videocam />
//                     </IconButton>
//                     <IconButton color="primary" size="small">
//                       <InsertEmoticon />
//                     </IconButton>
//                     <IconButton color="primary" size="small">
//                       <LocationOn />
//                     </IconButton>
//                     <IconButton color="primary" size="small">
//                       <AddPhotoAlternate />
//                     </IconButton>
//                   </Stack>
//                 </Box>
//               </Box>
//             </Paper>
//           </Box>

//           {/* User Posts Area — improved responsive media */}
//           <Paper sx={{ borderRadius: 4, overflow: "hidden" }}>
//             <Box sx={{ borderBottom: 1, borderColor: "divider", px: 3, pt: 1 }}>
//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <Tabs
//                   value={tabValue}
//                   onChange={handleTabChange}
//                   sx={{ minHeight: 52 }}
//                 >
//                   <Tab label="Posts" />
//                   <Tab label="Articles" />
//                 </Tabs>
//                 <IconButton>
//                   <Search />
//                 </IconButton>
//               </Box>
//             </Box>

//             <Divider />

//             {tabValue === 0 ? (
//               <>
//                 {/* Post 1 - 3 images (responsive grid) */}
//                 <Box
//                   sx={{
//                     p: 3,
//                     borderBottom: "1px solid",
//                     borderColor: "divider",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 2,
//                       mb: 2,
//                     }}
//                   >
//                     <Avatar src={starshipImages.avatar} />
//                     <Box sx={{ flex: 1 }}>
//                       <Typography fontWeight={600}>{profile.name}</Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         2h ago • Public
//                       </Typography>
//                     </Box>
//                     <IconButton>
//                       <ExpandMore />
//                     </IconButton>
//                   </Box>
//                   <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
//                     Just integrated Next.js 16 with MUI 7 in our production app
//                     router setup. The new AppRouterCacheProvider + ThemeProvider
//                     combo gives us perfect SSR styling and zero flash of
//                     unstyled content. Huge win for our Starship telemetry
//                     dashboard!
//                   </Typography>
//                   <Grid container spacing={1.5}>
//                     {starshipImages.postImages.post1.map((url, i) => (
//                       <Grid size={{ xs: 6, md: 4 }} key={i}>
//                         <Link
//                           href={`/${lang}/photos/${i + 1}`}
//                           style={{ textDecoration: "none" }}
//                         >
//                           <Box
//                             component="img"
//                             src={url}
//                             sx={{
//                               width: "100%",
//                               aspectRatio: "16/9",
//                               borderRadius: 3,
//                               objectFit: "cover",
//                               transition:
//                                 "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
//                               "&:hover": {
//                                 transform: "scale(1.04)",
//                                 boxShadow: 6,
//                               },
//                             }}
//                           />
//                         </Link>
//                       </Grid>
//                     ))}
//                   </Grid>
//                 </Box>

//                 {/* Post 2 - 2 video previews */}
//                 <Box
//                   sx={{
//                     p: 3,
//                     borderBottom: "1px solid",
//                     borderColor: "divider",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 2,
//                       mb: 2,
//                     }}
//                   >
//                     <Avatar src={starshipImages.avatar} />
//                     <Box sx={{ flex: 1 }}>
//                       <Typography fontWeight={600}>{profile.name}</Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         2d ago
//                       </Typography>
//                     </Box>
//                     <IconButton>
//                       <MoreVert />
//                     </IconButton>
//                   </Box>
//                   <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
//                     Orbital refueling simulation just completed successfully.
//                     This is the key to getting to Mars.
//                   </Typography>
//                   <Grid container spacing={1.5}>
//                     <Grid size={6}>
//                       <Link
//                         href={`/${lang}/videos/1`}
//                         style={{ textDecoration: "none" }}
//                       >
//                         <Box
//                           sx={{
//                             position: "relative",
//                             borderRadius: 3,
//                             overflow: "hidden",
//                           }}
//                         >
//                           <Box
//                             component="img"
//                             src={starshipImages.videos.preview1}
//                             sx={{
//                               width: "100%",
//                               aspectRatio: "16/9",
//                               objectFit: "cover",
//                               display: "block",
//                               transition:
//                                 "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
//                               "&:hover": {
//                                 transform: "scale(1.04)",
//                                 boxShadow: 6,
//                               },
//                             }}
//                           />
//                           <Box
//                             sx={{
//                               position: "absolute",
//                               top: "50%",
//                               left: "50%",
//                               transform: "translate(-50%, -50%)",
//                               bgcolor: "rgba(255,255,255,0.9)",
//                               borderRadius: "50%",
//                               p: 1,
//                               boxShadow: 3,
//                             }}
//                           >
//                             <PlayArrow sx={{ fontSize: 36, color: "#111" }} />
//                           </Box>
//                         </Box>
//                       </Link>
//                     </Grid>
//                     <Grid size={6}>
//                       <Link
//                         href={`/${lang}/videos/2`}
//                         style={{ textDecoration: "none" }}
//                       >
//                         <Box
//                           sx={{
//                             position: "relative",
//                             borderRadius: 3,
//                             overflow: "hidden",
//                           }}
//                         >
//                           <Box
//                             component="img"
//                             src={starshipImages.videos.preview2}
//                             sx={{
//                               width: "100%",
//                               aspectRatio: "16/9",
//                               objectFit: "cover",
//                               display: "block",
//                               transition:
//                                 "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
//                               "&:hover": {
//                                 transform: "scale(1.04)",
//                                 boxShadow: 6,
//                               },
//                             }}
//                           />
//                           <Box
//                             sx={{
//                               position: "absolute",
//                               top: "50%",
//                               left: "50%",
//                               transform: "translate(-50%, -50%)",
//                               bgcolor: "rgba(255,255,255,0.9)",
//                               borderRadius: "50%",
//                               p: 1,
//                               boxShadow: 3,
//                             }}
//                           >
//                             <PlayArrow sx={{ fontSize: 36, color: "#111" }} />
//                           </Box>
//                         </Box>
//                       </Link>
//                     </Grid>
//                   </Grid>
//                 </Box>

//                 {/* Post 3 - single image */}
//                 <Box
//                   sx={{
//                     p: 3,
//                     borderBottom: "1px solid",
//                     borderColor: "divider",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 2,
//                       mb: 2,
//                     }}
//                   >
//                     <Avatar src={starshipImages.avatar} />
//                     <Box sx={{ flex: 1 }}>
//                       <Typography fontWeight={600}>{profile.name}</Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         11h ago
//                       </Typography>
//                     </Box>
//                     <IconButton>
//                       <ExpandMore />
//                     </IconButton>
//                   </Box>
//                   <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
//                     Starship caught in golden hour light during the latest
//                     static fire test. The future is looking brighter than ever.
//                   </Typography>
//                   <Link
//                     href={`/${lang}/photos/3`}
//                     style={{ textDecoration: "none" }}
//                   >
//                     <Box
//                       component="img"
//                       src={starshipImages.postImages.post3[0]}
//                       sx={{
//                         width: "100%",
//                         aspectRatio: "16/9",
//                         borderRadius: 3,
//                         objectFit: "cover",
//                         transition:
//                           "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
//                         "&:hover": { transform: "scale(1.04)", boxShadow: 6 },
//                       }}
//                     />
//                   </Link>
//                 </Box>

//                 {/* Post 4 - 4 images (responsive) */}
//                 <Box
//                   sx={{
//                     p: 3,
//                     borderBottom: "1px solid",
//                     borderColor: "divider",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 2,
//                       mb: 2,
//                     }}
//                   >
//                     <Avatar src={starshipImages.avatar} />
//                     <Box sx={{ flex: 1 }}>
//                       <Typography fontWeight={600}>{profile.name}</Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         Yesterday
//                       </Typography>
//                     </Box>
//                     <IconButton>
//                       <MoreVert />
//                     </IconButton>
//                   </Box>
//                   <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
//                     Quick look at the new Starship prototype rolling out of the
//                     factory. Reusability is the name of the game.
//                   </Typography>
//                   <Grid container spacing={1.5}>
//                     {starshipImages.postImages.post4.map((url, i) => (
//                       <Grid size={{ xs: 6, sm: 3 }} key={i}>
//                         <Link
//                           href={`/${lang}/photos/${i + 10}`}
//                           style={{ textDecoration: "none" }}
//                         >
//                           <Box
//                             component="img"
//                             src={url}
//                             sx={{
//                               width: "100%",
//                               aspectRatio: "16/9",
//                               borderRadius: 3,
//                               objectFit: "cover",
//                               transition:
//                                 "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
//                               "&:hover": {
//                                 transform: "scale(1.04)",
//                                 boxShadow: 6,
//                               },
//                             }}
//                           />
//                         </Link>
//                       </Grid>
//                     ))}
//                   </Grid>
//                 </Box>

//                 {/* Post 5 - single video */}
//                 <Box
//                   sx={{
//                     p: 3,
//                     borderBottom: "1px solid",
//                     borderColor: "divider",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 2,
//                       mb: 2,
//                     }}
//                   >
//                     <Avatar src={starshipImages.avatar} />
//                     <Box sx={{ flex: 1 }}>
//                       <Typography fontWeight={600}>{profile.name}</Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         2d ago
//                       </Typography>
//                     </Box>
//                     <IconButton>
//                       <MoreVert />
//                     </IconButton>
//                   </Box>
//                   <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
//                     Testing the new Starship heat-shield tiles on the test
//                     stand. The engineering behind re-entry physics is
//                     mind-blowing.
//                   </Typography>
//                   <Link
//                     href={`/${lang}/videos/5`}
//                     style={{ textDecoration: "none" }}
//                   >
//                     <Box
//                       sx={{
//                         position: "relative",
//                         borderRadius: 4,
//                         overflow: "hidden",
//                         mb: 2,
//                       }}
//                     >
//                       <Box
//                         component="img"
//                         src={starshipImages.videos.preview1}
//                         sx={{
//                           width: "100%",
//                           aspectRatio: "16/9",
//                           objectFit: "cover",
//                           display: "block",
//                           transition:
//                             "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
//                           "&:hover": {
//                             transform: "scale(1.04)",
//                             boxShadow: 6,
//                           },
//                         }}
//                       />
//                       <Box
//                         sx={{
//                           position: "absolute",
//                           top: "50%",
//                           left: "50%",
//                           transform: "translate(-50%, -50%)",
//                           bgcolor: "rgba(255,255,255,0.95)",
//                           borderRadius: "50%",
//                           p: 2,
//                           boxShadow: 4,
//                         }}
//                       >
//                         <PlayArrow sx={{ fontSize: 52, color: "#111" }} />
//                       </Box>
//                       <Box
//                         sx={{
//                           position: "absolute",
//                           bottom: 16,
//                           right: 16,
//                           bgcolor: "rgba(0,0,0,0.75)",
//                           color: "white",
//                           px: 2,
//                           py: 0.5,
//                           borderRadius: 1,
//                           fontSize: "0.875rem",
//                           fontWeight: 600,
//                         }}
//                       >
//                         1:45
//                       </Box>
//                     </Box>
//                   </Link>
//                 </Box>

//                 {/* Post 6 - 2 images */}
//                 <Box
//                   sx={{
//                     p: 3,
//                     borderBottom: "1px solid",
//                     borderColor: "divider",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 2,
//                       mb: 2,
//                     }}
//                   >
//                     <Avatar src={starshipImages.avatar} />
//                     <Box sx={{ flex: 1 }}>
//                       <Typography fontWeight={600}>{profile.name}</Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         3d ago
//                       </Typography>
//                     </Box>
//                     <IconButton>
//                       <ExpandMore />
//                     </IconButton>
//                   </Box>
//                   <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
//                     The team just finished the latest heat shield tile
//                     installation. Every tile brings us one step closer to the
//                     stars.
//                   </Typography>
//                   <Grid container spacing={1.5}>
//                     {starshipImages.postImages.post6.map((url, i) => (
//                       <Grid size={6} key={i}>
//                         <Link
//                           href={`/${lang}/photos/${i + 20}`}
//                           style={{ textDecoration: "none" }}
//                         >
//                           <Box
//                             component="img"
//                             src={url}
//                             sx={{
//                               width: "100%",
//                               aspectRatio: "16/9",
//                               borderRadius: 3,
//                               objectFit: "cover",
//                               transition:
//                                 "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
//                               "&:hover": {
//                                 transform: "scale(1.04)",
//                                 boxShadow: 6,
//                               },
//                             }}
//                           />
//                         </Link>
//                       </Grid>
//                     ))}
//                   </Grid>
//                 </Box>

//                 {/* Post 7 - single video */}
//                 <Box
//                   sx={{
//                     p: 3,
//                     borderBottom: "1px solid",
//                     borderColor: "divider",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 2,
//                       mb: 2,
//                     }}
//                   >
//                     <Avatar src={starshipImages.avatar} />
//                     <Box sx={{ flex: 1 }}>
//                       <Typography fontWeight={600}>{profile.name}</Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         4d ago
//                       </Typography>
//                     </Box>
//                     <IconButton>
//                       <MoreVert />
//                     </IconButton>
//                   </Box>
//                   <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
//                     After weeks of simulations we finally achieved stable
//                     orbital refueling in vacuum conditions. This is a historic
//                     milestone for Mars colonization. The implications for future
//                     missions are enormous.
//                   </Typography>
//                   <Link
//                     href={`/${lang}/videos/7`}
//                     style={{ textDecoration: "none" }}
//                   >
//                     <Box
//                       sx={{
//                         position: "relative",
//                         borderRadius: 4,
//                         overflow: "hidden",
//                         mb: 2,
//                       }}
//                     >
//                       <Box
//                         component="img"
//                         src={starshipImages.videos.preview2}
//                         sx={{
//                           width: "100%",
//                           aspectRatio: "16/9",
//                           objectFit: "cover",
//                           display: "block",
//                           transition:
//                             "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
//                           "&:hover": {
//                             transform: "scale(1.04)",
//                             boxShadow: 6,
//                           },
//                         }}
//                       />
//                       <Box
//                         sx={{
//                           position: "absolute",
//                           top: "50%",
//                           left: "50%",
//                           transform: "translate(-50%, -50%)",
//                           bgcolor: "rgba(255,255,255,0.95)",
//                           borderRadius: "50%",
//                           p: 2,
//                           boxShadow: 4,
//                         }}
//                       >
//                         <PlayArrow sx={{ fontSize: 52, color: "#111" }} />
//                       </Box>
//                       <Box
//                         sx={{
//                           position: "absolute",
//                           bottom: 16,
//                           right: 16,
//                           bgcolor: "rgba(0,0,0,0.75)",
//                           color: "white",
//                           px: 2,
//                           py: 0.5,
//                           borderRadius: 1,
//                           fontSize: "0.875rem",
//                           fontWeight: 600,
//                         }}
//                       >
//                         3:12
//                       </Box>
//                     </Box>
//                   </Link>
//                 </Box>

//                 {/* Post 8 - single image */}
//                 <Box sx={{ p: 3 }}>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 2,
//                       mb: 2,
//                     }}
//                   >
//                     <Avatar src={starshipImages.avatar} />
//                     <Box sx={{ flex: 1 }}>
//                       <Typography fontWeight={600}>{profile.name}</Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         5d ago
//                       </Typography>
//                     </Box>
//                     <IconButton>
//                       <ExpandMore />
//                     </IconButton>
//                   </Box>
//                   <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
//                     The new Starship prototype is looking incredible. Every
//                     weld, every tile, every sensor is a testament to what
//                     humanity can achieve when we work together toward the stars.
//                   </Typography>
//                   <Link
//                     href={`/${lang}/photos/8`}
//                     style={{ textDecoration: "none" }}
//                   >
//                     <Box
//                       component="img"
//                       src={starshipImages.postImages.post3[0]}
//                       sx={{
//                         width: "100%",
//                         aspectRatio: "16/9",
//                         borderRadius: 3,
//                         objectFit: "cover",
//                         transition:
//                           "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
//                         "&:hover": { transform: "scale(1.04)", boxShadow: 6 },
//                       }}
//                     />
//                   </Link>
//                 </Box>
//               </>
//             ) : (
//               <Box sx={{ p: 4 }}>
//                 <Typography variant="h5" gutterBottom fontWeight={600}>
//                   Latest Articles
//                 </Typography>

//                 <Box
//                   component={Link}
//                   href={`/${lang}/articles/1`}
//                   sx={{
//                     mb: 4,
//                     pb: 3,
//                     borderBottom: "1px solid",
//                     borderColor: "divider",
//                     display: "block",
//                     textDecoration: "none",
//                     color: "inherit",
//                     transition:
//                       "background-color 0.25s ease, box-shadow 0.25s ease",
//                     borderRadius: 2,
//                     "&:hover": { bgcolor: "action.hover", boxShadow: 2 },
//                   }}
//                 >
//                   <Typography variant="h6" gutterBottom>
//                     How Starship Will Change Interplanetary Travel Forever
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     color="text.secondary"
//                     sx={{ mb: 1 }}
//                   >
//                     May 10, 2026 • 8 min read
//                   </Typography>
//                   <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
//                     The latest flight test proved that full reusability is not
//                     just a dream — it's happening now. Here's what it means for
//                     Mars missions.
//                   </Typography>
//                 </Box>

//                 <Box
//                   component={Link}
//                   href={`/${lang}/articles/2`}
//                   sx={{
//                     mb: 4,
//                     pb: 3,
//                     borderBottom: "1px solid",
//                     borderColor: "divider",
//                     display: "block",
//                     textDecoration: "none",
//                     color: "inherit",
//                     transition:
//                       "background-color 0.25s ease, box-shadow 0.25s ease",
//                     borderRadius: 2,
//                     "&:hover": { bgcolor: "action.hover", boxShadow: 2 },
//                   }}
//                 >
//                   <Typography variant="h6" gutterBottom>
//                     Next.js 16 + MUI 7: The Perfect Stack for High-Performance
//                     Dashboards
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     color="text.secondary"
//                     sx={{ mb: 1 }}
//                   >
//                     May 8, 2026 • 6 min read
//                   </Typography>
//                   <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
//                     We just migrated our entire Starship telemetry platform. The
//                     new AppRouterCacheProvider eliminated all styling issues.
//                   </Typography>
//                 </Box>

//                 <Box
//                   component={Link}
//                   href={`/${lang}/articles/3`}
//                   sx={{
//                     display: "block",
//                     textDecoration: "none",
//                     color: "inherit",
//                     transition:
//                       "background-color 0.25s ease, box-shadow 0.25s ease",
//                     borderRadius: 2,
//                     "&:hover": { bgcolor: "action.hover", boxShadow: 2 },
//                   }}
//                 >
//                   <Typography variant="h6" gutterBottom>
//                     Orbital Refueling: The Key to Mars Colonization
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     color="text.secondary"
//                     sx={{ mb: 1 }}
//                   >
//                     May 5, 2026 • 12 min read
//                   </Typography>
//                   <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
//                     Detailed breakdown of the latest successful refueling test
//                     and why this technology will change everything.
//                   </Typography>
//                 </Box>
//               </Box>
//             )}
//           </Paper>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// app/[lang]/my-page/page.tsx
"use client";
import * as React from "react";
import {
  Container,
  Typography,
  Box,
  Avatar,
  Button,
  Paper,
  IconButton,
  TextField,
  Tabs,
  Tab,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Edit,
  BarChart,
  PlayArrow,
  Search,
  ExpandMore,
  Image as ImageIcon,
  Videocam,
  InsertEmoticon,
  LocationOn,
  MoreVert,
  AddPhotoAlternate,
} from "@mui/icons-material";
import { useNavigation } from "@/app/[lang]/contexts/navigation-context";

export default function MyPage() {
  const { dict } = useNavigation();
  const params = useParams();
  const lang = (params?.lang as string) || "en";

  const [tabValue, setTabValue] = React.useState(0);

  const profile = {
    name: "Nick Jones",
    status:
      "Interested in space exploration, building the future with Next.js 16, MUI 7, reusable rockets, and open-source Starship tech. ",
    birthday: "May 12, 1995",
    city: "Austin, Texas",
    activity: "Working on a new orbital launch simulation tool",
  };

  const starshipImages = {
    profile: "/images/2.14.22_PolarisAnnouncement_Starship_Desktop.jpg",
    avatar: "/images/Eva_Suit_Desktop_alternate_1cf9bae18e.jpg",
    achievements: [
      "/images/DART_LAUNCHES_DESKTOP.jpg",
      "/images/Flight_3_Lift_Off_20240314_001203_db0985992e.jpg",
      "/images/Flight_6_Drone_20241119000503_94437af67f.jpg",
      "/images/Flight_10_Liftoff_Drone1_a2508261134_36972204cc.jpg",
      "/images/Flight_11_Onboards_2510162827_2699d9bfed.jpg",
      "/images/Flight_7_Onboard_20250121001410_066c4348a8.jpg",
    ],
    friends: [
      "/images/dear_Moon_Key_Visual_Final_2fdfb55422.jpg",
      "/images/Flight_8_Onboard_160af4d80b.jpg",
      "/images/Flight_9_Onboards_a2505290345_5463f84590.jpg",
      "/images/Dragon_West_Coast_Recovery_8afdffe48d.jpg",
      "/images/Crew_Displays_236ec85aec.png",
      "/images/Falcon_Clear_Areas_c4081a68c6.jpg",
    ],
    subscriptions: {
      SpaceX: "/images/2.14.22_PolarisAnnouncement_Starship_Desktop.jpg",
      Neuralink: "/images/Neuralink-Device.jpg",
      Tesla: "/images/cybercab.jpeg",
      xAI: "/images/Flight_3_Lift_Off_20240314_001203_db0985992e.jpg",
    },
    photos: [
      "/images/10_28_25_cabin_06_30a49f27a3.jpg",
      "/images/Flight_6_Drone_20241119000503_94437af67f.jpg",
      "/images/Flight_10_Liftoff_Drone1_a2508261134_36972204cc.jpg",
      "/images/Flight_11_Onboards_2510162827_2699d9bfed.jpg",
    ],
    postImages: {
      post1: [
        "/images/DART_LAUNCHES_DESKTOP.jpg",
        "/images/Flight_3_Lift_Off_20240314_001203_db0985992e.jpg",
        "/images/Flight_6_Drone_20241119000503_94437af67f.jpg",
      ],
      post2: [
        "/images/Flight_7_Onboard_20250121001410_066c4348a8.jpg",
        "/images/Flight_8_Onboard_160af4d80b.jpg",
      ],
      post3: ["/images/2.14.22_PolarisAnnouncement_Starship_Desktop.jpg"],
      post4: [
        "/images/Flight_9_Onboards_a2505290345_5463f84590.jpg",
        "/images/Flight_10_Liftoff_Drone1_a2508261134_36972204cc.jpg",
        "/images/Flight_11_Onboards_2510162827_2699d9bfed.jpg",
        "/images/vlcsnap_2024_08_22_15h06m31s191_10dd6dd442.png",
      ],
      post6: [
        "/images/Dragon_West_Coast_Recovery_8afdffe48d.jpg",
        "/images/Crew_Displays_236ec85aec.png",
      ],
    },
    videos: {
      preview1: "/images/Flight_3_Lift_Off_20240314_001203_db0985992e.jpg",
      preview2: "/images/Flight_10_Liftoff_Drone1_a2508261134_36972204cc.jpg",
    },
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      {/* TOP SYMMETRICAL SECTION – isolated so only these two cards match height */}
      <Grid
        container
        spacing={4}
        sx={{ alignItems: { xs: "flex-start", md: "stretch" }, mb: 4 }}
      >
        {/* LEFT: User Profile Picture Area */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: 4,
            }}
          >
            <Link href={`/${lang}/profile`} style={{ textDecoration: "none" }}>
              <Box
                component="img"
                src={starshipImages.profile}
                alt="Starship Profile"
                sx={{
                  width: "100%",
                  height: 340,
                  objectFit: "cover",
                  borderRadius: 4,
                  mb: 3,
                  boxShadow: 4,
                  display: "block",
                  transition:
                    "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease",
                  "&:hover": { transform: "scale(1.03)", boxShadow: 8 },
                }}
              />
            </Link>

            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              sx={{ mt: "auto" }}
            >
              <Button
                variant="contained"
                startIcon={<Edit />}
                size="medium"
                fullWidth
                sx={{ maxWidth: 160 }}
              >
                Edit
              </Button>
              <Button
                variant="outlined"
                startIcon={<BarChart />}
                size="medium"
                fullWidth
                sx={{ maxWidth: 160 }}
              >
                Statistics
              </Button>
            </Stack>
          </Paper>
        </Grid>

        {/* RIGHT: User Description Area (unified mobile + desktop) */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Paper
            elevation={2}
            sx={{
              p: 4,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: 4,
            }}
          >
            {/* Name + Online – side-by-side on desktop, stacked on mobile */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: 2,
                mb: 3,
              }}
            >
              <Typography variant="h3" component="h1" fontWeight={700}>
                {profile.name}
              </Typography>

              {/* Desktop: Online on the right */}
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    bgcolor: "#4ade80",
                    borderRadius: "50%",
                    boxShadow: "0 0 0 4px rgba(74, 222, 128, 0.3)",
                  }}
                />
                <Typography color="success.main" fontWeight={600}>
                  Online
                </Typography>
              </Box>
            </Box>

            {/* Mobile: Online under the name */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                gap: 1,
                mb: 4,
              }}
            >
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  bgcolor: "#4ade80",
                  borderRadius: "50%",
                  boxShadow: "0 0 0 4px rgba(74, 222, 128, 0.3)",
                }}
              />
              <Typography color="success.main" fontWeight={600}>
                Online
              </Typography>
            </Box>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 4, lineHeight: 1.7, flexGrow: 1 }}
            >
              {profile.status}
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: "flex", gap: 3, mb: 1.5 }}>
                <Typography sx={{ minWidth: 100 }}>
                  <strong>Birthday</strong>
                </Typography>
                <Typography
                  component={Link}
                  href={`/${lang}/profile/birthday`}
                  color="text.secondary"
                  sx={{
                    textDecoration: "none",
                    transition: "color 0.25s ease",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {profile.birthday}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 3, mb: 1.5 }}>
                <Typography sx={{ minWidth: 100 }}>
                  <strong>City</strong>
                </Typography>
                <Typography
                  component={Link}
                  href={`/${lang}/profile/city`}
                  color="text.secondary"
                  sx={{
                    textDecoration: "none",
                    transition: "color 0.25s ease",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {profile.city}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 3, mb: 1.5 }}>
                <Typography sx={{ minWidth: 100 }}>
                  <strong>Activity</strong>
                </Typography>
                <Typography
                  component={Link}
                  href={`/${lang}/profile/activity`}
                  color="primary.main"
                  sx={{
                    textDecoration: "none",
                    transition: "color 0.25s ease",
                    "&:hover": { color: "primary.dark" },
                  }}
                >
                  {profile.activity}
                </Typography>
              </Box>
            </Box>

            <Grid
              container
              spacing={2}
              sx={{ textAlign: "center", mt: "auto" }}
            >
              {[
                { count: "450", label: "friends", href: `/${lang}/friends` },
                {
                  count: "378",
                  label: "subscribers",
                  href: `/${lang}/subscribers`,
                },
                { count: "153", label: "photos", href: `/${lang}/photos` },
                { count: "32", label: "mentions", href: `/${lang}/mentions` },
                { count: "230", label: "videos", href: `/${lang}/videos` },
                { count: "10k", label: "audios", href: `/${lang}/audios` },
              ].map((stat, index) => (
                <Grid size={{ xs: 4, sm: 2 }} key={index}>
                  <Link
                    href={stat.href}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Box
                      sx={{
                        transition:
                          "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&:hover": { transform: "scale(1.08)" },
                      }}
                    >
                      <Typography
                        variant="h4"
                        fontWeight={700}
                        color="primary.main"
                      >
                        {stat.count}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        textTransform="capitalize"
                      >
                        {stat.label}
                      </Typography>
                    </Box>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      {/* MAIN CONTENT – Left sidebar + Right feed (unchanged layout) */}
      <Grid container spacing={4}>
        {/* LEFT COLUMN — 30% width on desktop */}
        <Grid size={{ xs: 12, md: 4 }}>
          {/* 2. Achievements Area */}
          <Paper sx={{ p: 3, mb: 4 }}>
            <Box
              component={Link}
              href={`/${lang}/achievements`}
              sx={{
                display: "inline-block",
                textDecoration: "none",
                color: "inherit",
                transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": { transform: "scale(1.08)" },
              }}
            >
              <Typography
                variant="h6"
                fontWeight={100}
                sx={{ fontFamily: "var(--font-roboto)", mb: 2 }}
              >
                Achievements 310
              </Typography>
            </Box>
            <Grid container spacing={1.5}>
              {starshipImages.achievements.map((url, i) => (
                <Grid size={4} key={i}>
                  <Link
                    href={`/${lang}/achievements/${i + 1}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      component="img"
                      src={url}
                      sx={{
                        width: "100%",
                        aspectRatio: "1/1",
                        borderRadius: 3,
                        objectFit: "cover",
                        transition:
                          "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
                        "&:hover": { transform: "scale(1.04)", boxShadow: 6 },
                      }}
                    />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* 3. Friends Area */}
          <Paper sx={{ p: 3, mb: 4 }}>
            <Box
              component={Link}
              href={`/${lang}/friends`}
              sx={{
                display: "inline-block",
                textDecoration: "none",
                color: "inherit",
                transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": { transform: "scale(1.08)" },
              }}
            >
              <Typography
                variant="h6"
                fontWeight={100}
                sx={{ fontFamily: "var(--font-roboto)", mb: 2 }}
              >
                Friends 450
              </Typography>
            </Box>
            <Grid container spacing={1.5}>
              {starshipImages.friends.map((url, i) => (
                <Grid size={4} key={i}>
                  <Link
                    href={`/${lang}/friends/${i + 1}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Avatar
                      src={url}
                      sx={{
                        width: "100%",
                        height: "auto",
                        aspectRatio: "1/1",
                        borderRadius: 3,
                        transition:
                          "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
                        "&:hover": { transform: "scale(1.04)", boxShadow: 6 },
                      }}
                    />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* 4. Subscriptions Area */}
          <Paper sx={{ p: 3, mb: 4 }}>
            <Box
              component={Link}
              href={`/${lang}/subscriptions`}
              sx={{
                display: "inline-block",
                textDecoration: "none",
                color: "inherit",
                transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": { transform: "scale(1.08)" },
              }}
            >
              <Typography
                variant="h6"
                fontWeight={100}
                sx={{ fontFamily: "var(--font-roboto)", mb: 2 }}
              >
                Subscriptions 230
              </Typography>
            </Box>
            <List dense>
              {[
                {
                  name: "SpaceX",
                  img: starshipImages.subscriptions.SpaceX,
                  id: 1,
                },
                {
                  name: "Neuralink",
                  img: starshipImages.subscriptions.Neuralink,
                  id: 2,
                },
                {
                  name: "Tesla",
                  img: starshipImages.subscriptions.Tesla,
                  id: 3,
                },
                { name: "xAI", img: starshipImages.subscriptions.xAI, id: 4 },
              ].map((sub) => (
                <ListItem
                  key={sub.id}
                  component={Link}
                  href={`/${lang}/subscriptions/${sub.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  sx={{
                    px: 0,
                    py: 1,
                    borderRadius: 2,
                    transition:
                      "background-color 0.25s ease, transform 0.25s ease",
                    "&:hover": {
                      bgcolor: "action.hover",
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  <ListItemAvatar>
                    <Avatar src={sub.img} sx={{ width: 36, height: 36 }} />
                  </ListItemAvatar>
                  <ListItemText primary={sub.name} />
                </ListItem>
              ))}
            </List>
          </Paper>

          {/* MOBILE-ONLY: My Photos Area */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Paper sx={{ p: 3, mb: 4 }}>
              <Box
                component={Link}
                href={`/${lang}/photos`}
                sx={{
                  display: "inline-block",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": { transform: "scale(1.08)" },
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={100}
                  sx={{ fontFamily: "var(--font-roboto)", mb: 2 }}
                >
                  My Photos 151
                </Typography>
              </Box>
              <Grid container spacing={1.5}>
                {starshipImages.photos.map((url, i) => (
                  <Grid size={{ xs: 6, sm: 3 }} key={i}>
                    <Link
                      href={`/${lang}/photos/${i + 1}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Box
                        component="img"
                        src={url}
                        sx={{
                          width: "100%",
                          aspectRatio: "1/1",
                          borderRadius: 3,
                          objectFit: "cover",
                          transition:
                            "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
                          "&:hover": { transform: "scale(1.04)", boxShadow: 6 },
                        }}
                      />
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Box>

          {/* 5. Audios Area */}
          <Paper sx={{ p: 3, mb: 4 }}>
            <Box
              component={Link}
              href={`/${lang}/audios`}
              sx={{
                display: "inline-block",
                textDecoration: "none",
                color: "inherit",
                transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": { transform: "scale(1.08)" },
              }}
            >
              <Typography
                variant="h6"
                fontWeight={100}
                sx={{ fontFamily: "var(--font-roboto)", mb: 2 }}
              >
                Audios
              </Typography>
            </Box>
            <List dense>
              {[
                { title: "Starship Launch Audio", duration: "3:45" },
                { title: "Next.js 16 Deep Dive", duration: "12:20" },
                { title: "Rocket Science 101", duration: "8:10" },
              ].map((audio, i) => (
                <ListItem
                  key={i}
                  sx={{
                    px: 0,
                    py: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      borderRadius: 2,
                      transition:
                        "background-color 0.25s ease, transform 0.25s ease",
                      "&:hover": {
                        bgcolor: "action.hover",
                        transform: "translateX(4px)",
                      },
                    }}
                  >
                    <IconButton sx={{ mr: 1.5 }}>
                      <PlayArrow />
                    </IconButton>
                    <Box
                      component={Link}
                      href={`/${lang}/audios?title=${encodeURIComponent(
                        audio.title,
                      )}`}
                      sx={{
                        flex: 1,
                        textDecoration: "none",
                        color: "inherit",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <ListItemText primary={audio.title} />
                      <Typography variant="body2" color="text.secondary">
                        {audio.duration}
                      </Typography>
                    </Box>
                  </Box>
                </ListItem>
              ))}
            </List>
          </Paper>

          {/* 6. Videos Area */}
          <Paper sx={{ p: 3 }}>
            <Box
              component={Link}
              href={`/${lang}/videos`}
              sx={{
                display: "inline-block",
                textDecoration: "none",
                color: "inherit",
                transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": { transform: "scale(1.08)" },
              }}
            >
              <Typography
                variant="h6"
                fontWeight={100}
                sx={{ fontFamily: "var(--font-roboto)", mb: 2 }}
              >
                Videos 130
              </Typography>
            </Box>

            <Stack spacing={3}>
              {[1, 2].map((i) => (
                <Link
                  key={i}
                  href={`/${lang}/videos/${i}`}
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      borderRadius: 4,
                      overflow: "hidden",
                      mb: 1,
                    }}
                  >
                    <Box
                      component="img"
                      src={
                        i === 1
                          ? starshipImages.videos.preview1
                          : starshipImages.videos.preview2
                      }
                      sx={{
                        width: "100%",
                        aspectRatio: "16/9",
                        objectFit: "cover",
                        display: "block",
                        transition:
                          "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
                        "&:hover": {
                          transform: "scale(1.04)",
                          boxShadow: 6,
                        },
                      }}
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "rgba(255,255,255,0.95)",
                        borderRadius: "50%",
                        p: 1,
                        boxShadow: 4,
                      }}
                    >
                      <PlayArrow sx={{ fontSize: 40, color: "#111" }} />
                    </Box>

                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        bgcolor: "rgba(0, 0, 0, 0.45)",
                        color: "white",
                        px: 2.5,
                        py: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 2,
                        zIndex: 2,
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        fontWeight={500}
                        sx={{
                          flex: 1,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          fontSize: "0.95rem",
                          lineHeight: 1.3,
                        }}
                      >
                        Starship Integrated Flight Test {i}
                      </Typography>

                      <Box
                        sx={{
                          bgcolor: "rgba(0,0,0,0.6)",
                          color: "white",
                          px: 1.75,
                          py: 0.4,
                          borderRadius: 1,
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          flexShrink: 0,
                        }}
                      >
                        3:12
                      </Box>
                    </Box>
                  </Box>
                </Link>
              ))}
            </Stack>
          </Paper>
        </Grid>

        {/* RIGHT COLUMN — 70% width on desktop */}
        <Grid size={{ xs: 12, md: 8 }}>
          {/* DESKTOP-ONLY: My Photos Area */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Paper sx={{ p: 3, mb: 4 }}>
              <Box
                component={Link}
                href={`/${lang}/photos`}
                sx={{
                  display: "inline-block",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": { transform: "scale(1.08)" },
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={100}
                  sx={{ fontFamily: "var(--font-roboto)", mb: 2 }}
                >
                  My Photos 151
                </Typography>
              </Box>
              <Grid container spacing={1.5}>
                {starshipImages.photos.map((url, i) => (
                  <Grid size={{ xs: 6, sm: 3 }} key={i}>
                    <Link
                      href={`/${lang}/photos/${i + 1}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Box
                        component="img"
                        src={url}
                        sx={{
                          width: "100%",
                          aspectRatio: "1/1",
                          borderRadius: 3,
                          objectFit: "cover",
                          transition:
                            "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
                          "&:hover": { transform: "scale(1.04)", boxShadow: 6 },
                        }}
                      />
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Box>

          {/* NEW POST AREA — DESKTOP = original, MOBILE = improved */}
          {/* Desktop version */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Paper sx={{ p: 2, mb: 4, borderRadius: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar
                  src={starshipImages.avatar}
                  sx={{ width: 48, height: 48 }}
                />
                <TextField
                  fullWidth
                  placeholder="What's happening in the universe today?"
                  variant="outlined"
                  size="small"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 6,
                      bgcolor: "background.paper",
                      py: 1.5,
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <Stack direction="row" spacing={0.5}>
                        <IconButton color="primary">
                          <ImageIcon />
                        </IconButton>
                        <IconButton color="primary">
                          <Videocam />
                        </IconButton>
                        <IconButton color="primary">
                          <InsertEmoticon />
                        </IconButton>
                        <IconButton color="primary">
                          <LocationOn />
                        </IconButton>
                        <IconButton color="primary">
                          <AddPhotoAlternate />
                        </IconButton>
                      </Stack>
                    ),
                  }}
                />
              </Box>
            </Paper>
          </Box>

          {/* Mobile version */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Paper sx={{ p: 3, mb: 4, borderRadius: 4 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                <Avatar
                  src={starshipImages.avatar}
                  sx={{ width: 48, height: 48, flexShrink: 0 }}
                />
                <Box sx={{ flex: 1 }}>
                  <TextField
                    fullWidth
                    multiline
                    minRows={2}
                    maxRows={6}
                    placeholder="What's happening in the universe today?"
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 6,
                        bgcolor: "background.paper",
                        py: 1.5,
                      },
                    }}
                  />

                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                      mt: 2,
                      justifyContent: "space-around",
                    }}
                  >
                    <IconButton color="primary" size="small">
                      <ImageIcon />
                    </IconButton>
                    <IconButton color="primary" size="small">
                      <Videocam />
                    </IconButton>
                    <IconButton color="primary" size="small">
                      <InsertEmoticon />
                    </IconButton>
                    <IconButton color="primary" size="small">
                      <LocationOn />
                    </IconButton>
                    <IconButton color="primary" size="small">
                      <AddPhotoAlternate />
                    </IconButton>
                  </Stack>
                </Box>
              </Box>
            </Paper>
          </Box>

          {/* User Posts Area */}
          <Paper sx={{ borderRadius: 4, overflow: "hidden" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider", px: 3, pt: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Tabs
                  value={tabValue}
                  onChange={handleTabChange}
                  sx={{ minHeight: 52 }}
                >
                  <Tab label="Posts" />
                  <Tab label="Articles" />
                </Tabs>
                <IconButton>
                  <Search />
                </IconButton>
              </Box>
            </Box>

            <Divider />

            {tabValue === 0 ? (
              <>
                {/* Post 1 - 3 images */}
                <Box
                  sx={{
                    p: 3,
                    borderBottom: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Avatar src={starshipImages.avatar} />
                    <Box sx={{ flex: 1 }}>
                      <Typography fontWeight={600}>{profile.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        2h ago • Public
                      </Typography>
                    </Box>
                    <IconButton>
                      <ExpandMore />
                    </IconButton>
                  </Box>
                  <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
                    Just integrated Next.js 16 with MUI 7 in our production app
                    router setup. The new AppRouterCacheProvider + ThemeProvider
                    combo gives us perfect SSR styling and zero flash of
                    unstyled content. Huge win for our Starship telemetry
                    dashboard!
                  </Typography>
                  <Grid container spacing={1.5}>
                    {starshipImages.postImages.post1.map((url, i) => (
                      <Grid size={{ xs: 6, md: 4 }} key={i}>
                        <Link
                          href={`/${lang}/photos/${i + 1}`}
                          style={{ textDecoration: "none" }}
                        >
                          <Box
                            component="img"
                            src={url}
                            sx={{
                              width: "100%",
                              aspectRatio: "16/9",
                              borderRadius: 3,
                              objectFit: "cover",
                              transition:
                                "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
                              "&:hover": {
                                transform: "scale(1.04)",
                                boxShadow: 6,
                              },
                            }}
                          />
                        </Link>
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                {/* Post 2 - 2 video previews */}
                <Box
                  sx={{
                    p: 3,
                    borderBottom: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Avatar src={starshipImages.avatar} />
                    <Box sx={{ flex: 1 }}>
                      <Typography fontWeight={600}>{profile.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        2d ago
                      </Typography>
                    </Box>
                    <IconButton>
                      <MoreVert />
                    </IconButton>
                  </Box>
                  <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
                    Orbital refueling simulation just completed successfully.
                    This is the key to getting to Mars.
                  </Typography>
                  <Grid container spacing={1.5}>
                    <Grid size={6}>
                      <Link
                        href={`/${lang}/videos/1`}
                        style={{ textDecoration: "none" }}
                      >
                        <Box
                          sx={{
                            position: "relative",
                            borderRadius: 3,
                            overflow: "hidden",
                          }}
                        >
                          <Box
                            component="img"
                            src={starshipImages.videos.preview1}
                            sx={{
                              width: "100%",
                              aspectRatio: "16/9",
                              objectFit: "cover",
                              display: "block",
                              transition:
                                "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
                              "&:hover": {
                                transform: "scale(1.04)",
                                boxShadow: 6,
                              },
                            }}
                          />
                          <Box
                            sx={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              bgcolor: "rgba(255,255,255,0.9)",
                              borderRadius: "50%",
                              p: 1,
                              boxShadow: 3,
                            }}
                          >
                            <PlayArrow sx={{ fontSize: 36, color: "#111" }} />
                          </Box>
                        </Box>
                      </Link>
                    </Grid>
                    <Grid size={6}>
                      <Link
                        href={`/${lang}/videos/2`}
                        style={{ textDecoration: "none" }}
                      >
                        <Box
                          sx={{
                            position: "relative",
                            borderRadius: 3,
                            overflow: "hidden",
                          }}
                        >
                          <Box
                            component="img"
                            src={starshipImages.videos.preview2}
                            sx={{
                              width: "100%",
                              aspectRatio: "16/9",
                              objectFit: "cover",
                              display: "block",
                              transition:
                                "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
                              "&:hover": {
                                transform: "scale(1.04)",
                                boxShadow: 6,
                              },
                            }}
                          />
                          <Box
                            sx={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              bgcolor: "rgba(255,255,255,0.9)",
                              borderRadius: "50%",
                              p: 1,
                              boxShadow: 3,
                            }}
                          >
                            <PlayArrow sx={{ fontSize: 36, color: "#111" }} />
                          </Box>
                        </Box>
                      </Link>
                    </Grid>
                  </Grid>
                </Box>

                {/* Post 3 - single image */}
                <Box
                  sx={{
                    p: 3,
                    borderBottom: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Avatar src={starshipImages.avatar} />
                    <Box sx={{ flex: 1 }}>
                      <Typography fontWeight={600}>{profile.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        11h ago
                      </Typography>
                    </Box>
                    <IconButton>
                      <ExpandMore />
                    </IconButton>
                  </Box>
                  <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
                    Starship caught in golden hour light during the latest
                    static fire test. The future is looking brighter than ever.
                  </Typography>
                  <Link
                    href={`/${lang}/photos/3`}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      component="img"
                      src={starshipImages.postImages.post3[0]}
                      sx={{
                        width: "100%",
                        aspectRatio: "16/9",
                        borderRadius: 3,
                        objectFit: "cover",
                        transition:
                          "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
                        "&:hover": { transform: "scale(1.04)", boxShadow: 6 },
                      }}
                    />
                  </Link>
                </Box>

                {/* Post 4 - 4 images */}
                <Box
                  sx={{
                    p: 3,
                    borderBottom: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Avatar src={starshipImages.avatar} />
                    <Box sx={{ flex: 1 }}>
                      <Typography fontWeight={600}>{profile.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Yesterday
                      </Typography>
                    </Box>
                    <IconButton>
                      <MoreVert />
                    </IconButton>
                  </Box>
                  <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
                    Quick look at the new Starship prototype rolling out of the
                    factory. Reusability is the name of the game.
                  </Typography>
                  <Grid container spacing={1.5}>
                    {starshipImages.postImages.post4.map((url, i) => (
                      <Grid size={{ xs: 6, sm: 3 }} key={i}>
                        <Link
                          href={`/${lang}/photos/${i + 10}`}
                          style={{ textDecoration: "none" }}
                        >
                          <Box
                            component="img"
                            src={url}
                            sx={{
                              width: "100%",
                              aspectRatio: "16/9",
                              borderRadius: 3,
                              objectFit: "cover",
                              transition:
                                "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
                              "&:hover": {
                                transform: "scale(1.04)",
                                boxShadow: 6,
                              },
                            }}
                          />
                        </Link>
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                {/* Post 5 - single video */}
                <Box
                  sx={{
                    p: 3,
                    borderBottom: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Avatar src={starshipImages.avatar} />
                    <Box sx={{ flex: 1 }}>
                      <Typography fontWeight={600}>{profile.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        2d ago
                      </Typography>
                    </Box>
                    <IconButton>
                      <MoreVert />
                    </IconButton>
                  </Box>
                  <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
                    Testing the new Starship heat-shield tiles on the test
                    stand. The engineering behind re-entry physics is
                    mind-blowing.
                  </Typography>
                  <Link
                    href={`/${lang}/videos/5`}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        borderRadius: 4,
                        overflow: "hidden",
                        mb: 2,
                      }}
                    >
                      <Box
                        component="img"
                        src={starshipImages.videos.preview1}
                        sx={{
                          width: "100%",
                          aspectRatio: "16/9",
                          objectFit: "cover",
                          display: "block",
                          transition:
                            "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
                          "&:hover": {
                            transform: "scale(1.04)",
                            boxShadow: 6,
                          },
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          bgcolor: "rgba(255,255,255,0.95)",
                          borderRadius: "50%",
                          p: 2,
                          boxShadow: 4,
                        }}
                      >
                        <PlayArrow sx={{ fontSize: 52, color: "#111" }} />
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 16,
                          right: 16,
                          bgcolor: "rgba(0,0,0,0.75)",
                          color: "white",
                          px: 2,
                          py: 0.5,
                          borderRadius: 1,
                          fontSize: "0.875rem",
                          fontWeight: 600,
                        }}
                      >
                        1:45
                      </Box>
                    </Box>
                  </Link>
                </Box>

                {/* Post 6 - 2 images */}
                <Box
                  sx={{
                    p: 3,
                    borderBottom: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Avatar src={starshipImages.avatar} />
                    <Box sx={{ flex: 1 }}>
                      <Typography fontWeight={600}>{profile.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        3d ago
                      </Typography>
                    </Box>
                    <IconButton>
                      <ExpandMore />
                    </IconButton>
                  </Box>
                  <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
                    The team just finished the latest heat shield tile
                    installation. Every tile brings us one step closer to the
                    stars.
                  </Typography>
                  <Grid container spacing={1.5}>
                    {starshipImages.postImages.post6.map((url, i) => (
                      <Grid size={6} key={i}>
                        <Link
                          href={`/${lang}/photos/${i + 20}`}
                          style={{ textDecoration: "none" }}
                        >
                          <Box
                            component="img"
                            src={url}
                            sx={{
                              width: "100%",
                              aspectRatio: "16/9",
                              borderRadius: 3,
                              objectFit: "cover",
                              transition:
                                "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
                              "&:hover": {
                                transform: "scale(1.04)",
                                boxShadow: 6,
                              },
                            }}
                          />
                        </Link>
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                {/* Post 7 - single video */}
                <Box
                  sx={{
                    p: 3,
                    borderBottom: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Avatar src={starshipImages.avatar} />
                    <Box sx={{ flex: 1 }}>
                      <Typography fontWeight={600}>{profile.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        4d ago
                      </Typography>
                    </Box>
                    <IconButton>
                      <MoreVert />
                    </IconButton>
                  </Box>
                  <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
                    After weeks of simulations we finally achieved stable
                    orbital refueling in vacuum conditions. This is a historic
                    milestone for Mars habitation. The implications for future
                    missions are enormous.
                  </Typography>
                  <Link
                    href={`/${lang}/videos/7`}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        borderRadius: 4,
                        overflow: "hidden",
                        mb: 2,
                      }}
                    >
                      <Box
                        component="img"
                        src={starshipImages.videos.preview2}
                        sx={{
                          width: "100%",
                          aspectRatio: "16/9",
                          objectFit: "cover",
                          display: "block",
                          transition:
                            "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
                          "&:hover": {
                            transform: "scale(1.04)",
                            boxShadow: 6,
                          },
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          bgcolor: "rgba(255,255,255,0.95)",
                          borderRadius: "50%",
                          p: 2,
                          boxShadow: 4,
                        }}
                      >
                        <PlayArrow sx={{ fontSize: 52, color: "#111" }} />
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 16,
                          right: 16,
                          bgcolor: "rgba(0,0,0,0.75)",
                          color: "white",
                          px: 2,
                          py: 0.5,
                          borderRadius: 1,
                          fontSize: "0.875rem",
                          fontWeight: 600,
                        }}
                      >
                        3:12
                      </Box>
                    </Box>
                  </Link>
                </Box>

                {/* Post 8 - single image */}
                <Box sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Avatar src={starshipImages.avatar} />
                    <Box sx={{ flex: 1 }}>
                      <Typography fontWeight={600}>{profile.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        5d ago
                      </Typography>
                    </Box>
                    <IconButton>
                      <ExpandMore />
                    </IconButton>
                  </Box>
                  <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
                    The new Starship prototype is looking incredible. Every
                    weld, every tile, every sensor is a testament to what
                    humanity can achieve when we work together toward the stars.
                  </Typography>
                  <Link
                    href={`/${lang}/photos/8`}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      component="img"
                      src={starshipImages.postImages.post3[0]}
                      sx={{
                        width: "100%",
                        aspectRatio: "16/9",
                        borderRadius: 3,
                        objectFit: "cover",
                        transition:
                          "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
                        "&:hover": { transform: "scale(1.04)", boxShadow: 6 },
                      }}
                    />
                  </Link>
                </Box>
              </>
            ) : (
              <Box sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom fontWeight={600}>
                  Latest Articles
                </Typography>

                <Box
                  component={Link}
                  href={`/${lang}/articles/1`}
                  sx={{
                    mb: 4,
                    pb: 3,
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    display: "block",
                    textDecoration: "none",
                    color: "inherit",
                    transition:
                      "background-color 0.25s ease, box-shadow 0.25s ease",
                    borderRadius: 2,
                    "&:hover": { bgcolor: "action.hover", boxShadow: 2 },
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    How Starship Will Change Interplanetary Travel Forever
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    May 10, 2026 • 8 min read
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                    The latest flight test proved that full reusability is not
                    just a dream — it's happening now. Here's what it means for
                    Mars missions.
                  </Typography>
                </Box>

                <Box
                  component={Link}
                  href={`/${lang}/articles/2`}
                  sx={{
                    mb: 4,
                    pb: 3,
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    display: "block",
                    textDecoration: "none",
                    color: "inherit",
                    transition:
                      "background-color 0.25s ease, box-shadow 0.25s ease",
                    borderRadius: 2,
                    "&:hover": { bgcolor: "action.hover", boxShadow: 2 },
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    Next.js 16 + MUI 7: The Perfect Stack for High-Performance
                    Dashboards
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    May 8, 2026 • 6 min read
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                    We just migrated our entire Starship telemetry platform. The
                    new AppRouterCacheProvider eliminated all styling issues.
                  </Typography>
                </Box>

                <Box
                  component={Link}
                  href={`/${lang}/articles/3`}
                  sx={{
                    display: "block",
                    textDecoration: "none",
                    color: "inherit",
                    transition:
                      "background-color 0.25s ease, box-shadow 0.25s ease",
                    borderRadius: 2,
                    "&:hover": { bgcolor: "action.hover", boxShadow: 2 },
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    Orbital Refueling: The Key to Mars Colonization
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    May 5, 2026 • 12 min read
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                    Detailed breakdown of the latest successful refueling test
                    and why this technology will change everything.
                  </Typography>
                </Box>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
