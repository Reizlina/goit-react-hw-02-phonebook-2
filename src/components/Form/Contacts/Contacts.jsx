import { nanoid } from 'nanoid';

function Contacts({ contacts }) {
  const listItem = contacts.map(({ name, number }) => (
    <li key={nanoid()}>
      {name}: {number}
    </li>
  ));
  return <ul>{listItem}</ul>;
}

export default Contacts;
