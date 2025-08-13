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
} from "@mui/material";
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
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState<boolean>(false);
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: "",
    severity: "success",
  });

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
      email: "muzaffar571181@gmail.com",
      title: "We've received your message",
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
      await emailjs.send(SERVICE_ID, TEMPLATE_AUTO_REPLY, commonParams, PUBLIC_KEY);

      setSnackbar({ open: true, message: "Message sent! We will contact you soon.", severity: "success" });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setSnackbar({ open: true, message: "Failed to send message. Try again later.", severity: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6, mb: 6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="body1" gutterBottom>
          You can reach me via email, phone, or by sending a message below.
        </Typography>
        <Box mt={3} mb={2}>
          <Typography>Email: {OWNER_EMAIL}</Typography>
          <Typography>Phone: +998974088108</Typography>
          <Typography>Address: Uzbekistan, Samarqand, Tashkent</Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            fullWidth
            required
            multiline
            rows={4}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Paper>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity={snackbar.severity} sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}
