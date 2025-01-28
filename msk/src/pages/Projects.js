import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Box,
  Chip,
  useTheme,
} from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-Ticaret Platformu',
    description: 'Modern bir e-ticaret platformu. Kullanıcı dostu arayüz, güvenli ödeme sistemi ve yönetim paneli içerir.',
    image: '/project1.jpg',
    technologies: [
      { name: 'React', color: '#61dafb' },
      { name: 'Node.js', color: '#339933' },
      { name: 'MongoDB', color: '#47A248' },
    ],
    githubLink: 'https://github.com/your-username/project1',
    liveLink: 'https://project1-demo.com',
  },
  {
    title: 'Yapay Zeka Asistanı',
    description: 'Doğal dil işleme teknolojileri kullanan akıllı bir chatbot uygulaması. Müşteri hizmetleri için optimize edilmiştir.',
    image: '/project2.jpg',
    technologies: [
      { name: 'Python', color: '#3776ab' },
      { name: 'TensorFlow', color: '#ff6f00' },
      { name: 'Flask', color: '#000000' },
    ],
    githubLink: 'https://github.com/your-username/project2',
    liveLink: 'https://project2-demo.com',
  },
];

const Projects = () => {
  const theme = useTheme();

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
            align="center"
            gutterBottom
            sx={{
              mb: 6,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Projelerim
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card
                  elevation={4}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      objectFit: 'cover',
                      borderBottom: `4px solid ${theme.palette.primary.main}`,
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h5" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech.name}
                          label={tech.name}
                          sx={{
                            backgroundColor: `${tech.color}20`,
                            color: tech.color,
                            fontWeight: 600,
                            '&:hover': {
                              backgroundColor: `${tech.color}30`,
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button
                      variant="contained"
                      startIcon={<GitHub />}
                      href={project.githubLink}
                      target="_blank"
                      sx={{
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        color: 'white',
                        '&:hover': {
                          background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                        },
                      }}
                    >
                      GitHub
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<Launch />}
                      href={project.liveLink}
                      target="_blank"
                      color="primary"
                      sx={{ ml: 2 }}
                    >
                      Demo
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
