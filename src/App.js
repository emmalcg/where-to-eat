import { GlobalStyles } from './components/styles/GlobalStyles';
import {WineFilterProvider } from './context/WineFilterContext';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Loader from './components/Loader';
import RestaurantList from './components/RestaurantList'
import Subheading from './components/Subheading';
import AddForm from './components/AddForm';
import Footer from './components/Footer'

function App() {

  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false)
      }, 3000);
    }
  }, [])

  return (
    
    <div>
      <GlobalStyles />
      <Header />
      <WineFilterProvider>
        <div className="wrapper">
          <Subheading/>
          <main>
            {
              loading 
              ? <Loader/>
              : <>
                  <RestaurantList/>
                  <AddForm />
                </>
            }
          </main>
        </div>
      </WineFilterProvider>
      <Footer />
    </div>

    )

}


export default App;