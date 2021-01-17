const head = [
  {
    id: 'serial',
    label: 'Serial No.',
    minWidth: 120,
    align: 'left',
    width: 120,
    maxWidth: 120,
  },
  {
    id: 'firstName',
    label: 'First Name',
    minWidth: 200,
    width: 200,
    maxWidth: 200,
  },
  {
    id: 'lastName',
    label: 'Last Name',
    minWidth: 200,
    width: 200,
    maxWidth: 200,
  },
  {
    id: 'avatar',
    label: 'Avatar',
    minWidth: 150,
    width: 150,
    maxWidth: 150,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
];

export default head;
