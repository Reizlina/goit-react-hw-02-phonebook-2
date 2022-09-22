function SearchContact({ findContact }) {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="search" onChange={findContact}></input>
    </>
  );
}

export default SearchContact;
