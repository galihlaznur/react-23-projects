import React, { useEffect, useState } from "react";
import Suggestion from "./Suggestion";

const SearchAutocomplete = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const fetchListOfUsers = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("https://dummyjson.com/users");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (data?.users?.length) {
        setUsers(data.users.map((user) => user.firstName));
        setError(null);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setError(error.message);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
    if (value.length > 1) {
      const filteredData = users?.length
        ? users.filter((user) => user.toLowerCase().indexOf(value) !== -1)
        : [];
      setFilteredUsers(filteredData);
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  const handleClick = (e) => {
    setQuery(e.target.innerText);
    setDropdown(false);
    setFilteredUsers([]);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="search-autocomplete-container">
      <input
        value={query}
        onChange={handleChange}
        name="search-users"
        type="text"
        placeholder="Search Users Here"
      />
      {dropdown && (
        <Suggestion data={filteredUsers} handleClick={handleClick} />
      )}
    </div>
  );
};

export default SearchAutocomplete;
