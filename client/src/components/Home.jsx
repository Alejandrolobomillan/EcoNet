import React, { useEffect, useState } from 'react';
import { random_products, getProductsByCategory } from '../api/users.api';
import './Home.css';

const CATEGORIES = [
  { codi_cat: 'c6d1db22', nom_cat: 'Fruites' },
  { codi_cat: '8fa13e84', nom_cat: 'Verdures' },
  { codi_cat: '0bb923a6', nom_cat: 'Làctics' },
  { codi_cat: 'ee246505', nom_cat: 'Carns' },
  { codi_cat: '8b8f9f01', nom_cat: 'Cereals' },
  { codi_cat: 'descubre_mas', nom_cat: 'Descubre más' } // Nueva categoría falsa
];

function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState(CATEGORIES[0].codi_cat); // Default to first category
  const [buttonText, setButtonText] = useState('Descubre nuevos productos');
  const [totalPages, setTotalPages] = useState(0); // Estado para almacenar el número total de páginas
  const pageSize = 10;

  useEffect(() => {
    if (buttonText === 'Descubre nuevos productos') {
      fetchRandomProducts();
    } else {
      fetchProductsByCategory();
    }
  }, [currentPage, currentCategory, buttonText]); // Reload products when currentPage, currentCategory, or buttonText changes

  const fetchRandomProducts = () => {
    random_products()
      .then(response => {
        setProducts(response.data);
        setTotalPages(1); // Mostrar solo una página para productos aleatorios
      })
      .catch(error => {
        setError('Hubo un error al obtener los productos aleatorios.');
        console.error('Hubo un error al obtener los productos aleatorios:', error);
      });
  };

  const fetchProductsByCategory = () => {
    getProductsByCategory(currentCategory, currentPage)
      .then(response => {
        setProducts(response.data.results);
        setTotalPages(response.data.total_pages); // Actualizar totalPages con el valor de la API
      })
      .catch(error => {
        setError('Hubo un error al obtener los productos.');
        console.error('Hubo un error al obtener los productos:', error);
      });
  };

  const handleButtonClick = () => {
    setCurrentPage(1); // Resetear a la primera página
    setButtonText('Descubre más productos');
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const handleCategoryClick = (codigo) => {
    if (codigo === 'descubre_mas') {
      fetchRandomProducts(); // Manejar la categoría "Descubre más"
      setButtonText('Descubre más productos');
    } else {
      setCurrentCategory(codigo);
      setCurrentPage(1); // Resetear a la primera página al cambiar de categoría
      setButtonText('Filtrar por categoría');
    }
  };

  const renderCategoryList = () => {
    return (
      <aside className="sidebar">
        <ul>
          {CATEGORIES.map(category => (
            <li key={category.codi_cat} onClick={() => handleCategoryClick(category.codi_cat)}>
              {category.nom_cat}
            </li>
          ))}
        </ul>
      </aside>
    );
  };

  const renderPaginationButtons = () => {
    if (totalPages === 0 || currentPage > totalPages) {
      return null;
    }

    return (
      <div className="pagination">
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          Anterior
        </button>
        <button onClick={() => goToPage(1)}>
          1
        </button>
        <button onClick={() => goToPage(currentPage + 10)} disabled={currentPage + 10 > totalPages}>
          {currentPage + 10}
        </button>
        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Siguiente
        </button>
        <p>Página {currentPage} de {totalPages}</p>
      </div>
    );
  };

  return (
    <div className="home">
      {renderCategoryList()}
      <main className="main-content">
        <h1>La teva botiga online </h1>
        <p>Compra ara els prodcutes més frescs de la comarca</p>
        <button onClick={handleButtonClick}>{buttonText}</button>
        <div className="product-cards">
          {error && <p className="error">{error}</p>}
          {products.map((product) => (
            <div className="card" key={product.codi_pro}>
              <h2>{product.nom_pro}</h2>
              <p>Precio: {product.preu}€</p>
              <p>Descuento: {product.descompte}%</p>
              <p>Cantidad disponible: {product.quantitat_disponible}</p>
              <button> Añadir al carrito</button>
            </div>
          ))}
        </div>
        {renderPaginationButtons()}
      </main>
    </div>
  );
}
export default Home;