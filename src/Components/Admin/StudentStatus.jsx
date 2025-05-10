import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  TextField,
  Button,
  CircularProgress,
} from '@mui/material';
import axios from 'axios';

const StudentStatus = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');

        const formattedData = response.data.map((user, index) => ({
          id: index + 1,
          name: user.name,
          email: user.email,
          phone: user.phone,
          college: user.company.name,
          degree: ['B.Sc', 'B.Com', 'B.A'][index % 3],
          year: 2025 - (index % 4), // just for demo
          birthDate: `199${index % 10}-01-01`, // dummy birthdates
          status: 'Pending',
        }));

        setStudents(formattedData);
      } catch (error) {
        console.error('Error fetching students:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudentData();
  }, []);

  const handleStatusChange = (e, id) => {
    const updatedStudents = students.map((student) =>
      student.id === id ? { ...student, status: e.target.value } : student
    );
    setStudents(updatedStudents);
  };

  const handleSubmit = () => {
    setSubmitting(true);
    setTimeout(() => {
      console.log('Submitted student statuses:', students);
      setSubmitting(false);
      alert('Student statuses submitted successfully!');
    }, 1500);
  };

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Student Status Management
      </Typography>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table sx={{ minWidth: 1000 }} aria-label="editable student table">
              <TableHead>
                <TableRow>
                  <TableCell><strong>Name</strong></TableCell>
                  <TableCell><strong>Email</strong></TableCell>
                  <TableCell><strong>Phone</strong></TableCell>
                  <TableCell><strong>College</strong></TableCell>
                  <TableCell><strong>Degree</strong></TableCell>
                  <TableCell><strong>Year</strong></TableCell>
                  <TableCell><strong>Birth Date</strong></TableCell>
                  <TableCell><strong>Status</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell>{student.phone}</TableCell>
                    <TableCell>{student.college}</TableCell>
                    <TableCell>{student.degree}</TableCell>
                    <TableCell>{student.year}</TableCell>
                    <TableCell>{student.birthDate}</TableCell>
                    <TableCell>
                      <Select
                        value={student.status}
                        onChange={(e) => handleStatusChange(e, student.id)}
                        size="small"
                        fullWidth
                      >
                        <MenuItem value="Pending">Pending</MenuItem>
                        <MenuItem value="Approved">Approved</MenuItem>
                        <MenuItem value="Rejected">Rejected</MenuItem>
                      </Select>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Submit'}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default StudentStatus;
