let actions_types = [
    'RESET_STATE',
    'SET_RESPONSE',
    'SET_ROWSFORPAGE',
    'SET_ERROR'
];

const TYPES = {};
actions_types.map((string) => {

    TYPES[string] = 'CHARACTERS' + string;
});

export default TYPES;