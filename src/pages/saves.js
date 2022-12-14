import React from 'react'
import { Box, Stack } from '@mui/material'
import SavedItems from '../components/SavedItems'

const Saves = () => {
    return (
        <Box p={4}>
            <Stack>
                <SavedItems />
            </Stack>
        </Box>
    )
}

export default Saves