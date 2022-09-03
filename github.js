async function getUser(user) {
  const url = `https://api.github.com/users/${user}`;
  const { data: username } = await axios.get(url);
  return username;
}

export default getUser;