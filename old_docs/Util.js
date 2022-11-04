'use strict';

export function makeMenuItem(name, field="select") {
    return React.createElement(
        MaterialUI.MenuItem,
        {
            value: name,
            key: `menuitem-${field}-${name}`,
        },
        name,
    );
}
