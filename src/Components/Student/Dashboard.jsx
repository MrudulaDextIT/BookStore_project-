import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Grid,
  Card,
  Paper,
  Tooltip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import LockResetIcon from '@mui/icons-material/LockReset';
import logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.up('md'));

  const handleLogout = () => {
    navigate('/student/login');
  };

  return (
    <Box sx={{ bgcolor: '#f9f9f9', minHeight: '100vh', width: '100vw' }}>
      {/* Navbar */}
      <AppBar position="static" sx={{ bgcolor: '#000', width: '100%' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box display="flex" alignItems="center">
            <img src={logo} alt="Logo" style={{ height: 35 }} />
          </Box>
          <Box>
            <Tooltip title="Logout">
              <IconButton onClick={handleLogout} sx={{ color: '#fff' }}>
                <LogoutIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', px: 2, py: 4 }}>
        <Paper
          elevation={3}
          sx={{
            width: '100%',
            maxWidth: '1300px',
            p: { xs: 8, md: 10 },
            borderRadius: 2,
            minHeight: 'calc(100vh - 100px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            mt: 3,
          }}
        >
          {/* Heading */}
          <Typography variant={isLaptop ? 'h4' : 'h5'} fontWeight="bold" mb={2} textAlign="center">
            Book Ordering Dashboard
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            mb={6}
            sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, textAlign: 'center' }}
          >
            Browse and order textbooks, reference books, and academic materials tailored to your branch and standard.
          </Typography>

          {/* Cards */}
          <Grid
            container
            spacing={4}
            justifyContent="center"
            sx={{ mt: 4 }}
          >
            {/* Order Books */}
            <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
              <Card
                onClick={() => navigate('/student/order-books')}
                sx={{
                  width: '100%',
                  maxWidth: 350,
                  p: 3,
                  textAlign: 'center',
                  bgcolor: '#e3f2fd',
                  borderRadius: 3,
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 8,
                  },
                }}
              >
                <LibraryBooksIcon fontSize="large" color="primary" />
                <Typography variant="h6" mt={2}>
                  Order Books
                </Typography>
                <Typography variant="body2" mt={1}>
                  Select and place your study material orders.
                </Typography>
              </Card>
            </Grid>

            {/* My Orders */}
            <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
              <Card
                onClick={() => navigate('/student/my-orders')}
                sx={{
                  width: '100%',
                  maxWidth: 350,
                  p: 3,
                  textAlign: 'center',
                  bgcolor: '#f3e5f5',
                  borderRadius: 3,
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 8,
                  },
                }}
              >
                <ReceiptLongIcon fontSize="large" color="secondary" />
                <Typography variant="h6" mt={2}>
                  My Orders
                </Typography>
                <Typography variant="body2" mt={1}>
                  View status of your placed book orders.
                </Typography>
              </Card>
            </Grid>

            {/* Change Password */}
            <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
              <Card
                onClick={() => navigate('/student/change-password')}
                sx={{
                  width: '100%',
                  maxWidth: 350,
                  p: 3,
                  textAlign: 'center',
                  bgcolor: '#fff3e0',
                  borderRadius: 3,
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 8,
                  },
                }}
              >
                <LockResetIcon fontSize="large" sx={{ color: '#ff9800' }} />
                <Typography variant="h6" mt={2}>
                  Change Password
                </Typography>
                <Typography variant="body2" mt={1}>
                  Update your account password securely.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
};

export default StudentDashboard;
