import React, { FunctionComponent, memo } from 'react';

// MUI
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid2';

// Types
import { Contact } from '../../libs/types/resources/Site';

type ContactInfoProps = {
  contact: Contact;
};

const ContactInfo: FunctionComponent<ContactInfoProps> = ({ contact }) => {
  return (
    <Grid container size={10} justifyContent="center" alignItems="center">
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Main Contact Information
          </Typography>
          <List>
            {/* Name and Job Title */}
            <ListItem>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText
                primary={`${contact.firstName} ${contact.lastName}`}
                secondary={contact.jobTitle}
              />
            </ListItem>

            {/* Phone Number */}
            <ListItem>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText primary={contact.phoneNumber} />
            </ListItem>

            {/* Email */}
            <ListItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary={contact.email} />
            </ListItem>

            {/* Address */}
            <ListItem>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText
                primary={`${contact.address.street}, ${contact.address.city}, ${contact.address.country}, ${contact.address.state}, ${contact.address.zipCode}`}
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default memo(ContactInfo);
