import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function DataFetcher() {
    const [data, setData] = useState<any>(null);     // store fetched data
    const [loading, setLoading] = useState(true); // show loading state
    const [error, setError] = useState<string | null>(null); // handle errors

    useEffect(() => {
        // Example API endpoint
        const API_URL = 'https://dummyjson.com/users';

        // Fetch data from the API
        fetch(API_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []); // Empty dependency array → runs once when component mounts

    // Handle loading and error states
    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

    // Render data
    return (
        <div>
            <h2>Fetched Posts</h2>
            {data?.users && (
                <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>Gender</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.users.map((item: any) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.firstName}</TableCell>
                                    <TableCell>{item.lastName}</TableCell>
                                    <TableCell>{item.gender}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    );
}

export default DataFetcher;
