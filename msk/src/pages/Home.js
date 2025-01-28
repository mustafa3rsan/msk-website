import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Paper,
  Avatar,
  IconButton,
  Chip,
  useTheme,
} from '@mui/material';
import { GitHub, LinkedIn, Description, ArrowForward } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Home = () => {
  const theme = useTheme();

  const skills = [
    { name: 'JavaScript', color: '#f7df1e' },
    { name: 'React', color: '#61dafb' },
    { name: 'Node.js', color: '#339933' },
    { name: 'Python', color: '#3776ab' },
    { name: 'SQL', color: '#00758f' },
    { name: 'Git', color: '#f05032' },
  ];

  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.main}15 0%, ${theme.palette.secondary.main}15 100%)`,
        minHeight: 'calc(100vh - 64px)',
      }}
    >
      <Container>
        <Box sx={{ py: { xs: 6, md: 12 } }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  gutterBottom
                  sx={{
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 3,
                  }}
                >
                  Merhaba, ben Mert Samet
                </Typography>
                <Typography
                  variant="h4"
                  color="primary"
                  sx={{ mb: 3, fontWeight: 600 }}
                >
                  Software Developer
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ mb: 4, color: theme.palette.text.secondary }}
                >
                  Yazılım geliştirme konusunda tutkulu ve sürekli öğrenmeye açık bir geliştiriciyim.
                  Modern teknolojiler kullanarak kullanıcı dostu ve ölçeklenebilir uygulamalar geliştiriyorum.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mb: 6 }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    href="/projects"
                    sx={{
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      color: 'white',
                      '&:hover': {
                        background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                      },
                    }}
                  >
                    Projelerimi Gör
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<Description />}
                    href="/cv.pdf"
                    target="_blank"
                    color="primary"
                  >
                    CV'mi İndir
                  </Button>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <IconButton
                    href="https://github.com/YOUR_GITHUB"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="large"
                    sx={{
                      color: theme.palette.primary.main,
                      '&:hover': { transform: 'scale(1.1)' },
                    }}
                  >
                    <GitHub fontSize="large" />
                  </IconButton>
                  <IconButton
                    href="https://linkedin.com/in/YOUR_LINKEDIN"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="large"
                    sx={{
                      color: theme.palette.primary.main,
                      '&:hover': { transform: 'scale(1.1)' },
                    }}
                  >
                    <LinkedIn fontSize="large" />
                  </IconButton>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Paper
                  elevation={4}
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 4,
                  }}
                >
                  <Avatar
                    sx={{
                      width: 220,
                      height: 220,
                      margin: '0 auto',
                      mb: 4,
                      border: `4px solid ${theme.palette.primary.main}`,
                    }}
                    alt="Mert Samet Kayacıoğlu"
                    src="/profile-photo.jpg"
                  />
                  <Typography variant="h5" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
                    Yetenekler
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                    {skills.map((skill) => (
                      <Chip
                        key={skill.name}
                        label={skill.name}
                        sx={{
                          backgroundColor: `${skill.color}20`,
                          color: skill.color,
                          fontWeight: 600,
                          '&:hover': {
                            backgroundColor: `${skill.color}30`,
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
