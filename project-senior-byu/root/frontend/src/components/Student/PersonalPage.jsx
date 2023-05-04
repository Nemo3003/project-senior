function PersonalPage({ userId }) {
    const [classes, setClasses] = useState([]);
  
    useEffect(() => {
      axios.get(`/users/${userId}/classes`)
        .then(response => setClasses(response.data))
        .catch(error => console.error(error));
    }, [userId]);
  
    return (
      <div>
        <h1>My Enrolled Classes</h1>
        <ul>
          {classes.map(class => (
            <li key={class.id}>
              <h2>{class.name}</h2>
              <p>{class.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  