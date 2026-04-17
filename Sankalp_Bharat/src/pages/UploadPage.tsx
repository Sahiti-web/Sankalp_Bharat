import React, { useState, useRef } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  useTheme,
  CircularProgress,
  Alert,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import api from '../services/api';

const UploadPage: React.FC = () => {
  const theme = useTheme();
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successResult, setSuccessResult] = useState<any | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
      setError(null);
      setSuccessResult(null);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setError(null);
      setSuccessResult(null);
    }
  };

  const clearSelection = () => {
    setFile(null);
    setError(null);
    setSuccessResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file to upload.');
      return;
    }

    setUploading(true);
    setError(null);
    setSuccessResult(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await api.post('/records/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setSuccessResult(response.data);
      setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (err: any) {
      console.error('Upload failed:', err);
      setError(err.response?.data?.message || err.message || 'File upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom fontWeight="bold" color="text.primary">
        Full Data Upload
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
        Securely upload bulk emissions data files (CSV, XLSX) for automatic processing and ingestion into the CarbonLens platform.
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {successResult && (
        <Alert severity="success" sx={{ mb: 3 }}>
          File uploaded and processed successfully! 
          {successResult.processedRows !== undefined && ` Processed ${successResult.processedRows} items.`}
        </Alert>
      )}

      <Paper
        elevation={0}
        sx={{
          p: 6,
          borderRadius: 3,
          border: `2px dashed ${isDragging ? theme.palette.primary.main : theme.palette.divider}`,
          bgcolor: isDragging ? theme.palette.action.hover : theme.palette.background.paper,
          textAlign: 'center',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          position: 'relative'
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !file && fileInputRef.current?.click()}
      >
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        />

        {!file ? (
          <Box>
            <CloudUploadIcon sx={{ fontSize: 64, color: theme.palette.primary.main, mb: 2, opacity: 0.8 }} />
            <Typography variant="h6" color="text.primary" gutterBottom>
              Drag & Drop your file here
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              or click to browse from your computer
            </Typography>
            <Button variant="contained" onClick={() => fileInputRef.current?.click()} disableElevation>
              Browse Files
            </Button>
            <Typography variant="caption" display="block" color="text.disabled" sx={{ mt: 3 }}>
              Supported formats: CSV, XLSX (Max 10MB)
            </Typography>
          </Box>
        ) : (
          <Box sx={{ py: 2 }}>
            <ListItemIcon sx={{ justifyContent: 'center', mb: 2 }}>
              <InsertDriveFileIcon color="primary" sx={{ fontSize: 48 }} />
            </ListItemIcon>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {file.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              {(file.size / 1024).toFixed(2)} KB
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 2 }}>
              <Button 
                variant="outlined" 
                color="inherit" 
                onClick={(e) => { e.stopPropagation(); clearSelection(); }}
                disabled={uploading}
              >
                Cancel
              </Button>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={(e) => { e.stopPropagation(); handleUpload(); }}
                disabled={uploading}
                startIcon={uploading ? <CircularProgress size={20} color="inherit" /> : <CheckCircleIcon />}
              >
                {uploading ? 'Processing...' : 'Upload Data'}
              </Button>
            </Box>
          </Box>
        )}
      </Paper>
      
      <Box sx={{ mt: 6 }}>
        <Typography variant="h6" gutterBottom color="text.primary">
          Upload Guidelines
        </Typography>
        <List dense>
          <ListItem>
            <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
            <ListItemText primary="Ensure data includes mandatory columns: Facility, Source Type, Value, Unit, Period." />
          </ListItem>
          <ListItem>
            <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
            <ListItemText primary="Date formats should be standard (YYYY-MM-DD) or separate Month/Year columns." />
          </ListItem>
          <ListItem>
            <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
            <ListItemText primary="Batch files are processed sequentially. Check the governance dashboard for flagged records." />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default UploadPage;
