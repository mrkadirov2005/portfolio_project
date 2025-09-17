"use client";

import React, { useEffect, useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
  Box,
  Grid,
  Card,
  CardContent,
  IconButton,
  InputAdornment,
  useTheme,
  useMediaQuery,
  Divider,
  Fade,
  Slide,
  Chip,
  alpha,
} from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  Send,
  CheckCircle,
  LinkedIn,
  GitHub,
  Telegram,
  Instagram,
  Accessibility,
  Speed,
  Security,
} from "@mui/icons-material";
import emailjs from "emailjs-com";

// --- CONFIG ---
const SERVICE_ID = "service_f32fe3g";
const TEMPLATE_AUTO_REPLY = "template_o9ibn8n";
const TEMPLATE_NOTIFY = "";
const PUBLIC_KEY = "VCy6wJug5TClAN6y-";
const OWNER_EMAIL = "muzaffar5711181@gmail.com";
// ----------------

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface SnackbarState {
  open: boolean;
  message: string;
  severity: "success" | "error";
}

export default function ContactPage() {
  const theme = useTheme();
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState<boolean>(false);
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: "",
    severity: "success",
  });
  const [activeField, setActiveField] = useState<string | null>(null);

  useEffect(() => {
    try {
      emailjs.init(PUBLIC_KEY);
    } catch {}
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    if (!form.name.trim() || !form.message.trim()) {
      setSnackbar({ open: true, message: "Please fill out all fields.", severity: "error" });
      setLoading(false);
      return;
    }

    if (!validateEmail(form.email)) {
      setSnackbar({ open: true, message: "Please enter a valid email address.", severity: "error" });
      setLoading(false);
      return;
    }

    const commonParams = {
      name: form.name,
      email: form.email,
      title: "We&apos;ve received your message",
      message: form.message,
    };

    try {
      const notifyTemplateId = TEMPLATE_NOTIFY || TEMPLATE_AUTO_REPLY;
      const notifyParams = {
        ...commonParams,
        to_email: OWNER_EMAIL,
        recipient_email: OWNER_EMAIL,
      };

      await emailjs.send(SERVICE_ID, notifyTemplateId, notifyParams, PUBLIC_KEY);
      await emailjs.send(SERVICE_ID, TEMPLATE_AUTO_REPLY, {
        ...commonParams,
        to_email: form.email,
        recipient_email: form.email,
      }, PUBLIC_KEY);

      setSnackbar({ open: true, message: "Message sent successfully! We will contact you soon.", severity: "success" });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setSnackbar({ open: true, message: "Failed to send message. Please try again later.", severity: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 6 }, mb: 6 }}>
      <Slide in={true} direction="up" timeout={500}>
        <Box>
          <Typography 
            variant="h2" 
            fontWeight="bold" 
            gutterBottom 
            textAlign="center"
            sx={{ 
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Let&apos;s Connect
          </Typography>
          
          <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
            I&apos;m always excited to take on new projects and collaborate. Let&apos;s bring your ideas to life!
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <Paper 
                elevation={8} 
                sx={{ 
                  p: 4, 
                  borderRadius: 4,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.8)}, ${alpha(theme.palette.background.paper, 0.9)})`,
                  backdropFilter: 'blur(10px)',
                  border: '1px solid',
                  borderColor: alpha(theme.palette.primary.main, 0.2),
                }}
              >
                <Typography variant="h5" fontWeight="600" gutterBottom>
                  Send a Message
                </Typography>
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Have a question or want to work together? Fill out the form below and I&apos;ll get back to you as soon as possible.
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                  <TextField
                    label="Your Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                    onFocus={() => setActiveField('name')}
                    onBlur={() => setActiveField(null)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {form.name && activeField === 'name' && <CheckCircle color="success" />}
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        '&.Mui-focused fieldset': {
                          borderWidth: 2,
                          borderColor: theme.palette.primary.main,
                        },
                      },
                    }}
                  />
                  
                  <TextField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                    onFocus={() => setActiveField('email')}
                    onBlur={() => setActiveField(null)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {form.email && validateEmail(form.email) && activeField === 'email' && <CheckCircle color="success" />}
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        '&.Mui-focused fieldset': {
                          borderWidth: 2,
                          borderColor: theme.palette.primary.main,
                        },
                      },
                    }}
                  />
                  
                  <TextField
                    label="Your Message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    fullWidth
                    required
                    multiline
                    rows={5}
                    margin="normal"
                    onFocus={() => setActiveField('message')}
                    onBlur={() => setActiveField(null)}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        '&.Mui-focused fieldset': {
                          borderWidth: 2,
                          borderColor: theme.palette.primary.main,
                        },
                      },
                    }}
                  />
                  
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    sx={{ 
                      mt: 3, 
                      py: 1.5, 
                      borderRadius: 2,
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      boxShadow: `0 4px 15px ${alpha(theme.palette.primary.main, 0.3)}`,
                      '&:hover': {
                        boxShadow: `0 6px 20px ${alpha(theme.palette.primary.main, 0.4)}`,
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                    disabled={loading}
                    startIcon={!loading && <Send />}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </Box>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={5}>
              <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Card 
                  elevation={4} 
                  sx={{ 
                    borderRadius: 3,
                    background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.secondary.main, 0.1)})`,
                    border: '1px solid',
                    borderColor: alpha(theme.palette.primary.main, 0.2),
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" fontWeight="600" gutterBottom>
                      Contact Information
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Email color="primary" sx={{ mr: 2 }} />
                        <Typography>{OWNER_EMAIL}</Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Phone color="primary" sx={{ mr: 2 }} />
                        <Typography>+998 97 408-81-08</Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <LocationOn color="primary" sx={{ mr: 2, mt: 0.5 }} />
                        <Typography>Uzbekistan, Samarqand, Tashkent</Typography>
                      </Box>
                    </Box>
                    
                    <Divider sx={{ my: 3 }} />
                    
                    <Typography variant="h6" fontWeight="600" gutterBottom>
                      Connect With Me
                    </Typography>
                    
                    <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                      <IconButton 
                        color="primary" 
                        sx={{ 
                          background: alpha(theme.palette.primary.main, 0.1),
                          '&:hover': { background: alpha(theme.palette.primary.main, 0.2) }
                        }}
                      >
                        <LinkedIn />
                      </IconButton>
                      
                      <IconButton 
                        color="primary" 
                        sx={{ 
                          background: alpha(theme.palette.primary.main, 0.1),
                          '&:hover': { background: alpha(theme.palette.primary.main, 0.2) }
                        }}
                      >
                        <GitHub />
                      </IconButton>
                      
                      <IconButton 
                        color="primary" 
                        sx={{ 
                          background: alpha(theme.palette.primary.main, 0.1),
                          '&:hover': { background: alpha(theme.palette.primary.main, 0.2) }
                        }}
                      >
                        <Telegram />
                      </IconButton>
                      
                      <IconButton 
                        color="primary" 
                        sx={{ 
                          background: alpha(theme.palette.primary.main, 0.1),
                          '&:hover': { background: alpha(theme.palette.primary.main, 0.2) }
                        }}
                      >
                        <Instagram />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
                
                <Card 
                  elevation={4} 
                  sx={{ 
                    borderRadius: 3,
                    background: `linear-gradient(135deg, ${alpha(theme.palette.info.main, 0.1)}, ${alpha(theme.palette.success.main, 0.1)})`,
                    border: '1px solid',
                    borderColor: alpha(theme.palette.info.main, 0.2),
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" fontWeight="600" gutterBottom>
                      Why Work With Me?
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Speed color="info" sx={{ mr: 2 }} />
                        <Box>
                          <Typography variant="subtitle2" fontWeight="600">Fast Response</Typography>
                          <Typography variant="body2" color="text.secondary">
                            I typically reply within a few hours
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Security color="info" sx={{ mr: 2 }} />
                        <Box>
                          <Typography variant="subtitle2" fontWeight="600">Secure Communication</Typography>
                          <Typography variant="body2" color="text.secondary">
                            Your data is protected and never shared
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Accessibility color="info" sx={{ mr: 2 }} />
                        <Box>
                          <Typography variant="subtitle2" fontWeight="600">Accessibility</Typography>
                          <Typography variant="body2" color="text.secondary">
                            Available across multiple platforms
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
                
                <Fade in={true} timeout={1000}>
                  <Paper 
                    elevation={2} 
                    sx={{ 
                      p: 2, 
                      borderRadius: 3,
                      textAlign: 'center',
                      background: `linear-gradient(135deg, ${alpha(theme.palette.success.main, 0.1)}, ${alpha(theme.palette.success.main, 0.05)})`,
                      border: '1px solid',
                      borderColor: alpha(theme.palette.success.main, 0.2),
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      Currently available for freelance projects and collaborations
                    </Typography>
                    <Chip 
                      label="Available" 
                      color="success" 
                      size="small" 
                      sx={{ mt: 1 }} 
                    />
                  </Paper>
                </Fade>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Slide>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert 
          severity={snackbar.severity} 
          sx={{ width: "100%" }}
          onClose={handleCloseSnackbar}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}