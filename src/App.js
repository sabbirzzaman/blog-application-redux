import BlogList from './components/BlogList';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchForm from './components/SearchForm';

function App() {
    return (
        <>
            <Header />
            <SearchForm />
            <BlogList />
            <Footer />
        </>
    );
}

export default App;
