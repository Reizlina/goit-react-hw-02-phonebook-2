import PropTypes from 'prop-types';
import s from './Contacts.module.css';

function Contacts({ contacts, deleteContact }) {
  if (contacts.length === 0) {
    return (
      <div className={s.wrap}>
        <img
          src="https://i.redd.it/od2zyr2letm21.png"
          alt="smile"
          width="300"
        />
      </div>
    );
  } else {
    return (
      <ol className={s.list}>
        {contacts.map(({ name, number, id }) => (
          <li key={id} className={s.item}>
            {name}: {number}
            <button
              className={s.button}
              onClick={() => {
                deleteContact(id);
              }}
            >
              Delete contact
            </button>
          </li>
        ))}
      </ol>
    );
  }
}

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
