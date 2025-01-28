import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Link,
  IconButton,
  useTheme,
} from '@mui/material';
import {
  Email,
  GitHub,
  LinkedIn,
  Phone,
  LocationOn,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Contact = () => {
  const theme = useTheme();

  const contactInfo = [
    {
      icon: <Email fontSize="large" />,
      title: 'E-posta',
      content: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
      color: '#EA4335',
    },
    {
      icon: <Phone fontSize="large" />,
      title: 'Telefon',
      content: '+90 XXX XXX XX XX',
      link: 'tel:+90XXXXXXXXXX',
      color: '#34A853',
    },
    {
      icon: <LocationOn fontSize="large" />,
      title: 'Konum',
      content: 'İstanbul, Türkiye',
      link: 'https://maps.google.com/?q=Istanbul',
      color: '#4285F4',
    },
    {
      icon: <GitHub fontSize="large" />,
      title: 'GitHub',
      content: 'github.com/your-username',
      link: 'https://github.com/your-username',
      color: '#333',
    },
    {
      icon: <LinkedIn fontSize="large" />,
      title: 'LinkedIn',
      content: 'linkedin.com/in/your-profile',
      link: 'https://linkedin.com/in/your-profile',
      color: '#0A66C2',
    },
  ];

  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.main}15 0%, ${theme.palette.secondary.main}15 100%)`,
        minHeight: 'calc(100vh - 64px)',
        py: { xs: 6, md: 12 },
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            gutterBottom
            align="center"
            sx={{
              mb: 2,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            İletişim
          </Typography>
          <Typography
            variant="h5"
            paragraph
            align="center"
            color="text.secondary"
            sx={{ mb: 8 }}
          >
            Benimle iletişime geçmek için aşağıdaki kanalları kullanabilirsiniz
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {contactInfo.map((contact, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Paper
                  elevation={4}
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 4,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 8px 24px ${contact.color}40`,
                    },
                  }}
                >
                  <IconButton
                    component={Link}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      mb: 2,
                      color: contact.color,
                      backgroundColor: `${contact.color}20`,
                      '&:hover': {
                        backgroundColor: `${contact.color}30`,
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    {contact.icon}
                  </IconButton>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ color: contact.color, fontWeight: 600 }}
                  >
                    {contact.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    component={Link}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      textDecoration: 'none',
                      color: theme.palette.text.secondary,
                      '&:hover': {
                        color: contact.color,
                      },
                    }}
                  >
                    {contact.content}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
