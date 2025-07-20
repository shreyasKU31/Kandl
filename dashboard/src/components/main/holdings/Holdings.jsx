import { useState, useEffect } from "react";
import axios from "axios";
import Holding from "./Holding"; // Make sure you have this component created

const Holdings = () => {
  // Your existing UI state
  const [price, setPrice] = useState(false);
  const handleView = () => setPrice(!price);

  // State for your data, loading status, and any errors
  const [holdings, setHoldings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        // Make the authenticated GET request to your server
        const response = await axios.get("http://localhost:4000/api/holdings", {
          withCredentials: true, // This is crucial for sending the session cookie
        });

        // Ensure the response is an array before setting the state
        if (Array.isArray(response.data)) {
          setHoldings(response.data);
        } else {
          setError("Data received was not in the expected format.");
          console.error("API did not return an array:", response.data);
        }
      } catch (err) {
        // Handle potential errors, like not being logged in (401) or network issues
        if (err.response) {
          setError(
            err.response.data.message ||
              "Could not fetch holdings. Are you logged in?"
          );
        } else {
          setError("Connection to the server failed. Is the server running?");
        }
        console.error("Error fetching holdings:", err);
      } finally {
        // Set loading to false after the request is complete
        setIsLoading(false);
      }
    };

    fetchHoldings();
  }, []); // Empty array means this effect runs once on component mount

  // --- Render loading state ---
  if (isLoading) {
    return <div className="p-4 text-center">Loading your holdings...</div>;
  }

  // --- Render error state ---
  if (error) {
    return <div className="p-4 text-center text-red-500">{error}</div>;
  }

  // --- Render your JSX with the fetched data ---
  return (
    <div>
      <div>
        <h2 className="text-3xl font-medium py-2 mb-8 border-b-2">Holdings</h2>
      </div>
      <div className="holdings font-medium">
        <p className="text-left">Ticker Name</p>
        <p>Quantity</p>
        <p className="max-lg:hidden">Average Price</p>
        <p className="max-lg:hidden">Invested Amount</p>
        <p className="hover:cursor-pointer" onClick={handleView}>
          {price ? "Net Returns" : "Net Amount"}
        </p>
        <p>Live Price</p>
        <p>1day Returns</p>
      </div>

      {/* Conditionally render the list or a message if there are no holdings */}
      {holdings.length > 0 ? (
        holdings.map((holding) => (
          // Use a unique ID from your data for the key, like holding._id
          <Holding key={holding._id} holding={holding} price={price} />
        ))
      ) : (
        <p className="text-center mt-4">You do not have any holdings.</p>
      )}
    </div>
  );
};

export default Holdings;
