const fetchData = async () => {
  const results = await fetch("https://api.github.com/users");
  return results.json();
};
export { fetchData };
