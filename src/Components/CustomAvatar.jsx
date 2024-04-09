import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1s infinite ease-in-out',
            border: '1px solid  currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(2)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(3.4)',
            opacity: 0,
        },
    },
}));

export default function CustomAvatar() {
    return (
        <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
        >
            <Link to=''>
                <Tooltip title="Sajad">
                    <Avatar style={{ width: '60px', height: '60px' }} alt="Sajad" src="/assets/imgs/avatar.jpg" />
                </Tooltip>
            </Link>
        </StyledBadge >
    );
}