/*import { useEffect, useState } from 'react';

function Test() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const Api = 'https://rocktea-mall-api-test.up.railway.app'
    // Make a GET request to fetch data from the API
    fetch(`${Api}/rocktea/storeowner/register`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData)
        setData(responseData); // Set the data in state
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h1>API Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Test;*/
