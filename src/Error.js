const [loading, setLoading] = useState(true);

useEffect(() => {
  setTimeout(() => {
    setCourses(data);
    setFilterData(data);
    setLoading(false);
  }, 1000);
}, []);