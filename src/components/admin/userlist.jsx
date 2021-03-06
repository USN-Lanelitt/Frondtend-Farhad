import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: 400,
        maxWidth: 300,
        backgroundColor: theme.palette.background.paper,
    },
}));

function renderRow(props) {
    const { index, style } = props;

    return (
        <ListItem key={index} button style={style}>
            <ListItemAvatar>
                <Avatar
                    alt={`Avatar n°${index + 1}`}
                    src={`https://i.pravatar.cc/300`}
                />
            </ListItemAvatar>
            <ListItemText primary={`Bruker ${index + 1}`} />
        </ListItem>
    );
}

renderRow.propTypes = {
    index: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired,
};

export default function UserList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <FixedSizeList height={400} width={300} itemSize={46} itemCount={200}>
                {renderRow}
            </FixedSizeList>
        </div>
    );
}






