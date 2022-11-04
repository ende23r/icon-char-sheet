'use strict';
import React from 'react';
import MenuItem from '@mui/material/MenuItem';

export function makeMenuItem(name: string, field="select") {
    return React.createElement(
        MenuItem,
        {
            value: name,
            key: `menuitem-${field}-${name}`,
        },
        name,
    );
}
