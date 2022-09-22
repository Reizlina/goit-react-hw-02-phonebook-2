function Contacts({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          {name}: {number}
          <button
            onClick={() => {
              deleteContact(id);
            }}
          >
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Contacts;
