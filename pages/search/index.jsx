import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Divider } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import fetchData from "../../api/fetchData";
import useScrollPosition from "../../helpers/useScroll";
import toggleBodyScroll from '../../helpers/toggleBodyScroll'
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import styles from "../../styles/Search.module.css";

const SearchPage = ({ articles }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const scrollY = useScrollPosition();
  const dynamicMarginTop = Math.max(60 - scrollY, 0);
  const menuClassName = isChecked ? "active" : "";
  const overlayStyle = isChecked
    ? styles.overlayActive
    : styles.overlayInactive;
  const { query } = router.query;

  const handleCheckboxChange = (checked) => {
    setIsChecked(checked);
  };

  useEffect(() => {
    toggleBodyScroll(isChecked);
  }, [isChecked]);

  // Effect for handling route changes, closing the menu when starting navigation.
  useEffect(() => {
    const handleRouteChange = () => {
      setIsChecked(false);
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  // Effect to perform a search when the query changes.
  useEffect(() => {
    if (query) {
      setSearchQuery(query);
      performSearch(query);
    }
  }, [query]);

  // Handler for search input changes.
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handler for form submission to initiate a search.
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?query=${searchQuery}`);
  };

  // Function to perform the search operation.
  const performSearch = (searchTerm) => {
    const filteredResults = articles.filter((item) => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      return (
        item.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.description.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.content.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.tags.some((tag) => tag.toLowerCase().includes(lowerCaseSearchTerm))
      );
    });

    setResults(filteredResults);
  };

  return (
    <div className={styles.body}>
      <div className={overlayStyle} style={{ marginTop: `${dynamicMarginTop}px` }}></div>
      <Menu isChecked={isChecked} className={menuClassName} />
      <Header isChecked={isChecked} onCheckboxChange={handleCheckboxChange} />
      <Divider style={{ marginBottom: "1px" }} className={styles.headerDivider} />
      <Divider className={styles.headerDivider} />
      <h1 className={styles.pageTitle} style={{marginTop:'20px'}}>Search</h1>
      <div className={styles.containerMain}>
        <div className={styles.containerSearch}>
          <form onSubmit={handleSearchSubmit} className={styles.form}>
            <input
            className={styles.input}
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
            />
            <button type="submit" className={styles.button}><SearchIcon className={styles.icon}/></button>
          </form>
        </div>

        <div className={styles.containerResults}>
          {results && <h1 className={styles.pageTitle}>Results</h1>}
          <Divider className={styles.sectionDivider}/>
            {results.map((item) => (
              <div key={item._id} className={styles.result}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
                <img src={item.cmsUrl} alt="image" className={styles.image}/>
                <Divider className={styles.resultDivider}/>
              </div>
            ))}
        </div>

      </div>
      <Footer className={styles.footer}/>
    </div>
  );
};

// Fetch data for server-side rendering
export async function getServerSideProps() {
  const data = await fetchData(); 
  const articles = data.count

  for(const article of articles){
  if (articles && article.imgId) {
    const cmsResponse = await fetch(
      `https://cdn.contentful.com/spaces/vdnl4md1xpsv/assets/${article.imgId}?access_token=tB7F-mUWmn1dxWECof7Jnq7G_SfXUqreWmM6oG4KvK8`
    );
    const imageData = await cmsResponse.json();
    article.cmsUrl = imageData.fields.file.url; 
  }
}
  return { props: { articles } };
}

export default SearchPage;